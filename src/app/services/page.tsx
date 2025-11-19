import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Software Services | SteHawk - Custom App Development",
  description: "Android, iOS & full-stack web applications with end-to-end product thinking. Transform your ideas into scalable, future-ready solutions.",
};

const ServicesPage = () => {
  return (
    <>
      <section className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-20 md:pt-[150px] lg:pb-28 lg:pt-[180px]">
        <div className="container">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#e0edff] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary dark:bg-primary/20">
              Software Services
            </div>
            <h1 className="mb-4 text-4xl font-bold text-black dark:text-white sm:text-5xl">
              Apps & Platforms
            </h1>
            <p className="mx-auto max-w-[600px] text-base text-body-color dark:text-body-color-dark">
              Android, iOS & full-stack web applications with end-to-end product thinking
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Mobile Development */}
            <div className="rounded-2xl border border-stroke bg-white p-8 shadow-three dark:border-white/10 dark:bg-gray-dark">
              <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3">
                <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                Mobile App Development
              </h3>
              <p className="mb-4 text-sm text-body-color dark:text-body-color-dark">
                Native Android & iOS applications built with modern frameworks like React Native, Flutter, and native technologies.
              </p>
              <ul className="space-y-2 text-sm text-body-color dark:text-body-color-dark">
                <li>• Android (Kotlin/Java)</li>
                <li>• iOS (Swift/SwiftUI)</li>
                <li>• React Native</li>
                <li>• Flutter</li>
              </ul>
            </div>

            {/* Web Development */}
            <div className="rounded-2xl border border-stroke bg-white p-8 shadow-three dark:border-white/10 dark:bg-gray-dark">
              <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3">
                <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                Web Development
              </h3>
              <p className="mb-4 text-sm text-body-color dark:text-body-color-dark">
                Full-stack web applications using cutting-edge technologies for performance and scalability.
              </p>
              <ul className="space-y-2 text-sm text-body-color dark:text-body-color-dark">
                <li>• React.js / Next.js</li>
                <li>• Node.js / Express</li>
                <li>• Python / Django</li>
                <li>• Database Design</li>
              </ul>
            </div>

            {/* Cloud & DevOps */}
            <div className="rounded-2xl border border-stroke bg-white p-8 shadow-three dark:border-white/10 dark:bg-gray-dark">
              <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3">
                <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                Cloud & DevOps
              </h3>
              <p className="mb-4 text-sm text-body-color dark:text-body-color-dark">
                Scalable cloud infrastructure and continuous deployment pipelines for reliable application delivery.
              </p>
              <ul className="space-y-2 text-sm text-body-color dark:text-body-color-dark">
                <li>• AWS / Azure / GCP</li>
                <li>• Docker / Kubernetes</li>
                <li>• CI/CD Pipelines</li>
                <li>• Monitoring & Analytics</li>
              </ul>
            </div>

            {/* AI/ML Integration */}
            <div className="rounded-2xl border border-stroke bg-white p-8 shadow-three dark:border-white/10 dark:bg-gray-dark">
              <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3">
                <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                AI/ML Integration
              </h3>
              <p className="mb-4 text-sm text-body-color dark:text-body-color-dark">
                Intelligent features powered by machine learning and generative AI for enhanced user experiences.
              </p>
              <ul className="space-y-2 text-sm text-body-color dark:text-body-color-dark">
                <li>• Generative AI (GPT, Claude)</li>
                <li>• Computer Vision</li>
                <li>• Natural Language Processing</li>
                <li>• Predictive Analytics</li>
              </ul>
            </div>

            {/* Product Development */}
            <div className="rounded-2xl border border-stroke bg-white p-8 shadow-three dark:border-white/10 dark:bg-gray-dark">
              <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3">
                <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                Product Development
              </h3>
              <p className="mb-4 text-sm text-body-color dark:text-body-color-dark">
                End-to-end product thinking from idea validation to market launch with agile methodologies.
              </p>
              <ul className="space-y-2 text-sm text-body-color dark:text-body-color-dark">
                <li>• MVP Development</li>
                <li>• UX/UI Design</li>
                <li>• Product Strategy</li>
                <li>• Market Validation</li>
              </ul>
            </div>

            {/* API Development */}
            <div className="rounded-2xl border border-stroke bg-white p-8 shadow-three dark:border-white/10 dark:bg-gray-dark">
              <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3">
                <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                API Development
              </h3>
              <p className="mb-4 text-sm text-body-color dark:text-body-color-dark">
                Robust RESTful and GraphQL APIs for seamless integration and data management.
              </p>
              <ul className="space-y-2 text-sm text-body-color dark:text-body-color-dark">
                <li>• RESTful APIs</li>
                <li>• GraphQL</li>
                <li>• API Documentation</li>
                <li>• Third-party Integrations</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-primary/90"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;