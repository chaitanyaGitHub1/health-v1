import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EV & Battery | SteHawk - Next Phase Innovation",
  description: "Battery pack assembly & EV solutions tailored for Tier-2 & Tier-3 cities. Coming soon.",
};

const EVPage = () => {
  return (
    <>
      <section className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-20 md:pt-[150px] lg:pb-28 lg:pt-[180px]">
        <div className="container">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#e0edff] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary dark:bg-primary/20">
              EV & Battery
            </div>
            <h1 className="mb-4 text-4xl font-bold text-black dark:text-white sm:text-5xl">
              Entering EV & Battery Pack Assembly
            </h1>
            <p className="mx-auto max-w-[600px] text-base text-body-color dark:text-body-color-dark">
             SteHawk is expanding into electric mobility and clean energy solutions. We are starting with battery pack assembly and EV concepts tailored for practical use in Tier-2 and Tier-3 cities.
            </p>
          </div>

          {/* Future Direction Section */}
          <div className="mb-16">
            {/* Main Feature Card */}
            <div className="rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-8 text-white shadow-xl md:p-12">
              <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
                <div>
                  <h3 className="mb-4 text-2xl font-bold sm:text-3xl">
                    Battery Pack Assembly & EV Manufacturing – Coming Soon
                  </h3>
                  <p className="mb-6 text-base leading-relaxed opacity-90">
                    Our goal is to design EV solutions that are reliable, service-friendly and built with local needs in mind. We aim to support electric cycles, small EV platforms and modular battery packs that are easy to maintain.
                  </p>
                  
                  <div className="mb-6 flex flex-wrap gap-3">
                    <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                      Battery Pack Assembly
                    </span>
                    <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                      EV Cycle Kits
                    </span>
                    <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                      Affordable EVs
                    </span>
                    <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                      Tier-2 & Tier-3 Focus
                    </span>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
                  <h4 className="mb-4 text-lg font-bold">
                    What this means for SteHawk:
                  </h4>
                  <ul className="space-y-3 text-sm leading-relaxed">
                    <li className="flex gap-2">
                      <span className="mt-1 flex-shrink-0">•</span>
                      <span>A natural extension of our engineering and product development mindset.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 flex-shrink-0">•</span>
                      <span>Opportunity to combine software, electronics and mechanical design.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 flex-shrink-0">•</span>
                      <span>Long-term vision to support sustainable, local mobility solutions.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Section */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold text-black dark:text-white">
              Our Vision
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-2xl border border-stroke bg-white p-8 shadow-three dark:border-white/10 dark:bg-gray-dark">
                <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3">
                  <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                  Battery Pack Assembly
                </h3>
                <p className="text-sm text-body-color dark:text-body-color-dark">
                  Custom battery pack solutions designed for various EV applications, from two-wheelers to commercial vehicles.
                </p>
              </div>

              <div className="rounded-2xl border border-stroke bg-white p-8 shadow-three dark:border-white/10 dark:bg-gray-dark">
                <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3">
                  <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                  Tier-2 & Tier-3 Focus
                </h3>
                <p className="text-sm text-body-color dark:text-body-color-dark">
                  Bringing affordable and reliable EV technology to smaller cities, making electric mobility accessible to all.
                </p>
              </div>

              <div className="rounded-2xl border border-stroke bg-white p-8 shadow-three dark:border-white/10 dark:bg-gray-dark">
                <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3">
                  <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                  Sustainable Solutions
                </h3>
                <p className="text-sm text-body-color dark:text-body-color-dark">
                  Environmentally conscious designs with emphasis on battery lifecycle management and recycling.
                </p>
              </div>
            </div>
          </div>

          {/* Planned Offerings */}
          <div className="rounded-2xl border border-stroke bg-white p-8 dark:border-white/10 dark:bg-gray-dark md:p-12">
            <h2 className="mb-8 text-center text-3xl font-bold text-black dark:text-white">
              Planned Offerings
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <span className="text-lg font-bold text-primary">1</span>
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 font-bold text-black dark:text-white">
                    Custom Battery Packs
                  </h3>
                  <p className="text-sm text-body-color dark:text-body-color-dark">
                    Tailored battery solutions for different EV segments including e-rickshaws, e-bikes, and light commercial vehicles.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <span className="text-lg font-bold text-primary">2</span>
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 font-bold text-black dark:text-white">
                    Battery Management Systems
                  </h3>
                  <p className="text-sm text-body-color dark:text-body-color-dark">
                    Smart BMS solutions for optimal battery performance, safety, and longevity monitoring.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <span className="text-lg font-bold text-primary">3</span>
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 font-bold text-black dark:text-white">
                    Charging Infrastructure
                  </h3>
                  <p className="text-sm text-body-color dark:text-body-color-dark">
                    Developing accessible charging solutions suitable for smaller cities and rural areas.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <span className="text-lg font-bold text-primary">4</span>
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 font-bold text-black dark:text-white">
                    Training & Support
                  </h3>
                  <p className="text-sm text-body-color dark:text-body-color-dark">
                    Comprehensive training programs for EV maintenance and battery technology for local mechanics.
                  </p>
                </div>
              </div>
            </div>
          </div>
                    {/* Coming Soon Banner */}
          <div className="mx-auto mb-16 max-w-4xl rounded-2xl border-2 border-primary bg-gradient-to-br from-[#e3f2fd] to-white p-12 text-center dark:from-gray-dark dark:to-gray-dark">
            <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
              <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white">
              Coming Soon
            </h2>
            <p className="mb-6 text-lg text-body-color dark:text-body-color-dark">
              We&apos;re preparing to launch our EV & Battery technology division. Stay tuned for innovative solutions in electric mobility.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-primary/90"
            >
              Notify Me When Available
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default EVPage;