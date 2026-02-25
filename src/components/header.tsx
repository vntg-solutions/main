"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, LogIn } from "lucide-react";
import { cn } from "../lib/utils";

const navItems = ["Solutions", "Platform", "Use Cases", "Contact"];

export function Header() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "sticky top-0 z-40 border-b border-white/10",
        "bg-primary/70 backdrop-blur-xl"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-0">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-accent/80 to-sky-400/80 shadow-soft-xl">
            <span className="text-xs font-semibold tracking-[0.08em] text-primary">
              V
            </span>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-200">
              VANTAGE
            </div>
            <p className="hidden text-[11px] text-zinc-500 md:block">
              Digital infrastructure studio
            </p>
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
          {navItems.map((item) => (
            <button
              key={item}
              className="relative cursor-pointer text-xs font-medium tracking-wide text-zinc-400 transition hover:text-zinc-100"
              type="button"
            >
              {item}
              <span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-gradient-to-r from-accent/0 via-accent/80 to-accent/0 transition-transform duration-200 ease-out group-hover:scale-x-100" />
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="hidden items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs font-medium text-zinc-300 transition hover:border-white/20 hover:bg-white/5 md:inline-flex"
          >
            <LogIn className="h-3.5 w-3.5" />
            Client Portal
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3.5 py-1.5 text-xs font-semibold text-primary shadow-soft-xl transition hover:bg-accent/90"
          >
            Book intro
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </motion.header>
  );
}

