import Image from "next/image";

// Primary color extracted from the blue button in the image:
const PRIMARY_COLOR = "#2a62ff"; 

const AIMLConnectivity = () => {
  const solutions = [
    {
      id: 1,
      icon: "🤖",
      title: "Digital Surgery & Wearables",
      subtitle: "Connected Care",
      description: "Design of digital surgery platforms, device software, and wearable solutions. Supports pre-operative, intra-operative, and post-operative data flows.",
      features: [
        "Integration with health records and mobile experiences",
        "Real-time monitoring and data synchronization",
        "Patient-centered workflow optimization",
      ],
    },
    {
      id: 2,
      icon: "🔒",
      title: "Connectivity & Compliance",
      subtitle: "Cloud & Cybersecurity",
      description: "Cloud-based architectures and cybersecurity controls. Compliant data management and governance frameworks.",
      features: [
        "Secure analytics and remote updates",
        "Scalable deployment infrastructure",
        "HIPAA and regulatory compliance",
      ],
    },
    {
      id: 3,
      icon: "📊",
      title: "Data Science & Decision Support",
      subtitle: "AI / ML",
      description: "Data platform design and KPI-driven dashboards. AI/ML algorithm customization.",
      features: [
        "Post-market surveillance tooling",
        "Clinical insights and performance optimization",
        "Predictive analytics and machine learning models",
      ],
    },
  ];

  const capabilities = [
    {
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "AI Development",
      description: "Custom AI models tailored to healthcare workflows",
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: "ML Development",
      description: "Machine learning solutions for medical insights",
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: "Generative AI",
      description: "Advanced generative models for healthcare applications",
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      title: "Computer Vision",
      description: "Image analysis and pattern recognition systems",
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      title: "AI Chatbot Services",
      description: "Intelligent conversational interfaces for patient engagement",
    },
  ];

  const ecosystemCards = [
    {
      icon: "🚀",
      title: "Startups",
      description: "Fast-track your MVP and product-market fit with AI-powered solutions.",
      features: [
        "Data-driven market insights to take your business to success",
        "Mitigate technical debt - Solid foundation for products with scalable architecture, avoiding costly reworks",
      ],
    },
    {
      icon: "🏢",
      title: "Small Businesses",
      description: "Automate repetitive processes and scale customer engagement effortlessly.",
      features: [
        "Attract Investment with a Strong Proof-of-Concept",
        "Business Process Audit & AI Roadmap",
      ],
    },
    {
      icon: "🏭",
      title: "Enterprises",
      description: "Scale with smart business intelligence to drive enterprise-wide transformation.",
      features: [
        "Seamless Integration with Legacy Systems",
        "Optimize and Automate Complex Business Processes",
      ],
    },
  ];

  return (
    <section className="pb-16 pt-16 md:pb-20 md:pt-20 lg:pb-28 lg:pt-28">
      <div className="container">
        {/* Hero Section (Retained) */}
        <div className="mb-16 overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-dark dark:via-gray-800 dark:to-gray-900">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            {/* Left Content */}
            <div className="p-8 md:p-12 lg:p-16">
              <h2 className="mb-6 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-5xl">
                Transforming Business Efficiency With End-to-End{" "}
                <span className="text-primary">AI/ML</span> Development Services
              </h2>
              
              <div className="mb-8 space-y-4">
                {/* Check items retained */}
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-base text-body-color dark:text-body-color-dark">
                    Custom intelligent strategy & solutions created for every business growth
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-base text-body-color dark:text-body-color-dark">
                    Have a business use case that needs automation? We can help!
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-base text-body-color dark:text-body-color-dark">
                    Don&apos;t know how to start with AI? We&apos;ve got your back!
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-base text-body-color dark:text-body-color-dark">
                    Best AI expertise & engineers&apos; support.
                  </p>
                </div>
              </div>

              <button className="rounded-full bg-primary px-8 py-4 text-base font-semibold text-white transition-all hover:bg-primary/90">
                Consult AI For Your Project
              </button>
            </div>

            {/* Right Image/Visual (Retained) */}
            <div className="relative h-[400px] lg:h-[600px]">
              <Image
                src="/images/hero/AI.jpeg"
                alt="AI ML Development"
                fill
                className="object-cover"
              />
              {/* Floating Labels */}
              <div className="absolute right-8 top-12 rounded-2xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm dark:bg-gray-dark/95">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span className="text-sm font-semibold text-black dark:text-white">AI/ML Development</span>
                </div>
              </div>
              <div className="absolute left-8 top-1/3 rounded-2xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm dark:bg-gray-dark/95">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span className="text-sm font-semibold text-black dark:text-white">AI Chatbot & Virtual Assistant</span>
                </div>
              </div>
              <div className="absolute bottom-12 right-8 rounded-2xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm dark:bg-gray-dark/95">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span className="text-sm font-semibold text-black dark:text-white">Natural Language Processing (NLP)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Business Ecosystem Section (Retained) */}
        <div className="mb-16">
          <div className="mb-12 text-center">
            <h3 className="mb-4 text-3xl font-bold text-black dark:text-white">
              No Matter the Use Case, We&apos;ve AI Solutions For Every{" "}
              <span className="text-primary">Business Ecosystem</span>
            </h3>
            <p className="mx-auto max-w-3xl text-base text-body-color dark:text-body-color-dark">
              With a vision to transform existing and new businesses through our AI-driven capabilities, we aim to build an ecosystem that evolves and scales alongside your growth.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {ecosystemCards.map((card) => (
              <div
                key={card.title}
                className="rounded-3xl bg-gradient-to-br from-blue-50 to-purple-50 p-8 transition-all hover:-translate-y-1 hover:shadow-lg dark:from-gray-dark dark:to-gray-800"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-4xl shadow-md dark:bg-gray-900">
                  {card.icon}
                </div>
                <h4 className="mb-4 text-xl font-bold text-black dark:text-white">
                  {card.title}
                </h4>
                <p className="mb-6 text-sm text-body-color dark:text-body-color-dark">
                  {card.description}
                </p>
                <ul className="space-y-3">
                  {card.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></div>
                      <span className="text-sm text-body-color dark:text-body-color-dark">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Capabilities CTA Section (Retained) */}
        <div className="mb-16">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h3 className="mb-4 text-3xl font-bold text-black dark:text-white">
                Want to See What <span className="text-primary">Our AI/ML</span> Capabilities Can Do For Your Business?
              </h3>
              <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
                From idea extraction to commercialization, we plan to transform business with complete AI development services. Want to know how?
              </p>
              <button className="rounded-full bg-primary px-8 py-4 text-base font-semibold text-white transition-all hover:bg-primary/90">
                Schedule a Call
              </button>
            </div>
            <div className="relative h-[300px] overflow-hidden rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&q=80"
                alt="AI Capabilities"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Core Solutions Section (Retained) */}
        <div className="mb-16">
          <div className="mb-12 text-center">
            <h3 className="mb-4 text-3xl font-bold text-black dark:text-white">
              Our Core <span className="text-primary">AI/ML</span> Development Solutions to Scale Smarter & Faster
            </h3>
            <p className="mx-auto max-w-3xl text-base text-body-color dark:text-body-color-dark">
              While the world is still understanding AI, we are preparing a space that is built with AI. At our company, we integrate AI/ML solutions into our core functionality, not as a feature but as the foundation. Here&apos;s what we offer!
            </p>
          </div>

          <div className="mb-8 flex gap-4 overflow-x-auto pb-4">
            {capabilities.map((capability) => (
              <div
                key={capability.title}
                className="min-w-[200px] flex-shrink-0 rounded-2xl bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg dark:bg-gray-dark"
              >
                <div className="mb-4 text-primary">{capability.icon}</div>
                <h4 className="mb-2 text-lg font-bold text-black dark:text-white">
                  {capability.title}
                </h4>
                <p className="text-sm text-body-color dark:text-body-color-dark">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* MODIFIED: Main Solutions Grid (now a horizontal scroll/carousel matching the image UI) */}
        <div className="mb-8">
            {/* Header section from the UI image */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-10">
                <div className="text-left">
                    <p className="text-sm font-semibold text-primary uppercase mb-2">
                        OUR MOST PREMIUM SERVICES
                    </p>
                    <h2 className="text-3xl font-bold text-black dark:text-white sm:text-4xl">
                        Most Experienced Our Services
                    </h2>
                </div>
            </div>
            
            {/* Cards Carousel (Horizontal Scroll) */}
            <div className="flex gap-8 overflow-x-auto pb-6 -mx-4 px-4 md:-mx-0 md:px-0">
                {solutions.map((solution, index) => {
                    // Use a fallback for the icon if the emoji isn't desired
                    const cardIcon = (
                      <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M11.085 11.53l5.064-5.065m-2.262 7.026l-5.065-5.064m7.327-1.962L21 21m-9-9l9-9m-9 9l-9 9m9-9l-9 9m9-9l9-9M3 3l9 9" />
                      </svg>
                    );
                    
                    // Assigning service numbers to replicate the image's design
                    const serviceNumber = index === 0 || index === 2 ? '01' : '02'; 

                    return (
                        <div
                            key={solution.id}
                            className="min-w-[320px] max-w-[320px] flex-shrink-0 rounded-xl bg-white shadow-xl transition-all duration-300 hover:shadow-2xl"
                            style={{ 
                                background: '#f8f8f8' // Light gray background from the image
                            }}
                        >
                            <div className="flex h-full">
                                {/* Left Content Section */}
                                <div className="p-6 w-3/5 flex flex-col justify-end">
                                    <div className="mb-4 text-primary">
                                        {cardIcon} {/* Use the blue icon placeholder */}
                                    </div>
                                    <p className="text-3xl font-bold text-gray-400 mb-2">
                                        {serviceNumber}
                                    </p>
                                    <h4 className="mb-2 text-xl font-bold text-black">
                                        {/* Using a placeholder title to match the image UI */}
                                        {index === 1 ? "IT MANAGMENT" : "UX/UI DESIGN"} 
                                    </h4>
                                    <p className="text-sm text-body-color line-clamp-2">
                                        Sed ut perspiciatis unde is voluptatem accusant
                                    </p>
                                </div>

                                {/* Right Image Section */}
                                <div className="relative w-2/5 overflow-hidden rounded-r-xl">
    <Image
        // Using distinct, public Unsplash URLs for each card's image
        src={`https://images.unsplash.com/photo-${
            index === 0 ? "1727434032792-c7ef921ae086" : 
            index === 1 ? "1559757148-5c350d0d3c56" : 
            "1551288049-bebda4e38f71"
        }?w=800&q=80`}
        alt={solution.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
    />
    {/* Next Arrow Overlay */}
    <div className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white/90 rounded-l-full shadow-md cursor-pointer">
        <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
    </div>
</div>
                            </div>
                        </div>
                    );
                })}
            </div>

            
        </div>
        

        {/* Bottom CTA (Retained) */}
        <div className="mt-16 rounded-3xl bg-gradient-to-br from-primary/5 to-primary/10 p-8 text-center dark:from-primary/10 dark:to-primary/20 md:p-12">
          <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
            Ready to Transform Your Healthcare Technology?
          </h3>
          <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
            Let&apos;s discuss how HCE&apos;s AI/ML and connectivity solutions can accelerate your medical device innovation
          </p>
          <button className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white transition-all hover:bg-primary/90">
            Schedule a Consultation
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AIMLConnectivity;