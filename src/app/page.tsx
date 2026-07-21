import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-6 py-5 md:px-16">
        <div>
          <h1 className="text-2xl font-bold tracking-wide">LawPilot</h1>
          <p className="text-xs text-blue-200">School of Law</p>
        </div>

       <Link
  href="/login"
  className="rounded-lg border border-blue-400 px-5 py-2 text-sm font-semibold transition hover:bg-blue-500"
>
  Login
</Link>
      </nav>

      {/* Main Section */}
      <section className="flex min-h-[75vh] flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 rounded-full border border-blue-400/40 bg-blue-500/10 px-5 py-2 text-sm text-blue-200">
          AI-Powered Police Training Assistant
        </div>

        <h2 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
          Welcome to{" "}
          <span className="text-blue-400">LawPilot</span>
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          A secure AI assistant for the School of Law Police Training
          Institute. Access attendance, results, courses, assignments and
          training information according to your authorized role.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
  href="/login"
  className="rounded-xl bg-blue-500 px-8 py-3 font-semibold shadow-lg transition hover:bg-blue-600"
>
  Login to Dashboard
</Link>

          <button className="rounded-xl border border-slate-500 px-8 py-3 font-semibold transition hover:bg-white/10">
            Contact Us
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="grid gap-6 px-6 pb-16 md:grid-cols-3 md:px-16">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h3 className="text-xl font-semibold text-blue-300">
            Role-Based Access
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Trainees, instructors and administrators receive access according
            to their assigned permissions.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h3 className="text-xl font-semibold text-blue-300">
            AI Assistance
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Ask questions about courses, attendance, results and training
            information through the LawPilot assistant.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h3 className="text-xl font-semibold text-blue-300">
            Secure Records
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Airtable and n8n will securely manage authorized institute records
            and automation workflows.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-6 text-center text-sm text-slate-400">
        <p>School of Law Police Training Institute</p>

        <div className="mt-3 flex justify-center gap-5">
          <span>Facebook</span>
          <span>WhatsApp</span>
          <span>X</span>
          <span>TikTok</span>
        </div>

        <p className="mt-4">
          © 2026 LawPilot. All rights reserved.
        </p>
      </footer>
    </main>
  );
}