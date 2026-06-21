import React from "react";

interface Props {
  isVisible: boolean;
  onClose: () => void;
}

const EasterEgg: React.FC<Props> = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-bg/90 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative mx-5 max-w-md rounded-3xl border border-ink/40 bg-surface p-8 text-center shadow-glow"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 text-muted transition-colors hover:text-text"
        >
          <i className="fa-solid fa-xmark" />
        </button>

        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-ink/25 to-pink-strong/25 text-3xl">
          🎮
        </div>

        <h3 className="gradient-text text-2xl font-bold">Konami Code unlocked!</h3>
        <p className="mt-3 text-muted">
          ↑ ↑ ↓ ↓ ← → ← → B A — bien joué, t'as l'œil d'un vrai dev. 🚀
        </p>

        <p className="mt-4 font-mono text-xs text-ink">
          while (curious) {"{"} keepHacking(); {"}"}
        </p>

        <button onClick={onClose} className="btn-primary mt-6 w-full">
          GG
        </button>
      </div>
    </div>
  );
};

export default EasterEgg;
