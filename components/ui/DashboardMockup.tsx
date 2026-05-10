"use client";

import { motion } from "framer-motion";

const TASKS = [
  {
    done: true,
    label: "Redesign homepage hero",
    tag: "Design",
    tagColor: "text-[#6c63ff] bg-[rgba(108,99,255,0.12)]",
  },
  {
    done: false,
    label: "API integration — Stripe",
    tag: "Dev",
    tagColor: "text-[#38d9a9] bg-[rgba(56,217,169,0.12)]",
  },
  {
    done: false,
    label: "Q3 campaign copy",
    tag: "Marketing",
    tagColor: "text-[#ff6584] bg-[rgba(255,101,132,0.12)]",
  },
];

const SIDEBAR_ITEMS = [
  { label: "Dashboard", active: true },
  { label: "My Tasks", active: false },
  { label: "Projects", active: false },
  { label: "Team", active: false },
  { label: "Analytics", active: false },
];

export function DashboardMockup() {
  return (
    <div className="relative">
      {/* Main card */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="rounded-2xl border border-white/7 bg-surface shadow-[0_40px_100px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.04)] overflow-hidden"
      >
        {/* Window chrome */}
        <div className="flex items-center gap-2 border-b border-white/7 bg-surface2 px-4 py-3">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff6b6b]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#ffd93d]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#6bcb77]" />
          <div className="ml-2 flex-1 h-5 rounded-md bg-white/5 flex items-center px-2.5">
            <span className="text-[10px] text-muted">
              app.taskflow.io/dashboard
            </span>
          </div>
        </div>

        {/* Body */}
        <div
          className="grid p-3 gap-3"
          style={{ gridTemplateColumns: "130px 1fr", minHeight: 270 }}
        >
          {/* Sidebar */}
          <div className="rounded-xl bg-surface2 p-2.5 flex flex-col gap-0.5">
            <p className="px-2 pb-2 pt-1 text-[9px] uppercase tracking-widest text-muted font-semibold">
              Workspace
            </p>
            {SIDEBAR_ITEMS.map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-2 rounded-lg px-2 py-1.5 text-[11px] ${
                  item.active
                    ? "bg-[rgba(108,99,255,0.15)] text-accent"
                    : "text-muted"
                }`}
              >
                <div
                  className={`w-3 h-3 rounded-sm shrink-0 ${
                    item.active ? "bg-accent" : "bg-white/10"
                  }`}
                />
                {item.label}
              </div>
            ))}
          </div>

          {/* Main content */}
          <div className="flex flex-col gap-2.5">
            {/* Header */}
            <div className="flex items-center justify-between">
              <span className="font-syne text-[12px] font-bold">
                Good morning, Alex 👋
              </span>
              <span className="grad-bg rounded-full px-2.5 py-0.5 text-[9px] font-bold text-white">
                + New Task
              </span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: "Tasks Done", value: "24", color: "text-[#38d9a9]" },
                { label: "In Progress", value: "8", color: "text-[#6c63ff]" },
                { label: "Overdue", value: "2", color: "text-[#ff6584]" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl bg-surface2 border border-white/5 p-2.5"
                >
                  <p className="text-[8px] uppercase tracking-wider text-muted">
                    {stat.label}
                  </p>
                  <p
                    className={`font-syne text-xl font-extrabold mt-0.5 ${stat.color}`}
                  >
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Task list */}
            <div className="flex flex-col gap-1.5">
              {TASKS.map((task) => (
                <div
                  key={task.label}
                  className="flex items-center gap-2 rounded-lg border border-white/5 bg-surface2 px-2.5 py-2"
                >
                  <div
                    className={`w-3.5 h-3.5 rounded-full shrink-0 border-[1.5px] ${
                      task.done ? "bg-accent2 border-accent2" : "border-muted"
                    }`}
                  />
                  <span
                    className={`flex-1 text-[10px] ${
                      task.done ? "line-through text-muted" : "text-text"
                    }`}
                  >
                    {task.label}
                  </span>
                  <span
                    className={`rounded-full px-1.5 py-0.5 text-[8px] font-bold ${task.tagColor}`}
                  >
                    {task.tag}
                  </span>
                </div>
              ))}
            </div>

            {/* Progress */}
            <div className="flex flex-col gap-1">
              <div className="flex justify-between text-[9px] text-muted">
                <span>Sprint Progress</span>
                <span>68%</span>
              </div>
              <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "68%" }}
                  transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
                  className="h-full rounded-full grad-bg"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating badge — bottom left */}
      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute -bottom-4 -left-5 flex items-center gap-3 rounded-xl border border-white/7 bg-surface2 px-3.5 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-accent2 to-[#0ea5e9] text-lg">
          🚀
        </div>
        <div>
          <p className="text-[12px] font-semibold text-text]">
            Sprint completed!
          </p>
          <p className="text-[10px] text-muted">3 tasks closed today</p>
        </div>
      </motion.div>

      {/* Floating badge — top right */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute -right-6 top-5 rounded-xl border border-white/7 bg-surface2 px-3.5 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
      >
        <div className="text-[11px] text-[#facc15] tracking-wide">★★★★★</div>
        <div className="mt-0.5 text-[10px] text-muted">
          Loved by 2,400+ teams
        </div>
      </motion.div>
    </div>
  );
}
