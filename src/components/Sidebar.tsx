import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="hidden min-h-screen w-64 border-r border-white/10 bg-slate-900 p-5 md:block">
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-blue-400">LawPilot</h2>
        <p className="mt-1 text-xs text-slate-400">
          Police Training Institute
        </p>
      </div>

      <nav className="space-y-2">
        <Link
          href="/dashboard"
          className="block rounded-xl bg-blue-500 px-4 py-3 font-medium text-white"
        >
          Dashboard
        </Link>

        <Link
          href="#"
          className="block rounded-xl px-4 py-3 text-slate-300 transition hover:bg-white/10 hover:text-white"
        >
          Profile
        </Link>

        <Link
          href="#"
          className="block rounded-xl px-4 py-3 text-slate-300 transition hover:bg-white/10 hover:text-white"
        >
          Courses
        </Link>

        <Link
          href="#"
          className="block rounded-xl px-4 py-3 text-slate-300 transition hover:bg-white/10 hover:text-white"
        >
          Results
        </Link>

        <Link
          href="#"
          className="block rounded-xl px-4 py-3 text-slate-300 transition hover:bg-white/10 hover:text-white"
        >
          Attendance
        </Link>

        <Link
          href="#"
          className="block rounded-xl px-4 py-3 text-slate-300 transition hover:bg-white/10 hover:text-white"
        >
          Announcements
        </Link>

        <Link
          href="#"
          className="block rounded-xl px-4 py-3 text-slate-300 transition hover:bg-white/10 hover:text-white"
        >
          AI Assistant
        </Link>

        <Link
          href="#"
          className="block rounded-xl px-4 py-3 text-slate-300 transition hover:bg-white/10 hover:text-white"
        >
          Settings
        </Link>
      </nav>

      <div className="mt-10 border-t border-white/10 pt-5">
        <Link
          href="/"
          className="block rounded-xl border border-red-400/30 px-4 py-3 text-center text-red-300 transition hover:bg-red-500/10"
        >
          Logout
        </Link>
      </div>
    </aside>
  );
}