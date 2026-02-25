"use client";

import { motion } from "framer-motion";
import { Globe2, LockKeyhole, Server } from "lucide-react";
import { Section } from "./section";
import { cn } from "../lib/utils";

export function InstantPortal() {
  return (
    <Section className="mx-auto mt-4 max-w-6xl py-10 md:py-16">
      <div className="grid gap-8 md:grid-cols-[1.1fr_minmax(0,0.9fr)] md:items-center">
        <div className="space-y-4 pr-0 md:pr-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Instant portal
          </p>
          <h2 className="text-balance text-2xl font-semibold md:text-3xl">
            Turn a subdomain into a fully provisioned portal in minutes.
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-zinc-400">
            Every client portal gets isolated resources, access control, and a
            fully wired observability stack. We handle tenancy, you handle the
            roadmap.
          </p>
          <div className="grid gap-4 text-xs text-zinc-300 md:grid-cols-2">
            <div className="space-y-2 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-2 py-1 text-[11px] text-emerald-300">
                <Server className="h-3 w-3" />
                <span>Blueprinted stacks</span>
              </div>
              <p className="text-zinc-400">
                Opinionated Terraform and pipelines, tuned for SaaS tenants out
                of the box.
              </p>
            </div>
            <div className="space-y-2 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
              <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-2 py-1 text-[11px] text-sky-300">
                <LockKeyhole className="h-3 w-3" />
                <span>Security-first defaults</span>
              </div>
              <p className="text-zinc-400">
                SSO-ready, audit trails, and role models that scale with your
                customer base.
              </p>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32, rotateX: 8 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div
            className={cn(
              "glass-surface relative overflow-hidden rounded-[26px] border-white/15",
              "bg-gradient-to-b from-white/8 via-white/2 to-black/60 p-3 shadow-soft-xl"
            )}
          >
            <div className="flex items-center justify-between gap-4 rounded-2xl bg-black/70 px-4 py-2.5 text-[11px] text-zinc-400 ring-1 ring-white/10">
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10">
                  <Globe2 className="h-3 w-3 text-emerald-300" />
                </span>
                <span className="font-medium text-zinc-200">
                  devi.vntg.solutions
                </span>
              </div>
              <span className="rounded-full bg-emerald-500/15 px-2 py-1 text-[10px] font-medium text-emerald-300">
                Active · <span className="text-zinc-400">SaaS tenant</span>
              </span>
            </div>

            <div className="mt-3 space-y-3 rounded-2xl bg-black/60 p-4 ring-1 ring-white/10">
              <div className="flex items-center justify-between text-[11px] text-zinc-400">
                <span>Provisioning workflow</span>
                <span className="rounded-full bg-zinc-900 px-2 py-0.5 text-[10px] text-zinc-500">
                  orchestrated by Vantage
                </span>
              </div>

              <ol className="space-y-2 text-[11px] text-zinc-300">
                <li className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/5 text-[10px] text-zinc-300">
                    1
                  </span>
                  <span>Claim portal subdomain &amp; baseline configuration.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/5 text-[10px] text-zinc-300">
                    2
                  </span>
                  <span>Spin up cloud resources, database, and observability.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/5 text-[10px] text-zinc-300">
                    3
                  </span>
                  <span>Wire authentication, billing, and operational runbooks.</span>
                </li>
              </ol>

              <div className="mt-3 grid grid-cols-3 gap-2 text-[10px] text-zinc-400">
                <div className="rounded-xl bg-white/5 p-2">
                  <div className="text-[10px] text-zinc-500">Time-to-live</div>
                  <div className="mt-1 text-sm font-semibold text-zinc-100">
                    &lt; 5 min
                  </div>
                </div>
                <div className="rounded-xl bg-white/5 p-2">
                  <div className="text-[10px] text-zinc-500">Blueprint</div>
                  <div className="mt-1 text-xs font-semibold text-zinc-100">
                    SaaS · GodownOS
                  </div>
                </div>
                <div className="rounded-xl bg-white/5 p-2">
                  <div className="text-[10px] text-zinc-500">Change risk</div>
                  <div className="mt-1 text-xs font-semibold text-emerald-300">
                    Guardrailed
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

