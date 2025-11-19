import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tech Academy | SteHawk - AI-First Training Programs",
  description: "AI/ML, Prompt & Generative AI engineering with practical project coaching. Train with industry experts.",
};

const AcademyPage = () => {
  return (
    <>
      <section className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-20 md:pt-[150px] lg:pb-28 lg:pt-[180px]">
        <div className="container">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#e0edff] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary dark:bg-primary/20">
              Tech Academy
            </div>
            <h1 className="mb-4 text-4xl font-bold text-black dark:text-white sm:text-5xl">
              AI-First Training
            </h1>
            <p className="mx-auto max-w-[600px] text-base text-body-color dark:text-body-color-dark">
              AI/ML, Prompt & Generative AI engineering with practical project coaching
            </p>
          </div>

          {/* Programs Grid */}
          <div className="mb-16 grid gap-8 md:grid-cols-2">
            {/* Generative AI Program */}
            <div className="rounded-2xl border border-stroke bg-white p-8 shadow-three dark:border-white/10 dark:bg-gray-dark">
              <div className="mb-6">
                <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold text-primary">
                  Most Popular
                </span>
                <h3 className="mb-3 text-2xl font-bold text-black dark:text-white">
                  Generative AI & Prompt Engineering
                </h3>
                <p className="text-body-color dark:text-body-color-dark">
                  Master the art of working with large language models, prompt engineering, and building AI-powered applications.
                </p>
              </div>
              <div className="mb-6">
                <h4 className="mb-3 font-semibold text-black dark:text-white">
                  What You&apos;ll Learn:
                </h4>
                <ul className="space-y-2 text-sm text-body-color dark:text-body-color-dark">
                  <li>✓ GPT-4, Claude, and other LLM models</li>
                  <li>✓ Advanced prompt engineering techniques</li>
                  <li>✓ Building AI chatbots and agents</li>
                  <li>✓ Fine-tuning and RAG implementations</li>
                  <li>✓ LangChain and vector databases</li>
                  <li>✓ Real-world AI project development</li>
                </ul>
              </div>
              <div className="mb-6 rounded-lg bg-gray-2 p-4 dark:bg-white/5">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm text-body-color dark:text-body-color-dark">Duration:</span>
                  <span className="font-semibold text-black dark:text-white">12 Weeks</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-body-color dark:text-body-color-dark">Format:</span>
                  <span className="font-semibold text-black dark:text-white">Online + Projects</span>
                </div>
              </div>
              <Link
                href="/contact"
                className="block w-full rounded-full bg-primary py-3 text-center font-semibold text-white transition-all hover:bg-primary/90"
              >
                Enroll Now
              </Link>
            </div>

            {/* Full-Stack AI Program */}
            <div className="rounded-2xl border border-stroke bg-white p-8 shadow-three dark:border-white/10 dark:bg-gray-dark">
              <div className="mb-6">
                <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold text-primary">
                  Advanced
                </span>
                <h3 className="mb-3 text-2xl font-bold text-black dark:text-white">
                  Full-Stack AI Development
                </h3>
                <p className="text-body-color dark:text-body-color-dark">
                  Comprehensive program combining modern web development with AI/ML integration for production-ready applications.
                </p>
              </div>
              <div className="mb-6">
                <h4 className="mb-3 font-semibold text-black dark:text-white">
                  What You&apos;ll Learn:
                </h4>
                <ul className="space-y-2 text-sm text-body-color dark:text-body-color-dark">
                  <li>✓ React, Next.js, and modern frameworks</li>
                  <li>✓ Python/Node.js backend development</li>
                  <li>✓ Machine learning fundamentals</li>
                  <li>✓ Computer vision and NLP</li>
                  <li>✓ Cloud deployment (AWS/Azure)</li>
                  <li>✓ End-to-end AI product building</li>
                </ul>
              </div>
              <div className="mb-6 rounded-lg bg-gray-2 p-4 dark:bg-white/5">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm text-body-color dark:text-body-color-dark">Duration:</span>
                  <span className="font-semibold text-black dark:text-white">16 Weeks</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-body-color dark:text-body-color-dark">Format:</span>
                  <span className="font-semibold text-black dark:text-white">Hybrid + Capstone</span>
                </div>
              </div>
              <Link
                href="/contact"
                className="block w-full rounded-full bg-primary py-3 text-center font-semibold text-white transition-all hover:bg-primary/90"
              >
                Enroll Now
              </Link>
            </div>
          </div>

          {/* Why Choose Us */}
          {/* <div className="rounded-2xl border border-stroke bg-gradient-to-br from-[#e3f2fd] to-white p-8 dark:border-white/10 dark:from-gray-dark dark:to-gray-dark md:p-12">
            <h2 className="mb-8 text-center text-3xl font-bold text-black dark:text-white">
              Why Choose SteHawk Tech Academy
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-bold text-black dark:text-white">
                  Industry Experts
                </h3>
                <p className="text-sm text-body-color dark:text-body-color-dark">
                  Learn from professionals with real-world AI/ML production experience
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-bold text-black dark:text-white">
                  Project-Based Learning
                </h3>
                <p className="text-sm text-body-color dark:text-body-color-dark">
                  Build real AI applications you can showcase in your portfolio
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-bold text-black dark:text-white">
                  Career Support
                </h3>
                <p className="text-sm text-body-color dark:text-body-color-dark">
                  Job placement assistance and career guidance after completion
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default AcademyPage;