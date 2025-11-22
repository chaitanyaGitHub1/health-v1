import Image from "next/image";
import Link from "next/link";

const Leadership = () => {
  const leaders = [
    {
      id: 1,
      name: "Siddharth Desai",
      title: "Founder & CEO",
      // Updated to match the photo in the screenshot
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80", 
      bio: "Extensive R&D, operations, and technical leadership experience across biomedical, optical, infusion, combination products, orthopedics, and pain management.",
      achievements: [
        "Developed products such as phacoemulsification systems, intraocular lenses, ultrasound gel-less solutions, and single-use endoscopes",
        "Led R&D and operations at Baxter Healthcare, Allergan, Kimberly-Clark, and MicroAire Surgical",
        "Launched multiple startups with innovative clinicians, executed global technology transfers, and developed supply chain strategies",
        "Holds over 30 patents, engineering degrees, and an Executive MBA; driven by a passion to improve human lives",
      ],
      linkedin: "#",
      twitter: "#",
      decorativeShape: "circle",
    },
    {
      id: 2,
      name: "Dale Gloyeski",
      title: "Manufacturing & Technical Transfer Leader",
      // Updated to match the photo in the screenshot
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80", 
      bio: "Over 30 years of medical and combination device manufacturing experience.",
      achievements: [
        "Led technology transfers for intraocular lenses, phacoemulsification equipment, arthroscopy systems, IV containers, and ablation catheters",
        "Focuses on process development, cost targets, SOPs, validation protocols, and efficient product qualifications into manufacturing",
        "Certified Quality Auditor with a BSME and MBA",
      ],
      linkedin: "#",
      twitter: "#",
      decorativeShape: "square",
    },
    {
      id: 3,
      name: "Andrew Sharp",
      title: "Systems & Technology Leader",
      // Updated to match the photo in the screenshot
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80", 
      bio: "Provides systems engineering and technology leadership for complex medical devices.",
      achievements: [
        "Experience across endoscopy platforms including arthroscopes, wireless cameras, and RF ablation tools",
        "Leads product and technology roadmapping for integrated device ecosystems",
      ],
      linkedin: "#",
      twitter: "#",
      decorativeShape: "triangle",
    },
    {
      id: 4,
      name: "Al Rego, PhD",
      title: "Regulatory Affairs & Quality Advisor",
      // Updated to match the photo in the screenshot
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80", 
      bio: "Over 30 years of RA/QA leadership experience.",
      achievements: [
        "Supported more than 21 startups and achieved approvals for over 45 products through global regulatory pathways",
        "Expertise spans medical device regulations, NDAs, clinical and non-clinical study design, stability, sterilization validation, and statistical design",
        "Serves as an adjunct professor in medical device RA/QA",
      ],
      linkedin: "#",
      twitter: "#",
      decorativeShape: "circles",
    },
  ];

  const getDecorativeElement = (shape: string) => {
    switch (shape) {
      case "circle":
        return (
          <div className="absolute -top-10 left-1/2 -translate-x-1/2">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="opacity-10">
              <circle cx="60" cy="60" r="50" stroke="currentColor" strokeWidth="2" />
              <circle cx="60" cy="60" r="35" stroke="currentColor" strokeWidth="2" />
              <circle cx="60" cy="60" r="20" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        );
      case "square":
        return (
          <div className="absolute -top-10 left-1/2 -translate-x-1/2">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="opacity-10">
              <rect x="20" y="20" width="80" height="80" stroke="currentColor" strokeWidth="2" />
              <rect x="35" y="35" width="50" height="50" stroke="currentColor" strokeWidth="2" />
              <rect x="47" y="47" width="26" height="26" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        );
      case "triangle":
        return (
          <div className="absolute -top-10 left-1/2 -translate-x-1/2">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="opacity-10">
              <path d="M60 20 L100 90 L20 90 Z" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M60 35 L85 80 L35 80 Z" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </div>
        );
      case "circles":
        return (
          <div className="absolute -top-10 left-1/2 -translate-x-1/2">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="opacity-10">
              <circle cx="40" cy="60" r="25" stroke="currentColor" strokeWidth="2" />
              <circle cx="80" cy="60" r="25" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        {/* Header Section */}
        <div className="mb-16 flex items-center justify-between">
          <div>
            <h2 className="mb-4 text-4xl font-bold text-black dark:text-white md:text-5xl lg:text-6xl">
              Our Leadership
            </h2>
          </div>
          <Link
            href="#all"
            className="group flex items-center gap-2 rounded-full border-2 border-black px-6 py-3 font-semibold text-black transition-all hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
          >
            View All
            <svg
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>

        {/* Leadership Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {leaders.map((leader) => (
            <article
              key={leader.id}
              className="group relative overflow-hidden rounded-3xl border-2 border-stroke bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] dark:border-white/10 dark:bg-gray-dark"
            >
              {/* Decorative Shape */}
              {getDecorativeElement(leader.decorativeShape)}

              {/* Image Section with Wave Effect */}
              {/* INCREASED HEIGHT TO PREVENT OVERLAP */}
              <div className="relative h-[320px] overflow-hidden">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
                {/* Wave Overlay */}
                <div className="absolute bottom-0 left-0 right-0">
                  <svg
                    viewBox="0 0 1440 320"
                    fill="none"
                    className="w-full"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,160 C240,200 480,120 720,160 C960,200 1200,120 1440,160 L1440,320 L0,320 Z"
                      className="fill-white dark:fill-gray-dark"
                    />
                  </svg>
                </div>
              </div>

              {/* Content Section */}
              {/* REMOVED -mt-16 to fix the overlap issue */}
              <div className="relative px-6 pb-8 pt-4"> 
                {/* Name and Title */}
                <div className="mb-4">
                  <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
                    {leader.name}
                  </h3>
                  <p className="text-sm text-body-color dark:text-body-color-dark">
                    {leader.title}
                  </p>
                  
                  {/* Social Links */}
                  <div className="mt-3 flex gap-2">
                    <Link
                      href={leader.linkedin}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary transition-all hover:bg-primary hover:text-white"
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </Link>
                    {leader.twitter && (
                      <Link
                        href={leader.twitter}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary transition-all hover:bg-primary hover:text-white"
                      >
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>

                {/* Bio */}
                <p className="mb-4 text-sm leading-relaxed text-body-color dark:text-body-color-dark">
                  {leader.bio}
                </p>

                {/* Divider Lines */}
                <div className="mb-4 flex gap-4">
                  <div className="h-0.5 flex-1 bg-stroke dark:bg-white/10"></div>
                  <div className="h-0.5 flex-1 bg-stroke dark:bg-white/10"></div>
                </div>

                {/* Achievements - Truncated Preview */}
                <div className="space-y-2">
                  {leader.achievements.slice(0, 2).map((achievement, index) => (
                    <p
                      key={index}
                      className="line-clamp-2 text-xs text-body-color dark:text-body-color-dark"
                    >
                      • {achievement}
                    </p>
                  ))}
                </div>

                {/* Read More Link */}
                <button className="mt-4 text-sm font-semibold text-primary transition-all hover:underline">
                  Read Full Bio →
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Detailed Bio Section - Expandable */}
        <div className="mt-16 rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 p-8 dark:from-gray-dark dark:to-gray-800 md:p-12">
          <h3 className="mb-8 text-center text-2xl font-bold text-black dark:text-white">
            Experienced Leadership with Global Reach
          </h3>
          
          <div className="space-y-8">
            {leaders.map((leader) => (
              <div
                key={`detail-${leader.id}`}
                className="rounded-2xl border border-stroke bg-white p-6 dark:border-white/10 dark:bg-gray-dark md:p-8"
              >
                <div className="mb-4 flex items-start gap-4">
                  <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-1 text-xl font-bold text-black dark:text-white">
                      {leader.name}
                    </h4>
                    <p className="text-sm text-primary">{leader.title}</p>
                  </div>
                </div>
                
                <p className="mb-4 text-base text-body-color dark:text-body-color-dark">
                  {leader.bio}
                </p>
                
                <ul className="space-y-3">
                  {leader.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-sm text-body-color dark:text-body-color-dark">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-3xl bg-gradient-to-br from-primary/5 to-primary/10 p-8 text-center dark:from-primary/10 dark:to-primary/20 md:p-12">
          <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
            Ready to Work with Industry Leaders?
          </h3>
          <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
            Connect with our experienced leadership team to discuss your medical device innovation needs
          </p>
          <button className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white transition-all hover:bg-primary/90">
            Schedule a Meeting
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Leadership;