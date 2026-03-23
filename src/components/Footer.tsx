import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import { Mail, MapPin, Phone } from "lucide-react";
import { company, navigation } from "@/content/content";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            {/* Company Info (LEFT) – im SoftwareAtelier-Style */}
            <div className="md:col-span-1">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-lg bg-transparent border border-transparent flex items-center justify-center">
                  <div className="w-9 h-9 bg-background flex items-center justify-center">
                    <span className="text-foreground font-bold text-xs">SKM</span>
                  </div>
                </div>

                <span className="text-lg font-semibold text-background">
                  {company.name}
                </span>
              </Link>

              <p className="text-sm text-background/70 mb-4 max-w-xs">
                {company.tagline}
              </p>

              <div className="flex flex-col gap-2 text-sm text-background/70">
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-2 hover:text-background transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  {company.email}
                </a>

                <a
                  href={`tel:${company.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-2 hover:text-background transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  {company.phone}
                </a>

                <a
                  /* href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    `${company.address.street} ${company.address.zip} ${company.address.city}`
                  )}`} */
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-background transition-colors"
                >
                  <MapPin className="w-4 h-4 shrink-0" />
                  {company.address.city} / Deutschland
                </a>
              </div>
            </div>

            {/* Leistungen Links */}
            <div>
              <h4 className="text-minimal text-background mb-6">Leistungen</h4>
              <ul className="space-y-3">
                {navigation.footer.leistungen.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-background/70 hover:text-background transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Unternehmen Links */}
            <div>
              <h4 className="text-minimal text-background mb-6">Unternehmen</h4>
              <ul className="space-y-3">
                {navigation.footer.unternehmen.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-background/70 hover:text-background transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Empty column for spacing or future use */}
            <div className="hidden md:block" />
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/50">
              © {new Date().getFullYear()} {company.name}. Alle Rechte vorbehalten.
            </p>
            
            <div className="flex gap-6">
              {navigation.footer.legal.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm text-background/50 hover:text-background transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
