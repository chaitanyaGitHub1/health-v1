import Image from "next/image";
import Link from "next/link";

const AboutSectionOne = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        {/* Main Intro Section */}
        <div className="mb-16 text-center">
          <p className="mx-auto max-w-4xl text-xl leading-relaxed text-black dark:text-white md:text-2xl">
            At Healthcare Evolution, Inc., we blend deep technical expertise, regulatory insight, and user-centered design to bring MedTech innovation to life. From startups to global enterprises, we turn visionary ideas into breakthrough products that improve health and save lives.
          </p>
        </div>

        {/* Stats Section */}
        <div className="mb-16 grid grid-cols-1 gap-8 text-center md:grid-cols-3">
          <div>
            <div className="mb-2 text-6xl font-bold text-black dark:text-white md:text-7xl">
              250+
            </div>
            <div className="text-lg font-medium text-body-color dark:text-body-color-dark">
              Years Combined Experience
            </div>
          </div>
          <div>
            <div className="mb-2 text-6xl font-bold text-black dark:text-white md:text-7xl">
              45+
            </div>
            <div className="text-lg font-medium text-body-color dark:text-body-color-dark">
              Products Approved
            </div>
          </div>
          <div>
            <div className="mb-2 text-6xl font-bold text-black dark:text-white md:text-7xl">
              100+
            </div>
            <div className="text-lg font-medium text-body-color dark:text-body-color-dark">
              Medical Device Programs
            </div>
          </div>
        </div>

        {/* Mission Section with Image */}
        <div className="mb-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-[400px] overflow-hidden rounded-2xl lg:h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
                alt="Medical professional working on device"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="mb-6 text-3xl font-bold text-black dark:text-white sm:text-4xl">
                Strategic Partner for Healthcare Innovators
              </h2>
              <p className="mb-6 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                HCE works as an extension of your team, combining strategic portfolio planning, deep technical expertise, and disciplined execution to deliver safe, effective, and commercially successful medical products.
              </p>
              <div className="mb-6">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                  Our Mission
                </h3>
                <p className="mb-6 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  To be a strategic partner for innovative medical device and healthcare companies that impact human lives, by augmenting their capabilities with HCE&apos;s cross-functional skillsets and accelerating product development and launches.
                </p>
              </div>
              <Link
                href="/about"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary/90"
              >
                Learn More About Us →
              </Link>
            </div>
          </div>
        </div>

        {/* Mission Pillars */}
        <div className="mb-16">
          <h3 className="mb-8 text-center text-2xl font-bold text-black dark:text-white">
            Mission Pillars
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-stroke bg-white p-6 text-center shadow-three dark:border-white/10 dark:bg-gray-dark">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h4 className="mb-3 text-lg font-bold text-black dark:text-white">
                Human-Centered Design
              </h4>
              <p className="text-sm text-body-color dark:text-body-color-dark">
                Workflow-driven design that prioritizes end-users and clinical workflows
              </p>
            </div>

            <div className="rounded-2xl border border-stroke bg-white p-6 text-center shadow-three dark:border-white/10 dark:bg-gray-dark">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h4 className="mb-3 text-lg font-bold text-black dark:text-white">
                Systems Engineering
              </h4>
              <p className="text-sm text-body-color dark:text-body-color-dark">
                Integrated approach across hardware, software, and data ecosystems
              </p>
            </div>

            <div className="rounded-2xl border border-stroke bg-white p-6 text-center shadow-three dark:border-white/10 dark:bg-gray-dark">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h4 className="mb-3 text-lg font-bold text-black dark:text-white">
                Lifecycle Focus
              </h4>
              <p className="text-sm text-body-color dark:text-body-color-dark">
                Support from ideation through post-market surveillance and optimization
              </p>
            </div>
          </div>
        </div>

        {/* Ecosystem Section */}
        <div className="rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 p-8 dark:from-primary/10 dark:to-primary/20 md:p-12">
          <h3 className="mb-6 text-center text-2xl font-bold text-black dark:text-white">
            Comprehensive Ecosystem
          </h3>
          <p className="mb-8 text-center text-base text-body-color dark:text-body-color-dark">
            Through strategic partners, HCE delivers integrated solutions spanning technology development, AI/ML, electromechanical systems, and business development.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-white p-6 dark:bg-gray-dark">
              <h4 className="mb-2 font-bold text-primary">Healthcare Evolution, Inc.</h4>
              <p className="text-sm text-body-color dark:text-body-color-dark">
                Medical Device Development
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 dark:bg-gray-dark">
              <h4 className="mb-2 font-bold text-primary">Kelton Technologies</h4>
              <p className="text-sm text-body-color dark:text-body-color-dark">
                Technology & AI/ML
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 dark:bg-gray-dark">
              <h4 className="mb-2 font-bold text-primary">Mimyk</h4>
              <p className="text-sm text-body-color dark:text-body-color-dark">
                Electromechanical Systems & Simulation
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 dark:bg-gray-dark">
              <h4 className="mb-2 font-bold text-primary">New Venture Partners</h4>
              <p className="text-sm text-body-color dark:text-body-color-dark">
                Business & IP Strategy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;