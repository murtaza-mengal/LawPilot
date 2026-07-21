"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function LoginPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [beltNumber, setBeltNumber] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setMessage("");
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://mengall.app.n8n.cloud/webhook-test/lawpilot-login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name.trim(),
            belt_no: beltNumber.trim(),
            password,
          }),
        }
      );

      const responseText = await response.text();

      let data: unknown = null;

      if (responseText) {
        try {
          data = JSON.parse(responseText);
        } catch {
          data = null;
        }
      }

      const user = Array.isArray(data) ? data[0] : data;

      const loginSuccessful =
        response.ok &&
        user !== null &&
        typeof user === "object" &&
        Object.keys(user).length > 0;

      if (!loginSuccessful) {
        setMessage("Invalid name, belt number or password.");
        return;
      }

      sessionStorage.setItem("lawpilotUser", JSON.stringify(user));

      router.push("/dashboard");
    } catch (error) {
      console.error("Login error:", error);

      setMessage(
        "Login service se connection nahi ho saka. n8n Test Webhook ko listening mode mein rakhein."
      );
    } finally {
      setIsLoading(false);
    }
  }

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

        <form className="mt-8 space-y-5" onSubmit={handleLogin}>
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
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Example: Ahmed Ali"
              required
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
              value={beltNumber}
              onChange={(event) => setBeltNumber(event.target.value)}
              placeholder="Example: B1001"
              required
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
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"
              required
              className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400"
            />
          </div>

          {message && (
            <p className="rounded-lg border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
              {message}
            </p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-xl bg-blue-500 px-5 py-3 text-center font-semibold shadow-lg transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isLoading ? "Checking Login..." : "Login to Dashboard"}
          </button>
        </form>

        <p className="mt-6 text-center text-xs leading-5 text-slate-400">
          Access is limited according to your assigned trainee, instructor or
          administrator role.
        </p>
      </div>
    </main>
  );
}