import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ContactCTAProps {
  headline?: string;
  description?: string;
}

const ContactCTA = ({ 
  headline = "Interesse an einer Zusammenarbeit?",
  description = "Kontaktieren Sie uns für ein unverbindliches Gespräch."
}: ContactCTAProps) => {
  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-light text-architectural mb-6">
            {headline}
          </h2>
          <p className="text-lg text-background/70 mb-10">
            {description}
          </p>
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-3 bg-background text-foreground px-8 py-4 hover:bg-background/90 transition-colors duration-300"
          >
            <span>Kontakt aufnehmen</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
