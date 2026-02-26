"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { Section } from "./section";

const rotatingWords = [
  "small-business websites",
  "bill generation tools",
  "simple automation",
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <Section className="relative mx-auto mt-10 flex max-w-6xl flex-col gap-10 rounded-3xl border border-white/10 bg-black/50 px-6 py-10 md:mt-16 md:flex-row md:items-center md:justify-between md:px-10 md:py-12">
      <div className="max-w-xl space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[11px] font-medium text-zinc-300 backdrop-blur-xl"
          >
            <Sparkles className="h-3 w-3 text-accent" />
            <span className="uppercase tracking-[0.18em] text-zinc-400">
              Solutions that simplify operations
            </span>
          </motion.div>

          <div className="space-y-4">
            <h1 className="text-balance text-3xl font-semibold leading-tight md:text-5xl">
              We design and host{" "}
              <span className="relative inline-block">
                <span className="opacity-40">websites</span>
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
              We design and host websites, create client portals, and build
              practical tools - like template-based bill generation and
              automation - so small businesses can run smoother and look
              professional.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-primary shadow-soft-xl transition hover:bg-accent/90"
            >
              Get started
              <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href="https://devi.vntg.solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-zinc-200 backdrop-blur-md transition hover:border-white/20 hover:bg-white/10"
            >
              <ShieldCheck className="h-3.5 w-3.5 text-sky-300" />
              See client portal example
            </a>
          </div>

        </div>
    </Section>
  );
}

