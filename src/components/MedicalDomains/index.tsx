import Image from "next/image";

// Custom Tailwind classes for the primary color found in the image
const PRIMARY_COLOR = "#4F72CD";
const LIGHT_BLUE_BG = "bg-[#d8e1f5]"; // Lighter blue for the CTA section

const MedicalDomains = () => {
  const domains = [
    {
      id: 1,
      title: "Pain Management",
      description: "Development of pain management catheter systems, nerve block solutions, and targeted delivery platforms. Focus on safety, usability, and procedural efficiency.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
      date: "Sep. 27-2021",
    },
    {
      id: 2,
      title: "Medication Delivery",
      description: "Elastomeric and electromechanical infusion pumps. Drug library integration and drug stability programs for continuous and controlled delivery.",
      image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&q=80",
      date: "Sep. 27-2021",
    },
    {
      id: 3,
      title: "Plastic Surgery",
      description: "Liposuction tools, skin abraders, and implant-related systems. Emphasis on procedural consistency and long-term safety profiles.",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
      date: "Sep. 27-2021",
    },
    {
      id: 4,
      title: "Endoscopy & Robotics",
      description: "Arthroscopes, shavers, irrigation and cannulas, laparoscopes. Advanced imaging systems including fluorescence and hyperspectral imaging. Experience with single-use endoscopes and robotic adjuncts.",
      image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&q=80",
      date: "Sep. 27-2021",
    },
    {
      id: 5,
      title: "Ophthalmology",
      description: "Phacoemulsification systems, intraocular lenses, and IOL delivery devices. Combines precision mechanics, ultrasonic control, and optimized fluidics.",
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80",
      date: "Sep. 27-2021",
    },
    {
      id: 6,
      title: "Orthopedics & Drug-Device Combinations",
      description: "Powered surgical instruments, implants, and wound management solutions. Pen injectors and high-viscosity drug delivery systems.",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80",
      date: "Sep. 27-2021",
    },
  ];

  // Helper component to render the "Read More" button style from the image
  const ReadMoreButton = () => (
    <div className="flex items-center mt-4">
      <button 
        className="text-white text-sm font-semibold rounded-full px-5 py-2.5 transition-all duration-300 hover:opacity-90"
        style={{ backgroundColor: PRIMARY_COLOR }} // Use custom primary color
      >
        Read More
      </button>
      {/* Arrow container: transition-all for smooth movement */}
      <div 
        className="w-8 h-8 flex items-center justify-center rounded-full ml-2 border border-gray-300 transition-all duration-300 group-hover:translate-x-1" 
        style={{ color: PRIMARY_COLOR }} // Use custom primary color
      >
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </div>
  );

  return (
    <section className="py-16 md:py-20 lg:py-28 bg-white dark:bg-gray-900">
      <div className="container">
        {/* Header Section */}
        <div className="mb-16 max-w-3xl">
          <h2 className="mb-4 text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl">
            Experience from head to toe
          </h2>
          <p className="text-base text-gray-600 md:text-lg">
            HCE supports a wide spectrum of clinical areas with single-use, reusable, and combination products.
          </p>
        </div>

        {/* Medical Domains Grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {domains.map((domain) => {
            return (
              <article
                key={domain.id}
                className={`group relative overflow-hidden rounded-xl bg-white transition-all duration-300 
                  hover:-translate-y-1 // Lift effect
                  hover:shadow-lg // Increase shadow on hover
                  transform`}
                style={{
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)', // Initial subtle shadow
                }}
              >
                <div className="flex flex-row h-full">
                  
                  {/* Content Container - Left Side */}
                  <div className="flex flex-col justify-center p-6 md:p-8 w-7/12">
                    
                    <p className="text-xs font-medium text-gray-400 mb-2">
                      {domain.date}
                    </p>

                    <h3 className="mb-1 text-xl font-bold leading-tight text-gray-800 transition-colors md:text-2xl">
                      {domain.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-gray-600 line-clamp-2">
                      {domain.description}
                    </p>

                    <ReadMoreButton />

                  </div>

                  {/* Image Container - Right Side */}
                  <div className="relative overflow-hidden w-5/12 h-full min-h-[160px]">
                    <Image
                      src={domain.image}
                      alt={domain.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105" // Image scale effect
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div 
          className={`mt-16 rounded-2xl p-10 text-center shadow-lg`}
          style={{ 
            backgroundColor: LIGHT_BLUE_BG, // Light blue background for CTA
            boxShadow: '0 6px 30px rgba(0, 0, 0, 0.08)',
          }}
        >
          <h3 className="mb-4 text-2xl font-bold text-gray-800">
            Ready to Transform Healthcare Together?
          </h3>
          <p className="mb-8 text-base text-gray-600">
            Let&apos;s discuss how HCE can support your medical device development needs
          </p>
          <button 
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white transition-all hover:opacity-90"
            style={{ backgroundColor: PRIMARY_COLOR }} // Use custom primary color
          >
            Get in Touch
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
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

export default MedicalDomains;