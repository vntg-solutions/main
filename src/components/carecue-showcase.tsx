"use client";

import { motion } from "framer-motion";
import { Droplets, Moon, Pill, CalendarCheck, ExternalLink } from "lucide-react";
import { Section } from "./section";
import { cn } from "../lib/utils";

const FEATURES = [
  {
    icon: <Droplets className="h-5 w-5 text-sky-400" />,
    title: "Water intake tracking",
    description:
      "Set a daily goal, log drinks in a tap, and see how many glasses you have left – with optional reminder nudges.",
  },
  {
    icon: <Moon className="h-5 w-5 text-violet-400" />,
    title: "Sleep companion",
    description:
      "Track bedtimes and wake-up times, get a nightly snapshot, and see weekly sleep patterns.",
  },
  {
    icon: <Pill className="h-5 w-5 text-amber-400" />,
    title: "Medication reminders",
    description:
      "Create schedules, track doses, and avoid missed meds with clear, actionable reminders.",
  },
  {
    icon: <CalendarCheck className="h-5 w-5 text-emerald-400" />,
    title: "Appointments & routines",
    description:
      "Keep upcoming appointments and daily health tasks visible so you can step into each day with confidence.",
  },
];

/** CareCue logo: blue heart + checkmark in rounded square (matches app icon) */
function CareCueLogoIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id="carecue-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill="url(#carecue-bg)" />
      {/* Heart outline + fill */}
      <path
        d="M32 20c-2-2.5-5.5-4-9-4-5.5 0-10 4.5-10 10 0 7 9 14 21 22 12-8 21-15 21-22 0-5.5-4.5-10-10-10-3.5 0-7 1.5-9 4z"
        stroke="#1e40af"
        strokeWidth="2.5"
        fill="#1e3a8a"
      />
      {/* Checkmark */}
      <path
        d="M24 32l6 6 12-14"
        stroke="#38bdf8"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

/** Feature visual: phone-style frame with CareCue summary */
function CareCueFeatureVisual({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex h-full min-h-[200px] flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-sky-900/30 to-sky-950/50 p-4",
        className
      )}
    >
      <div className="mb-3 flex items-center gap-2">
        <CareCueLogoIcon className="h-8 w-8 rounded-lg" />
        <span className="text-sm font-semibold text-white">CareCue</span>
      </div>
      <p className="mb-4 text-xs text-zinc-300">
        Your personal health companion. Track water, sleep, medications &amp; more.
      </p>
      <div className="grid grid-cols-2 gap-2">
        {["Water", "Sleep", "Meds", "Calendar"].map((label, i) => (
          <div
            key={label}
            className="flex items-center gap-2 rounded-lg bg-white/5 px-2 py-1.5 text-[10px] text-zinc-300"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded bg-sky-500/20 text-sky-300">
              {i + 1}
            </span>
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}

export function CareCueShowcase() {
  return (
    <Section
      id="products"
      className="mx-auto max-w-6xl py-10 md:py-16"
    >
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-sky-950/40 via-black/60 to-black/80 shadow-2xl">
        <div className="grid gap-8 p-6 md:grid-cols-[1fr,minmax(0,1.1fr)] md:gap-10 md:p-10">
          {/* Left: branding + value prop */}
          <div className="flex flex-col justify-center space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300/90">
              Our products
            </p>
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl shadow-lg md:h-20 md:w-20">
                <CareCueLogoIcon className="h-full w-full" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white md:text-3xl">
                  CareCue
                </h2>
                <p className="mt-1 text-sm text-zinc-400">
                  Your personal health companion
                </p>
              </div>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-zinc-300">
              Care that fits into your day, not the other way around. Track
              water, sleep, medications and appointments – with a calm interface
              and smart suggestions based on your real habits.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.vantage.carecue&utm_source=site"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:bg-sky-600"
              >
                Download on Google Play
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href="https://carecue.vntg.solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2.5 text-sm font-medium text-zinc-200 backdrop-blur-sm transition hover:border-white/30 hover:bg-white/10"
              >
                Learn more
              </a>
            </div>
            <p className="text-xs text-zinc-500">
              Private by default · Data stays on your device
            </p>
          </div>

          {/* Right: feature visual + feature list */}
          <div className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40 md:aspect-auto md:min-h-[280px]">
              <CareCueFeatureVisual className="h-full w-full" />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2 sm:gap-3">
              {FEATURES.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className={cn(
                    "rounded-xl border border-white/10 bg-black/40 p-3 text-left",
                    "backdrop-blur-sm"
                  )}
                >
                  <div className="flex items-center gap-2 text-sm font-medium text-zinc-100">
                    {f.icon}
                    <span>{f.title}</span>
                  </div>
                  <p className="mt-1 line-clamp-2 text-[11px] text-zinc-400">
                    {f.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
