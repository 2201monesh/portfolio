"use client";

import { createContext, useContext, useState, useRef, useCallback, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

type Highlight = { top: number; left: number; width: number; height: number };
type CtxType = {
  onEnter: (e: React.MouseEvent<HTMLElement>) => void;
  onLeave: () => void;
};

const HoverCtx = createContext<CtxType>({ onEnter: () => {}, onLeave: () => {} });

export function HighlightWrapper({ children }: { children: React.ReactNode }) {
  const [hl, setHl] = useState<Highlight | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setHl(null);
  }, [pathname]);

  const onEnter = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    const container = containerRef.current;
    if (!container) return;
    const cr = container.getBoundingClientRect();
    const er = e.currentTarget.getBoundingClientRect();
    setHl({
      top: er.top - cr.top,
      left: er.left - cr.left,
      width: er.width,
      height: er.height,
    });
  }, []);

  const onLeave = useCallback(() => {
    timerRef.current = setTimeout(() => setHl(null), 50);
  }, []);

  return (
    <HoverCtx.Provider value={{ onEnter, onLeave }}>
      <div ref={containerRef} className="relative">
        <AnimatePresence>
          {hl && (
            <motion.div
              key="hl"
              className="absolute rounded bg-neutral-200/50 ring-1 ring-neutral-300 pointer-events-none"
              initial={{ opacity: 0, top: hl.top, left: hl.left - 8, width: hl.width + 16, height: hl.height }}
              animate={{ opacity: 1, top: hl.top, left: hl.left - 8, width: hl.width + 16, height: hl.height }}
              exit={{ opacity: 0 }}
              transition={{ ease: "easeOut", duration: 0.15 }}
            />
          )}
        </AnimatePresence>
        {children}
      </div>
    </HoverCtx.Provider>
  );
}

export function useHoverHighlight() {
  return useContext(HoverCtx);
}
