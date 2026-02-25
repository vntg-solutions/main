"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { Section } from "./section";
import { cn } from "../lib/utils";

const rotatingWords = ["Small Business", "Scale-ups", "Global Enterprise"];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <Section className="relative mx-auto mt-10 flex max-w-6xl flex-col gap-12 py-10 md:mt-16 md:py-16">
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[32px] border border-white/10",
          "bg-grid bg-primary/60 shadow-soft-xl"
        )}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.22),transparent_55%)]" />
      </div>

      <div className="relative flex flex-col gap-10 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10 md:py-14">
        <div className="max-w-xl space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[11px] font-medium text-zinc-300 backdrop-blur-xl"
          >
            <Sparkles className="h-3 w-3 text-accent" />
            <span className="uppercase tracking-[0.18em] text-zinc-400">
              Infrastructure, on day zero
            </span>
          </motion.div>

          <div className="space-y-4">
            <h1 className="text-balance text-3xl font-semibold leading-tight md:text-5xl">
              Architecting digital infrastructure for{" "}
              <span className="relative inline-block">
                <span className="opacity-40">Small Business</span>
                <span className="absolute inset-0">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={index}
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: "-80%", opacity: 0 }}
                      transition={{
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="inline-block bg-gradient-to-r from-sky-300 via-accent to-sky-400 bg-clip-text text-transparent"
                    >
                      {rotatingWords[index]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </span>
            </h1>
            <p className="max-w-md text-sm leading-relaxed text-zinc-400 md:text-base">
              Vantage Solutions provisions opinionated, secure, and observable
              infrastructure so your teams can deploy products — not patchwork
              pipelines.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-primary shadow-soft-xl transition hover:bg-accent/90"
            >
              Launch an instant portal
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-zinc-200 backdrop-blur-md transition hover:border-white/20 hover:bg-white/10"
            >
              <ShieldCheck className="h-3.5 w-3.5 text-sky-300" />
              SOC2-aligned from day one
            </button>
          </div>

          <div className="flex flex-wrap gap-4 text-[11px] text-zinc-500">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>99.95% uptime SLOs</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              <span>Global-ready from the first tenant</span>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 w-full max-w-sm md:mt-0"
        >
          <div
            className={cn(
              "glass-surface relative overflow-hidden rounded-3xl p-4",
              "border-white/15 bg-gradient-to-b from-white/10 to-white/0 shadow-soft-xl"
            )}
          >
            <div className="flex items-center justify-between text-[11px] text-zinc-400">
              <span className="inline-flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Live mesh
              </span>
              <span className="rounded-full bg-black/40 px-2 py-0.5 text-[10px] text-zinc-300">
                Multi-tenant
              </span>
            </div>

            <div className="mt-4 space-y-3 rounded-2xl bg-black/60 p-4 ring-1 ring-white/10">
              <div className="text-[11px] text-zinc-500">Provisioned tenant</div>
              <div className="flex items-baseline gap-2 text-xs">
                <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-[11px] font-medium text-emerald-300">
                  devi.vntg.solutions
                </span>
                <span className="rounded-full bg-zinc-900 px-2 py-1 text-[10px] text-zinc-400">
                  Ready in 90s
                </span>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3 text-[10px] text-zinc-400">
                <div className="rounded-xl bg-white/5 p-2">
                  <div className="text-[10px] text-zinc-500">Latency</div>
                  <div className="mt-1 text-sm font-semibold text-zinc-100">
                    42 ms
                  </div>
                </div>
                <div className="rounded-xl bg-white/5 p-2">
                  <div className="text-[10px] text-zinc-500">Regions</div>
                  <div className="mt-1 text-sm font-semibold text-zinc-100">
                    3
                  </div>
                </div>
                <div className="rounded-xl bg-white/5 p-2">
                  <div className="text-[10px] text-zinc-500">Deploys</div>
                  <div className="mt-1 text-sm font-semibold text-zinc-100">
                    27 / day
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

