import SectionTitle from "../Common/SectionTitle";

interface SingleServiceProps {
  title: string;
  paragraph: string;
}

const SingleService = ({ title, paragraph }: SingleServiceProps) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{paragraph}</p>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="...">
      <div className="container">
        <SectionTitle
          title="Our Services"
          paragraph="Discover our comprehensive range of digital solutions tailored to meet your business needs"
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          <SingleService
            title="Website Development"
            paragraph="Create stunning, responsive websites that engage your audience and drive results. We specialize in modern web technologies and user-centric design."
            
          />
          <SingleService
            title="Mobile App Development"
            paragraph="Transform your ideas into powerful mobile applications for iOS and Android platforms, delivering seamless user experiences and robust functionality."
            
          />
          <SingleService
            title="Graphic Design"
            paragraph="Stand out with professional graphic design services including branding, marketing materials, and visual content that captures your brand essence."
            
          />
          <SingleService
            title="CAD Development"
            paragraph="Expert CAD solutions for engineering and design needs, bringing precision and innovation to your technical projects."
            
          />
          <SingleService
            title="Cloud Services"
            paragraph="Leverage the power of cloud computing with our comprehensive cloud solutions, including deployment, management, and optimization services."
            
          />
          <SingleService
            title="Technical Support"
            paragraph="24/7 technical support and maintenance services to ensure your digital solutions run smoothly and efficiently."
            
          />
        </div>
      </div>
    </section>
  );
};

export default Services;