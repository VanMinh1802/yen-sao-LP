import { GoogleMap } from "./GoogleMap";
import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <section id="contact" className="relative min-h-[640px] overflow-hidden">
      {/* Map Background — full width */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <GoogleMap />
      </div>

      {/* Mobile Map — relative position */}
      <div className="md:hidden relative w-full h-[350px]">
        <GoogleMap />
      </div>

      {/* Floating Form Card */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 flex justify-start items-center md:min-h-[640px] -mt-[60px] md:mt-0 pb-12 md:pb-0">
        <ContactForm />
      </div>
    </section>
  );
}
