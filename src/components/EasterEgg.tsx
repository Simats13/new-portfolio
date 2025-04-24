import React, { useEffect, useState, useMemo } from "react";
import { translate } from "../i18n";

interface EasterEggProps {
  isVisible: boolean;
  onClose: () => void;
}

// Type pour représenter l'état d'une taupe
interface Mole {
  visible: boolean;
  position: number;
}

const EasterEgg: React.FC<EasterEggProps> = ({ isVisible, onClose }) => {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [moles, setMoles] = useState<Mole[]>(
    Array(9)
      .fill(0)
      .map((_, idx) => ({ visible: false, position: idx }))
  );

  // Fonction pour faire apparaître des taupes aléatoirement
  const showRandomMoles = () => {
    const newMoles = [...moles];
    // Cacher toutes les taupes d'abord
    newMoles.forEach((mole) => (mole.visible = false));

    // Faire apparaître aléatoirement 2-3 taupes
    const numberOfMoles = Math.floor(Math.random() * 2) + 2; // 2 ou 3 taupes
    for (let i = 0; i < numberOfMoles; i++) {
      const randomIndex = Math.floor(Math.random() * 9);
      newMoles[randomIndex].visible = true;
    }

    setMoles(newMoles);
  };

  useEffect(() => {
    if (!isVisible) return;

    // Réinitialiser le jeu quand il devient visible
    setScore(0);
    setGameOver(false);
    setTimeLeft(30);
    setMoles(
      Array(9)
        .fill(0)
        .map((_, idx) => ({ visible: false, position: idx }))
    );

    // Démarrer le timer
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setGameOver(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Timer pour faire apparaître des taupes
    const moleTimer = setInterval(() => {
      if (!gameOver) {
        showRandomMoles();
      }
    }, 1200); // Changer les taupes toutes les 1.2 secondes

    return () => {
      clearInterval(timer);
      clearInterval(moleTimer);
    };
  }, [isVisible, gameOver]);

  const handleClickMole = (index: number) => {
    if (!gameOver && moles[index].visible) {
      // Augmenter le score et cacher la taupe
      setScore((prev) => prev + 1);
      const newMoles = [...moles];
      newMoles[index].visible = false;
      setMoles(newMoles);
    }
  };

  const playAgain = () => {
    setScore(0);
    setGameOver(false);
    setTimeLeft(30);
    setMoles(
      Array(9)
        .fill(0)
        .map((_, idx) => ({ visible: false, position: idx }))
    );
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full text-center">
        <h2 className="text-2xl font-bold mb-4">
          🎮{" "}
          {translate(
            "easterEgg.title",
            "Bravo, vous avez trouvé l'easter egg !"
          )}
        </h2>

        {gameOver ? (
          <div className="space-y-4">
            <p className="text-xl">
              {translate("easterEgg.finalScore", "Score final")}: {score}
            </p>
            <button
              onClick={playAgain}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
            >
              {translate("easterEgg.playAgain", "Rejouer")}
            </button>
            <button
              onClick={onClose}
              className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
            >
              {translate("easterEgg.close", "Fermer")}
            </button>
          </div>
        ) : (
          <>
            <div className="mb-4">
              <p className="text-lg">
                {translate("easterEgg.score", "Score")}: {score}
              </p>
              <p className="text-lg">
                {translate("easterEgg.timeLeft", "Temps restant")}: {timeLeft}s
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              {moles.map((mole, idx) => (
                <div
                  key={idx}
                  onClick={() => handleClickMole(idx)}
                  className={`
                    h-20 rounded-md flex items-center justify-center cursor-pointer
                    ${
                      mole.visible
                        ? "bg-green-500 hover:bg-green-600"
                        : "bg-green-200"
                    }
                  `}
                >
                  {mole.visible && <span className="text-3xl">🐹</span>}
                </div>
              ))}
            </div>

            <p className="text-sm mb-4">
              {translate(
                "easterEgg.instructions",
                "Cliquez sur les cases vertes foncées avec la taupe pour gagner des points !"
              )}
            </p>

            <button
              onClick={onClose}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            >
              {translate("easterEgg.exit", "Quitter le jeu")}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default EasterEgg;
