import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 px-6 text-white">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
        <Link
          href="/"
          className="text-sm text-blue-300 transition hover:text-blue-200"
        >
          ← Back to Home
        </Link>

        <div className="mt-6 text-center">
          <h1 className="text-3xl font-bold">LawPilot Login</h1>

          <p className="mt-3 text-sm leading-6 text-slate-300">
            Enter your registered name, belt number and password to access your
            authorized dashboard.
          </p>
        </div>

        <form className="mt-8 space-y-5">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-slate-200"
            >
              Full Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="Example: Ahmed Ali"
              className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400"
            />
          </div>

          <div>
            <label
              htmlFor="beltNumber"
              className="mb-2 block text-sm font-medium text-slate-200"
            >
              Belt Number
            </label>

            <input
              id="beltNumber"
              name="beltNumber"
              type="text"
              placeholder="Example: B-1001"
              className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-slate-200"
            >
              Password
            </label>

            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400"
            />
          </div>

          <Link
  href="/dashboard"
  className="block w-full rounded-xl bg-blue-500 px-5 py-3 text-center font-semibold shadow-lg transition hover:bg-blue-600"
>
  Login to Dashboard
</Link>
        </form>

        <p className="mt-6 text-center text-xs leading-5 text-slate-400">
          Access is limited according to your assigned trainee, instructor or
          administrator role.
        </p>
      </div>
    </main>
  );
}