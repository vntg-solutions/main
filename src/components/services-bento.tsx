"use client";

import { motion } from "framer-motion";
import {
  Boxes,
  Cloud,
  RefreshCcw,
  ReceiptText,
  ArrowUpRight,
} from "lucide-react";
import { Section } from "./section";
import { cn } from "../lib/utils";

const cardBase =
  "relative flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-zinc-200 shadow-soft-xl";

export function ServicesBento() {
  return (
    <Section className="mx-auto max-w-6xl py-10 md:py-16">
      <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Services
          </p>
          <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
            A modular stack of infrastructure-native services.
          </h2>
          <p className="mt-2 max-w-md text-sm text-zinc-400">
            Start with one module or launch an end-to-end platform — every
            service is designed to interlock.
          </p>
        </div>
        <div className="text-xs text-zinc-500">
          <span className="inline-flex items-center gap-2 rounded-full bg-black/60 px-3 py-1 ring-1 ring-white/10">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            Built for operators, loved by engineers.
          </span>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4 md:grid-rows-2">
        <BentoCard
          className="md:col-span-2 md:row-span-2"
          title="Custom SaaS · GodownOS"
          icon={<Boxes className="h-5 w-5 text-sky-300" />}
          highlight="Your operations system, turned into SaaS."
        >
          <p className="mt-2 text-xs text-zinc-400">
            We translate your real-world operational workflows into a robust,
            multi-tenant SaaS built on GodownOS primitives.
          </p>
          <ul className="mt-3 space-y-1.5 text-[11px] text-zinc-400">
            <li>— Inventory-aware process engines.</li>
            <li>— Granular access + audit-ready logs.</li>
            <li>— Upgrade-safe extension points.</li>
          </ul>
        </BentoCard>

        <BentoCard
          className="md:col-span-2"
          title="Automated Invoicing"
          icon={<ReceiptText className="h-5 w-5 text-emerald-300" />}
          highlight="Invoices that close themselves."
        >
          <p className="mt-2 text-xs text-zinc-400">
            Usage-based, subscription, and hybrid models with ready-to-plug
            payment rails and dunning workflows.
          </p>
          <div className="mt-3 grid grid-cols-3 gap-2 text-[11px] text-zinc-400">
            <Metric label="Error rate" value="&lt; 0.3%" />
            <Metric label="Currencies" value="12+" />
            <Metric label="Reconciliation" value="Daily" />
          </div>
        </BentoCard>

        <BentoCard
          className="md:row-span-2"
          title="Cloud Deployment"
          icon={<Cloud className="h-5 w-5 text-sky-300" />}
          highlight="Golden paths, not snowflakes."
        >
          <p className="mt-2 text-xs text-zinc-400">
            Blueprinted environments for dev, staging, and production with
            baked-in observability and security.
          </p>
          <ul className="mt-3 space-y-1.5 text-[11px] text-zinc-400">
            <li>— GitOps pipelines with policy gates.</li>
            <li>— Environment drift detection.</li>
            <li>— Regionalized rollouts when you are ready.</li>
          </ul>
        </BentoCard>

        <BentoCard
          className="md:col-span-1"
          title="Legacy Migration"
          icon={<RefreshCcw className="h-5 w-5 text-amber-300" />}
          highlight="From brittle to boring."
        >
          <p className="mt-2 text-xs text-zinc-400">
            Progressive rewrites with strangler patterns, live shadow traffic,
            and rollback plans.
          </p>
        </BentoCard>
      </div>
    </Section>
  );
}

type BentoCardProps = {
  title: string;
  highlight: string;
  icon: React.ReactNode;
  className?: string;
  children: React.ReactNode;
};

function BentoCard({
  title,
  highlight,
  icon,
  className,
  children,
}: BentoCardProps) {
  return (
    <motion.article
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={cn(cardBase, "group relative overflow-hidden", className)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-sky-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex items-start justify-between gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-black/60 ring-1 ring-white/10">
          {icon}
        </div>
        <ArrowUpRight className="h-4 w-4 text-zinc-500 transition group-hover:text-zinc-200" />
      </div>

      <div className="relative mt-4 space-y-2">
        <h3 className="text-sm font-semibold">{title}</h3>
        <p className="text-xs text-zinc-400">{highlight}</p>
      </div>

      <div className="relative mt-3">{children}</div>
    </motion.article>
  );
}

type MetricProps = {
  label: string;
  value: string;
};

function Metric({ label, value }: MetricProps) {
  return (
    <div className="rounded-xl bg-black/70 p-2 ring-1 ring-white/10">
      <div className="text-[10px] text-zinc-500">{label}</div>
      <div className="mt-1 text-xs font-semibold text-zinc-100">{value}</div>
    </div>
  );
}

