import React, { useEffect, useState } from "react";

// Séquence du Konami Code: haut, haut, bas, bas, gauche, droite, gauche, droite, B, A
const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB", // Peut aussi être "b" ou "B"
  "KeyA", // Peut aussi être "a" ou "A"
];

interface KonamiCodeProps {
  onKonamiCodeComplete: () => void;
  children?: React.ReactNode;
}

const KonamiCode: React.FC<KonamiCodeProps> = ({
  onKonamiCodeComplete,
  children,
}) => {
  const [keysPressed, setKeysPressed] = useState<string[]>([]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Debug pour voir ce qui est réellement capturé
      console.log("Touche pressée:", e.code, e.key);

      // Utiliser le code de la touche pour une plus grande compatibilité
      let key = e.code;

      // Adaptation pour les touches A et B qui peuvent être détectées différemment selon les navigateurs
      if (e.key === "b" || e.key === "B") {
        key = "KeyB";
      } else if (e.key === "a" || e.key === "A") {
        key = "KeyA";
      }

      // Ajouter la nouvelle touche pressée à notre tableau
      const updatedKeysPressed = [...keysPressed, key];

      // Garder seulement les dernières touches qui correspondent à la longueur du Konami Code
      const lastKeysPressed = updatedKeysPressed.slice(-KONAMI_CODE.length);

      setKeysPressed(lastKeysPressed);

      // Debug pour voir la séquence actuelle
      console.log("Séquence actuelle:", lastKeysPressed);

      // Vérifier si les touches correspondent au Konami Code
      const isKonamiCode =
        lastKeysPressed.length === KONAMI_CODE.length &&
        lastKeysPressed.every((k, i) => k === KONAMI_CODE[i]);

      console.log("Est Konami Code:", isKonamiCode);

      if (isKonamiCode) {
        console.log("KONAMI CODE ACTIVÉ!");
        // Appeler la fonction de callback
        onKonamiCodeComplete();
        // Réinitialiser les touches pressées
        setKeysPressed([]);
      }
    };

    // Ajouter l'écouteur d'événement
    window.addEventListener("keydown", handleKeyDown);

    // Nettoyer l'écouteur d'événement lors du démontage du composant
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [keysPressed, onKonamiCodeComplete]);

  return <>{children}</>;
};

export default KonamiCode;
