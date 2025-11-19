import Image from "next/image";

const HeroBanner = () => {
  return (
    <section className="relative h-[500px] overflow-hidden bg-gradient-to-br from-primary/90 to-primary/60 md:h-[600px] lg:h-[700px] mt-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1600&q=80"
          alt="Medical professional in protective equipment"
          fill
          className="object-cover opacity-40"
          priority
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary/80 to-transparent" />
      
      {/* Content */}
      <div className="container relative z-10 flex h-full items-center">
        <div className="max-w-4xl">
          <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Medical device design & development
          </h1>
          <p className="text-lg leading-relaxed text-white/90 sm:text-xl md:text-2xl">
            Empowering MedTech innovation to create breakthrough products that improve health and save lives
          </p>
        </div>
      </div>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent dark:from-gray-dark" />
    </section>
  );
};

export default HeroBanner;