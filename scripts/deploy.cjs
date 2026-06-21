const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

function loadEnv() {
  const envPath = path.join(__dirname, "../.env");
  if (!fs.existsSync(envPath)) {
    console.error("Error: .env file not found at project root.");
    process.exit(1);
  }
  const env = {};
  const content = fs.readFileSync(envPath, "utf8");
  content.split("\n").forEach((line) => {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
    if (match) {
      let value = match[2] || "";
      if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
      if (value.startsWith("'") && value.endsWith("'")) value = value.slice(1, -1);
      env[match[1]] = value.trim();
    }
  });
  return env;
}

function walkDir(dir) {
  let files = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      files = files.concat(walkDir(fullPath));
    } else {
      if (file !== ".DS_Store") {
        files.push(fullPath);
      }
    }
  });
  return files;
}

function main() {
  const env = loadEnv();
  const host = env.SFTP_HOST;
  const port = env.SFTP_PORT || "22";
  const user = env.SFTP_USER;
  const pass = env.SFTP_PASS;
  const remoteDir = env.SFTP_REMOTE_DIR || "www";

  if (!host || !user || !pass) {
    console.error("Error: Missing SFTP_HOST, SFTP_USER, or SFTP_PASS in .env file.");
    process.exit(1);
  }

  const distDir = path.join(__dirname, "../dist");
  if (!fs.existsSync(distDir)) {
    console.error("Error: dist/ directory not found. Run npm run build or yarn build first.");
    process.exit(1);
  }

  console.log("Scanning build directory...");
  const files = walkDir(distDir);
  console.log(`Found ${files.length} files to upload.`);

  // Create SFTP expect script commands
  const sftpCommands = [
    `expect "sftp>" { send "cd ${remoteDir}\\r" }`,
    'expect "sftp>" { send "mkdir assets\\r" }',
    'expect "sftp>" { send "cd assets\\r" }',
    'expect "sftp>" { send "mkdir images\\r" }',
    'expect "sftp>" { send "cd ..\\r" }',
    `expect "sftp>" { send "rm index.html\\r" }`,
    `expect "sftp>" { send "lcd ${distDir}\\r" }`,
  ];

  files.forEach((file) => {
    const relPath = path.relative(distDir, file);
    const remotePath = relPath.replace(/\\/g, "/");
    sftpCommands.push(`expect "sftp>" { send "put ${remotePath} ${remotePath}\\r" }`);
  });

  sftpCommands.push('expect "sftp>" { send "exit\\r" }');

  const expContent = `#!/usr/bin/expect -f
set timeout 300
spawn sftp -o StrictHostKeyChecking=no -P ${port} ${user}@${host}
expect {
    "password:" {
        send "${pass}\\r"
    }
    timeout {
        send_user "Timeout waiting for password prompt\\n"
        exit 1
    }
}
${sftpCommands.join("\n")}
expect eof
`;

  const expFilePath = path.join(__dirname, "../.deploy.exp");
  fs.writeFileSync(expFilePath, expContent, { mode: 0o700 });

  console.log("Uploading build to SFTP...");
  try {
    execSync(`expect ${expFilePath}`, { stdio: "inherit" });
    console.log("\nDeployment completed successfully!");
  } catch (error) {
    console.error("\nDeployment failed!");
    process.exit(1);
  } finally {
    if (fs.existsSync(expFilePath)) {
      fs.unlinkSync(expFilePath);
    }
  }
}

main();
