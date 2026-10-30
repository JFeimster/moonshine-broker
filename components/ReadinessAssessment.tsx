"use client";

import { useState } from "react";
import Button from "@/components/Button";
import { assessReadiness, preparationPlan, questions, type Answers } from "@/lib/readiness";

export default function ReadinessAssessment() {
  const [answers, setAnswers] = useState<Answers>({});
  const [showResult, setShowResult] = useState(false);
  const [copyState, setCopyState] = useState("");
  const answered = questions.filter(({ key }) => answers[key] !== undefined).length;
  const result = showResult && answered === questions.length ? assessReadiness(answers) : null;

  async function copyPlan() {
    try {
      await navigator.clipboard.writeText(preparationPlan(answers));
      setCopyState("Preparation plan copied.");
    } catch {
      setCopyState("Clipboard unavailable. Select and copy the plan below.");
    }
  }

  return <section id="agency-readiness" className="scroll-mt-24 border-y-2 border-black bg-[#f5d90a] py-12 sm:py-16" aria-labelledby="readiness-title">
    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
      <div className="grid gap-6 lg:grid-cols-[.75fr_1.25fr] lg:gap-12">
        <div>
          <div className="command-label">Agency readiness / self assessment</div>
          <h2 id="readiness-title" className="display-type mt-4 text-5xl sm:text-7xl">Find your next move.</h2>
          <p className="mt-5 max-w-md text-sm leading-7">Six practical questions about the work ahead. Your answers stay in this browser tab and are never submitted. The result is educational preparation guidance, not acceptance or qualification for a program.</p>
          <div className="mt-7 border-t-2 border-black pt-4" role="status" aria-live="polite">
            <span className="command-label">{answered} of {questions.length} answered</span>
            <div className="mt-3 h-3 border-2 border-black bg-[#f2eedf]" role="progressbar" aria-label="Assessment progress" aria-valuenow={answered} aria-valuemin={0} aria-valuemax={questions.length}>
              <div className="h-full bg-black transition-all" style={{ width: `${answered / questions.length * 100}%` }} />
            </div>
          </div>
        </div>
        <div>
          <div className="divide-y-2 divide-black border-y-2 border-black">
            {questions.map((question, index) => <fieldset key={question.key} className="grid gap-4 py-5 sm:grid-cols-[2.5rem_1fr]">
              <legend className="sr-only">{question.title}</legend>
              <span className="command-label pt-1" aria-hidden="true">0{index + 1}</span>
              <div>
                <h3 className="text-xl font-black uppercase">{question.title}</h3>
                <p className="mt-1 text-sm">{question.help}</p>
                <div className="mt-4 grid gap-2">
                  {question.options.map((option, value) => <label key={option} className={`flex cursor-pointer items-start gap-3 border-2 border-black px-3 py-3 text-sm font-semibold transition-colors ${answers[question.key] === value ? "bg-black text-[#f5d90a]" : "bg-[#f2eedf] hover:bg-white"}`}>
                    <input type="radio" name={question.key} value={value} checked={answers[question.key] === value} onChange={() => { setAnswers((current) => ({ ...current, [question.key]: value })); setShowResult(false); setCopyState(""); }} className="mt-0.5 accent-[#f5d90a]" />
                    <span>{option}</span>
                  </label>)}
                </div>
              </div>
            </fieldset>)}
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Button onClick={() => setShowResult(true)} className="bg-black text-[#f5d90a] shadow-[4px_4px_0_#000]" >See My Preparation Steps</Button>
            {answered < questions.length && <span className="text-sm font-semibold" role="status">Answer all six questions to see your steps.</span>}
          </div>
          {result && <div className="mt-8 border-2 border-black bg-[#f2eedf] p-5 shadow-[6px_6px_0_#000] sm:p-8" aria-live="polite">
            <div className="command-label">Your preparation status</div>
            <h3 className="mt-3 text-2xl font-black uppercase sm:text-3xl">{result.status}</h3>
            <p className="mt-3 text-sm leading-7">{result.explanation}</p>
            <p className="mt-4 border-l-4 border-black pl-4 text-sm"><strong>Suggested first segment:</strong> {result.segment}</p>
            <h4 className="mt-6 font-black uppercase">Three next actions</h4>
            <ol className="mt-2 list-decimal space-y-2 pl-5 text-sm leading-6">{result.actions.map((action) => <li key={action}>{action}</li>)}</ol>
            <h4 className="mt-6 font-black uppercase">Useful resources</h4>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm font-bold underline underline-offset-4">{result.resources.map((resource) => <a key={resource.href} href={resource.href}>{resource.label}</a>)}</div>
            <div className="mt-6 flex flex-wrap gap-3"><Button onClick={copyPlan}>Copy Preparation Plan</Button><Button href={result.status === "EXPLORE THE ROLE BEFORE APPLYING" ? "/how-it-works" : "/apply"} variant="secondary">{result.status === "READY TO BUILD A PROSPECTING PLAN" ? "Start the Application" : result.status === "FOUNDATIONS TO DEVELOP" ? "Review Application Expectations" : "Understand the Role First"}</Button></div>
            <p className="mt-3 text-xs" role="status" aria-live="polite">{copyState}</p>
            {copyState.startsWith("Clipboard unavailable") && <pre className="mt-3 overflow-x-auto whitespace-pre-wrap border border-black p-3 text-xs">{preparationPlan(answers)}</pre>}
            <p className="mt-4 text-xs leading-5">This assessment does not determine partner acceptance, funding eligibility, approval, or earnings.</p>
          </div>}
        </div>
      </div>
    </div>
  </section>;
}
