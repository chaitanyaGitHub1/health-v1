import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 mt-6 overflow-hidden bg-white dark:bg-gray-dark"
      >
        <div className="container relative z-10 py-16 sm:py-20 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
            {/* Left Content */}
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#e0edff] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary dark:bg-primary/20">
                <span>•</span>
                <span>Healthcare Evolution, Inc.</span>
              </div>

              <h1 className="mb-4 text-4xl font-bold leading-tight text-black dark:text-white sm:text-5xl lg:text-[2.8rem]">
                From unmet need to
                <br />
                <span className="text-primary">approved medical device</span>
              </h1>

              <p className="mb-6 max-w-[580px] text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg">
                Healthcare Evolution, Inc. (HCE) partners with innovative medical device and healthcare companies to accelerate development, de-risk regulatory pathways, and enable successful global launches.
              </p>

              <div className="mb-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-primary/90"
                >
                  Schedule a Strategy Call →
                </Link>
                <Link
                  href="/capabilities"
                  className="rounded-full border border-stroke bg-white px-5 py-3 text-sm font-medium text-black transition-all duration-300 hover:border-primary hover:text-primary dark:border-white/20 dark:bg-gray-dark dark:text-white"
                >
                  Explore Capabilities
                </Link>
              </div>

              <div className="flex flex-wrap gap-2 text-xs text-body-color dark:text-body-color-dark">
                <span className="rounded-full border border-stroke bg-[#f9fafb] px-3 py-1 dark:border-white/10 dark:bg-white/5">
                  Medical Device Development
                </span>
                <span className="rounded-full border border-stroke bg-[#f9fafb] px-3 py-1 dark:border-white/10 dark:bg-white/5">
                  Quality & Regulatory
                </span>
                <span className="rounded-full border border-stroke bg-[#f9fafb] px-3 py-1 dark:border-white/10 dark:bg-white/5">
                  Electromechanical Systems
                </span>
                <span className="rounded-full border border-stroke bg-[#f9fafb] px-3 py-1 dark:border-white/10 dark:bg-white/5">
                  SaMD & Connectivity
                </span>
                <span className="rounded-full border border-stroke bg-[#f9fafb] px-3 py-1 dark:border-white/10 dark:bg-white/5">
                  AI/ML & Data Analytics
                </span>
                <span className="rounded-full border border-stroke bg-[#f9fafb] px-3 py-1 dark:border-white/10 dark:bg-white/5">
                  Design Transfer & Manufacturing
                </span>
              </div>

              <p className="mt-4 text-xs italic text-body-color dark:text-body-color-dark">
                Over 250 years of combined experience across biomedical, optical, infusion, orthopedics, and combination products.
              </p>
            </div>

            {/* Right Card */}
            <aside className="rounded-3xl border border-stroke bg-gradient-to-br from-[#e3f2fd] to-white p-6 shadow-three dark:border-white/10 dark:from-gray-dark dark:to-gray-dark sm:p-8">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-body-color dark:text-body-color-dark">
                Our Expertise
              </h3>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-stroke bg-white/80 p-4 dark:border-white/20 dark:bg-white/5">
                  <div className="mb-1 text-xs text-body-color dark:text-body-color-dark">
                    Device Design
                  </div>
                  <div className="mb-1 text-lg font-bold text-primary">
                    Medical Device Development
                  </div>
                  <div className="text-[11px] leading-relaxed text-body-color dark:text-body-color-dark">
                    Concept development, human factors engineering, and system-level requirements aligned with clinical workflows.
                  </div>
                </div>

                <div className="rounded-2xl border border-stroke bg-white/80 p-4 dark:border-white/20 dark:bg-white/5">
                  <div className="mb-1 text-xs text-body-color dark:text-body-color-dark">
                    Quality & Regulatory
                  </div>
                  <div className="mb-1 text-lg font-bold text-primary">
                    Global Approvals
                  </div>
                  <div className="text-[11px] leading-relaxed text-body-color dark:text-body-color-dark">
                    Design control, DHF documentation, and regulatory submissions across global pathways.
                  </div>
                </div>

                <div className="rounded-2xl border border-stroke bg-white/80 p-4 dark:border-white/20 dark:bg-white/5">
                  <div className="mb-1 text-xs text-body-color dark:text-body-color-dark">
                    SaMD & Firmware
                  </div>
                  <div className="mb-1 text-lg font-bold text-primary">
                    Software Development
                  </div>
                  <div className="text-[11px] leading-relaxed text-body-color dark:text-body-color-dark">
                    Embedded firmware to connected applications under robust quality frameworks.
                  </div>
                </div>

                <div className="rounded-2xl border border-stroke bg-white/80 p-4 dark:border-white/20 dark:bg-white/5">
                  <div className="mb-1 text-xs text-body-color dark:text-body-color-dark">
                    Data & AI
                  </div>
                  <div className="mb-1 text-lg font-bold text-primary">
                    AI/ML & Analytics
                  </div>
                  <div className="text-[11px] leading-relaxed text-body-color dark:text-body-color-dark">
                    Device connectivity, cloud platforms, and AI/ML algorithms for clinical insights.
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;