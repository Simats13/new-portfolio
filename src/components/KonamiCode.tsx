import React, { useEffect, useRef } from "react";

// Konami Code: up, up, down, down, left, right, left, right, B, A
const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
];

interface KonamiCodeProps {
  onKonamiCodeComplete: () => void;
  children?: React.ReactNode;
}

const KonamiCode: React.FC<KonamiCodeProps> = ({ onKonamiCodeComplete, children }) => {
  const buffer = useRef<string[]>([]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      let key = e.code;
      if (e.key === "b" || e.key === "B") key = "KeyB";
      else if (e.key === "a" || e.key === "A") key = "KeyA";

      buffer.current = [...buffer.current, key].slice(-KONAMI_CODE.length);

      if (
        buffer.current.length === KONAMI_CODE.length &&
        buffer.current.every((k, i) => k === KONAMI_CODE[i])
      ) {
        onKonamiCodeComplete();
        buffer.current = [];
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onKonamiCodeComplete]);

  return <>{children}</>;
};

export default KonamiCode;
