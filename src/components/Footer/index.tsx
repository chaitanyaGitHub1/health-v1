"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="border-t border-stroke bg-[#f3f4f6] py-10 dark:border-white/10 dark:bg-gray-dark">
        <div className="container">
          <h2 className="mb-8 text-2xl font-semibold text-black dark:text-white">
            Contact Healthcare Evolution, Inc.
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="mb-3 text-base font-semibold text-black dark:text-white">
                Email
              </h3>
              <p className="text-sm text-body-color dark:text-body-color-dark">
                info@healthcareevolution.com
              </p>
            </div>
            
            <div>
              <h3 className="mb-3 text-base font-semibold text-black dark:text-white">
                Schedule a Call
              </h3>
              <p className="text-sm text-body-color dark:text-body-color-dark">
                Book a strategic planning session to discuss your medical device development needs.
              </p>
            </div>
            
            <div>
              <h3 className="mb-3 text-base font-semibold text-black dark:text-white">
                Confidentiality
              </h3>
              <p className="text-sm leading-relaxed text-body-color dark:text-body-color-dark">
                We respect the sensitive nature of healthcare innovation and are prepared to sign NDAs before detailed technical discussions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stroke bg-white py-5 dark:border-white/10 dark:bg-gray-dark">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-body-color dark:text-body-color-dark">
              © Healthcare Evolution, Inc. {new Date().getFullYear()}. All rights reserved.
            </p>
            
            <div className="flex flex-wrap gap-6 text-sm">
              <Link 
                href="/" 
                className="text-body-color transition-colors hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-body-color transition-colors hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
              >
                About
              </Link>
              <Link 
                href="/capabilities" 
                className="text-body-color transition-colors hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
              >
                Capabilities
              </Link>
              <Link 
                href="/leadership" 
                className="text-body-color transition-colors hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
              >
                Leadership
              </Link>
              <Link 
                href="/contact" 
                className="text-body-color transition-colors hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;