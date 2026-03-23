import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { kontakt, company } from "@/content/content";
import { useToast } from "@/hooks/use-toast";

const Kontakt = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    dsgvoAccepted: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Bitte geben Sie Ihren Namen ein.";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Bitte geben Sie Ihre E-Mail-Adresse ein.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Bitte geben Sie eine Nachricht ein.";
    }
    
    if (!formData.dsgvoAccepted) {
      newErrors.dsgvo = "Bitte bestätigen Sie die Datenschutzerklärung.";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // [FEHLT] – API-Endpoint für Formular-Übermittlung
    // Mock submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Nachricht gesendet",
      description: kontakt.form.successMessage,
    });
    
    setFormData({
      name: "",
      email: "",
      message: "",
      dsgvoAccepted: false,
    });
    setIsSubmitting(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-20">
              {/* Contact Info */}
              <div>
                <h1 className="text-minimal text-muted-foreground mb-4">KONTAKT</h1>
                <h2 className="text-4xl md:text-6xl font-light text-architectural mb-8">
                  {kontakt.subheadline}
                </h2>
                <p className="text-lg text-muted-foreground mb-12">
                  {kontakt.description}
                </p>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-minimal text-muted-foreground mb-2">E-MAIL</h3>
                    <a 
                      href={`mailto:${company.email}`} 
                      className="text-xl hover:text-muted-foreground transition-colors duration-300"
                    >
                      {company.email}
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="text-minimal text-muted-foreground mb-2">TELEFON</h3>
                    <a 
                      href={`tel:${company.phone}`} 
                      className="text-xl hover:text-muted-foreground transition-colors duration-300"
                    >
                      {company.phone}
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="text-minimal text-muted-foreground mb-2">ADRESSE</h3>
                    <address className="text-xl not-italic">
                      {company.address.street}
                      <br />
                      {company.address.zip} {company.address.city}
                    </address>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-minimal text-muted-foreground">
                      {kontakt.form.nameLabel} *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={kontakt.form.namePlaceholder}
                      className="mt-2 border-border focus:border-foreground focus:ring-foreground"
                      aria-describedby={errors.name ? "name-error" : undefined}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1 text-sm text-destructive">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-minimal text-muted-foreground">
                      {kontakt.form.emailLabel} *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={kontakt.form.emailPlaceholder}
                      className="mt-2 border-border focus:border-foreground focus:ring-foreground"
                      aria-describedby={errors.email ? "email-error" : undefined}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-sm text-destructive">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-minimal text-muted-foreground">
                      {kontakt.form.messageLabel} *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder={kontakt.form.messagePlaceholder}
                      rows={6}
                      className="mt-2 border-border focus:border-foreground focus:ring-foreground resize-none"
                      aria-describedby={errors.message ? "message-error" : undefined}
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1 text-sm text-destructive">
                        {errors.message}
                      </p>
                    )}
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="dsgvo"
                      checked={formData.dsgvoAccepted}
                      onCheckedChange={(checked) => {
                        setFormData(prev => ({ ...prev, dsgvoAccepted: checked as boolean }));
                        if (errors.dsgvo) {
                          setErrors(prev => ({ ...prev, dsgvo: "" }));
                        }
                      }}
                      className="mt-1"
                      aria-describedby={errors.dsgvo ? "dsgvo-error" : undefined}
                    />
                    <div>
                      <Label htmlFor="dsgvo" className="text-sm text-muted-foreground cursor-pointer">
                        {kontakt.form.dsgvoText}
                      </Label>
                      {errors.dsgvo && (
                        <p id="dsgvo-error" className="mt-1 text-sm text-destructive">
                          {errors.dsgvo}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  {/* [FEHLT] – Spam-Schutz (z.B. reCAPTCHA oder Honeypot) */}
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-foreground text-background hover:bg-foreground/90 py-6"
                  >
                    {isSubmitting ? "Wird gesendet..." : kontakt.form.submitLabel}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Kontakt;
