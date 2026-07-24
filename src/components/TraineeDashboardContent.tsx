

import Sidebar from "@/components/Sidebar";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="flex">
        <Sidebar />

        <section className="min-h-screen flex-1">
          <header className="flex items-center justify-between border-b border-white/10 px-6 py-5 md:px-10">
            <div>
              <p className="text-sm text-slate-400">Welcome back</p>
              <h1 className="text-2xl font-bold">Ahmed Ali</h1>
            </div>

            <div className="text-right">
              <p className="text-sm font-medium text-blue-300">Trainee</p>
              <p className="text-xs text-slate-400">Belt No: B-1001</p>
            </div>
          </header>

          <div className="px-6 py-8 md:px-10">
            <section className="rounded-2xl border border-blue-500/20 bg-gradient-to-r from-blue-950 to-slate-900 p-8">
              <p className="text-sm text-blue-300">
                LawPilot Training Overview
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                Your learning progress
              </h2>

              <p className="mt-3 max-w-2xl text-slate-300">
                Review your attendance, results, courses and assignments from
                one secure dashboard.
              </p>
            </section>

            <section className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm text-slate-400">Attendance</p>
                <p className="mt-3 text-3xl font-bold text-green-400">92%</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm text-slate-400">Average Score</p>
                <p className="mt-3 text-3xl font-bold text-blue-400">78%</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm text-slate-400">Courses</p>
                <p className="mt-3 text-3xl font-bold text-yellow-400">5</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm text-slate-400">Assignments</p>
                <p className="mt-3 text-3xl font-bold text-purple-400">3</p>
              </div>
            </section>

            <section className="mt-8 grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-xl font-semibold">
                  Training Information
                </h3>

                <div className="mt-5 space-y-4 text-sm text-slate-300">
                  <div className="rounded-xl bg-slate-900 p-4">
                    Criminal Law — Progress: 70%
                  </div>

                  <div className="rounded-xl bg-slate-900 p-4">
                    Police Rules — Progress: 85%
                  </div>

                  <div className="rounded-xl bg-slate-900 p-4">
                    Information Technology — Progress: 60%
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-xl font-semibold">
                  LawPilot AI Assistant
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Ask questions about your attendance, results, assignments and
                  authorized training records.
                </p>

                <textarea
                  placeholder="Ask LawPilot a question..."
                  className="mt-5 min-h-32 w-full rounded-xl border border-white/10 bg-slate-900 p-4 outline-none placeholder:text-slate-500 focus:border-blue-400"
                />

                <button className="mt-4 w-full rounded-xl bg-blue-500 px-5 py-3 font-semibold transition hover:bg-blue-600">
                  Ask LawPilot
                </button>
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}