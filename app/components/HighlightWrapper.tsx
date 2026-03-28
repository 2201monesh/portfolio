"use client";

import { createContext, useContext, useState, useRef, useCallback, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

type Highlight = { top: number; left: number; width: number; height: number; tag: string; label: string };
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
      tag: e.currentTarget.tagName.toLowerCase(),
      label: (e.currentTarget as HTMLElement).dataset.label ?? "",
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
              className="absolute bg-slate-100/70 ring-1 ring-slate-300 pointer-events-none"
              initial={{ opacity: 0, top: hl.top, left: hl.left, width: hl.width, height: hl.height }}
              animate={{ opacity: 1, top: hl.top, left: hl.left, width: hl.width, height: hl.height }}
              exit={{ opacity: 0 }}
              transition={{ ease: "easeOut", duration: 0.15 }}
            >
              <span className="absolute -top-6 left-0 inline-flex items-center gap-1.5 px-2 py-1 text-xs font-mono bg-blue-100 text-blue-600 leading-none">
                {hl.label && <><span>{hl.label}</span><span className="text-blue-400">·</span></>}
                <span>{hl.tag}</span>
              </span>
            </motion.div>
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
