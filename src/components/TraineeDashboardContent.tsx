"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";

type LawPilotUser = {
  name?: string;
  belt_no?: string;
  role?: string;
  status?: string;
};

function extractAIAnswer(data: unknown): string {
  if (!data || typeof data !== "object") {
    return "";
  }

  const result = data as {
    text?: unknown;
    output_text?: unknown;
    response?: unknown;
    answer?: unknown;
    output?: Array<{
      content?: Array<{
        text?: unknown;
      }>;
    }>;
  };

  if (typeof result.text === "string") return result.text;
  if (typeof result.output_text === "string") return result.output_text;
  if (typeof result.response === "string") return result.response;
  if (typeof result.answer === "string") return result.answer;

  const nestedText = result.output?.[0]?.content?.[0]?.text;

  if (typeof nestedText === "string") {
    return nestedText;
  }

  return "";
}

export default function DashboardPage() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleAskLawPilot() {
    const cleanQuestion = question.trim();

    if (!cleanQuestion) {
      setMessage("Please enter a question.");
      setAnswer("");
      return;
    }

    const storedUser = sessionStorage.getItem("lawpilotUser");

    if (!storedUser) {
      setMessage("Your login session was not found. Please log in again.");
      setAnswer("");
      return;
    }

    let user: LawPilotUser;

    try {
      user = JSON.parse(storedUser) as LawPilotUser;
    } catch {
      setMessage("Your login session is invalid. Please log in again.");
      setAnswer("");
      return;
    }

    setIsLoading(true);
    setMessage("");
    setAnswer("");

    try {
      const response = await fetch(
        "https://mengall.app.n8n.cloud/webhook/lawpilot-ai",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            question: cleanQuestion,
            name: user.name,
            belt_no: user.belt_no,
            role: user.role,
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

      if (!response.ok) {
        throw new Error("LawPilot AI request failed.");
      }

      const aiAnswer = extractAIAnswer(data);

      if (!aiAnswer) {
        throw new Error("No AI answer was returned.");
      }

      setAnswer(aiAnswer);
    } catch (error) {
      console.error("LawPilot AI error:", error);

      setMessage(
        "LawPilot AI is currently unavailable. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  }

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
              <p className="text-xs text-slate-400">Belt No: B1001</p>
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
                  value={question}
                  onChange={(event) => setQuestion(event.target.value)}
                  placeholder="Ask LawPilot a question..."
                  disabled={isLoading}
                  className="mt-5 min-h-32 w-full rounded-xl border border-white/10 bg-slate-900 p-4 outline-none placeholder:text-slate-500 focus:border-blue-400 disabled:cursor-not-allowed disabled:opacity-60"
                />

                <button
                  type="button"
                  onClick={handleAskLawPilot}
                  disabled={isLoading}
                  className="mt-4 w-full rounded-xl bg-blue-500 px-5 py-3 font-semibold transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:bg-blue-900"
                >
                  {isLoading ? "LawPilot is thinking..." : "Ask LawPilot"}
                </button>

                {message && (
                  <div className="mt-5 rounded-xl border border-red-500/20 bg-red-950/40 p-4 text-sm text-red-200">
                    {message}
                  </div>
                )}

                {answer && (
                  <div className="mt-5 rounded-xl border border-blue-500/20 bg-blue-950/40 p-5">
                    <p className="text-sm font-semibold text-blue-300">
                      LawPilot Response
                    </p>

                    <p className="mt-3 whitespace-pre-wrap text-sm leading-7 text-slate-200">
                      {answer}
                    </p>
                  </div>
                )}
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}