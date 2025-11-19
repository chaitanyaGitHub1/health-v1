import Image from "next/image";

const WorkingWithSection = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-[400px] overflow-hidden rounded-2xl lg:h-[600px]">
            <Image
              src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&q=80"
              alt="Engineer working on medical device"
              fill
              className="object-cover"
            />
          </div>
          
          <div>
            <h2 className="mb-6 text-4xl font-bold text-black dark:text-white sm:text-5xl">
              Working with Healthcare Evolution
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-body-color dark:text-body-color-dark">
              From early-stage startups to global MedTech leaders, we help companies solve complex challenges and turn bold ideas into market-ready products.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-lg font-semibold text-primary hover:underline"
            >
              See how we can help you →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingWithSection;