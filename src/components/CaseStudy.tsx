import Image from "next/image";


const CaseStudy = () => {
  return (
    <>

      {/* Case Study Section 1 */}
      <section className="container py-16 md:py-24">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="relative h-[400px] overflow-hidden rounded-lg md:h-[500px]">
            <Image
              src="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1200&q=80"
              alt="Medical researcher in laboratory"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <span className="inline-block rounded-full border border-gray-300 px-4 py-2 text-sm font-medium">
              CASE STUDY
            </span>
            <p className="mt-4 text-sm font-medium text-gray-600">
              PUBLISHED ON: JANUARY 4, 2023
            </p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl lg:text-5xl">
              Axolotl BrainPrint Microsphere Generator
            </h2>
            <a
              href="#"
              className="mt-6 inline-flex items-center text-lg font-medium text-primary hover:underline"
            >
              See case-study Details →
            </a>
          </div>
        </div>
      </section>

      {/* Case Study Section 2 */}
      <section className="bg-gray-50 py-16 dark:bg-gray-dark/50 md:py-24">
        <div className="container">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="order-2 lg:order-1">
              <span className="inline-block rounded-full border border-gray-300 px-4 py-2 text-sm font-medium">
                CASE STUDY
              </span>
              <p className="mt-4 text-sm font-medium text-gray-600">
                PUBLISHED ON: JANUARY 6, 2011
              </p>
              <h2 className="mt-4 text-3xl font-bold md:text-4xl lg:text-5xl">
                Aurora DNA Sample Preparation Device
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Aurora DNA Sample Preparation Device uses SCODA™ electrophoretic DNA concentration technology. StarFish Medical Case Study.
              </p>
              <a
                href="#"
                className="mt-6 inline-flex items-center text-lg font-medium text-primary hover:underline"
              >
                See case-study Details →
              </a>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg md:h-[500px] order-1 lg:order-2">
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80"
                alt="DNA Sample Preparation Device"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudy;