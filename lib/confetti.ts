/**
 * Confetti Celebrations Library
 * Trigger confetti animations for achievements and milestones
 */

import confetti from 'canvas-confetti';

// Basic confetti burst
export function fireConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
}

// Star-shaped confetti for achievements
export function fireStarConfetti() {
  const defaults = {
    spread: 360,
    ticks: 60,
    gravity: 0.5,
    decay: 0.94,
    startVelocity: 30,
    colors: ['#FFD700', '#FFA500', '#FF6347', '#00CED1', '#9370DB'],
  };

  function shoot() {
    confetti({
      ...defaults,
      particleCount: 40,
      scalar: 1.2,
      shapes: ['star'],
    });

    confetti({
      ...defaults,
      particleCount: 10,
      scalar: 0.75,
      shapes: ['circle'],
    });
  }

  setTimeout(shoot, 0);
  setTimeout(shoot, 100);
  setTimeout(shoot, 200);
}

// Side cannons for big achievements
export function fireSideCannons() {
  const end = Date.now() + 1000;
  const colors = ['#c9a85c', '#4a9c6d', '#5a7fb8', '#9b59b6', '#e74c3c'];

  (function frame() {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors,
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

// Fireworks effect for major milestones
export function fireFireworks() {
  const duration = 2000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function() {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    });
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    });
  }, 250);
}

// Celebration types mapped to effects
export type CelebrationType = 'basic' | 'achievement' | 'streak' | 'milestone' | 'levelUp';

export function celebrate(type: CelebrationType = 'basic') {
  switch (type) {
    case 'achievement':
      fireStarConfetti();
      break;
    case 'streak':
      fireSideCannons();
      break;
    case 'milestone':
    case 'levelUp':
      fireFireworks();
      break;
    default:
      fireConfetti();
  }
}
