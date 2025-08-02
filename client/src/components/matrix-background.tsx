import { useEffect } from "react";

export default function MatrixBackground() {
  useEffect(() => {
    const matrixContainer = document.querySelector('.matrix-rain');
    if (!matrixContainer) return;

    const characters = '01';
    
    for (let i = 0; i < 50; i++) {
      const drop = document.createElement('div');
      drop.className = 'matrix-drop';
      drop.style.cssText = `
        position: absolute;
        top: -100px;
        left: ${Math.random() * 100}%;
        color: var(--code-accent);
        font-family: 'JetBrains Mono', monospace;
        font-size: 14px;
        animation: matrix ${15 + Math.random() * 10}s linear infinite;
        animation-delay: ${Math.random() * 10}s;
        opacity: 0.6;
      `;
      drop.textContent = characters[Math.floor(Math.random() * characters.length)];
      matrixContainer.appendChild(drop);
    }

    return () => {
      if (matrixContainer) {
        matrixContainer.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 opacity-10">
      <div className="matrix-rain h-full w-full relative overflow-hidden"></div>
    </div>
  );
}
