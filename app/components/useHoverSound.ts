import { useRef, useCallback } from "react";

export function useHoverSound() {
  const audioCtxRef = useRef<AudioContext | null>(null);
  const lastPlayedRef = useRef<number>(0);

  const play = useCallback(() => {
    const now = Date.now();
    if (now - lastPlayedRef.current < 80) return;
    lastPlayedRef.current = now;

    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContext();
      }
      const ctx = audioCtxRef.current;

      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);

      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(900, ctx.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(500, ctx.currentTime + 0.06);

      gainNode.gain.setValueAtTime(0.07, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);

      oscillator.start(ctx.currentTime);
      oscillator.stop(ctx.currentTime + 0.06);
    } catch {
      // AudioContext unavailable
    }
  }, []);

  return { play };
}
