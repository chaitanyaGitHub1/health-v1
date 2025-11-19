"use client";

const capabilities = [
  {
    tag: "Device Design",
    title: "Medical Device Development",
    description:
      "Concept development, unmet-need analysis, rapid prototyping, and system-level requirements aligned with usability expectations.",
    bullets: [
      "Human factors and clinical workflow integration.",
      "Rapid iteration with verification-ready documentation.",
    ],
    accent: "bg-gradient-to-br from-[#f5f3ff] via-white to-[#e6f0ff]",
  },
  {
    tag: "Systems",
    title: "Mechanical & Electromechanical Design",
    description:
      "Precision mechanics, microfluidics, and electronics spanning PCBA, FPGA, and automated test stations.",
    bullets: [
      "Mixed-signal design and flex circuits for complex platforms.",
      "Embedded RTOS/Linux systems supporting high-performance devices.",
    ],
    accent: "bg-gradient-to-br from-[#fef4ee] via-white to-[#ffe8f6]",
  },
  {
    tag: "SaMD & Firmware",
    title: "Software & SaMD",
    description:
      "Software engineered under robust quality systems, with core implementations from embedded firmware to connected apps.",
    bullets: [
      "C++ and Python foundations with cybersecurity best practices.",
      "Supports device functions, clinician workflows, and data integrity.",
    ],
    accent: "bg-gradient-to-br from-[#eefaf4] via-white to-[#e3f4ff]",
  },
  {
    tag: "Quality & Regulatory",
    title: "Quality Systems & Approvals",
    description:
      "Design control, DHF creation, and market submissions supported by compliant documentation.",
    bullets: [
      "Global approvals strategy and regulatory liaison support.",
      "QMS setup, remediation, and lifecycle validation protocols.",
    ],
    accent: "bg-gradient-to-br from-[#f8f0ff] via-white to-[#ecf7ff]",
  },
  {
    tag: "Operations",
    title: "Design Transfer & Manufacturing",
    description:
      "Closing the loop between design and production with qualified suppliers, pilot builds, and process validation.",
    bullets: [
      "Automated test fixtures, cost-down, and value engineering.",
      "Sustaining engineering support for scale-up.",
    ],
    accent: "bg-gradient-to-br from-[#fdf4ff] via-white to-[#f1fff5]",
  },
  {
    tag: "Data & AI",
    title: "Connectivity, AI/ML & Analytics",
    description:
      "Device data integration, secure cloud architectures, and intelligent dashboards for decision support.",
    bullets: [
      "EHR interoperability and compliant data pipelines.",
      "AI/ML algorithms powering automation and insights.",
    ],
    accent: "bg-gradient-to-br from-[#f4f8ff] via-white to-[#fff0f5]",
  },
];

const CapabilitiesShowcase = () => {
  return (
    <section className="bg-[#f4f6ff] py-20 dark:bg-slate-950 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
            Capabilities
          </span>
          <h2 className="mt-5 text-4xl font-semibold text-slate-900 dark:text-white md:text-5xl">
            From unmet need to manufacturable systems
          </h2>
          <p className="mt-5 text-base text-slate-600 dark:text-slate-300 md:text-lg">
            HCE combines medical device engineering, software and connectivity, quality and regulatory, and design transfer expertise to deliver integrated, compliant solutions.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {capabilities.map((capability, index) => (
            <article
              key={capability.title}
              className={`flex h-full flex-col justify-between rounded-[28px] p-8 shadow-[0_30px_70px_-40px_rgba(64,88,194,0.45)] transition hover:-translate-y-1 hover:shadow-[0_38px_90px_-45px_rgba(64,88,194,0.55)] dark:bg-slate-900/80 ${capability.accent}`}
            >
              <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-300">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 font-semibold uppercase tracking-[0.2em] text-primary shadow-sm">
                  {capability.tag}
                </div>
                <span className="text-sm font-semibold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="mt-6 space-y-4">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                  {capability.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {capability.description}
                </p>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {capability.bullets.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-2 h-2 w-2 rounded-full bg-primary/70" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-white/80 px-5 py-2 text-sm font-semibold text-primary shadow-sm transition hover:bg-white hover:shadow-md dark:bg-slate-800/80 dark:text-primary-200"
              >
                Explore Capability →
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesShowcase;
export { CapabilitiesShowcase };