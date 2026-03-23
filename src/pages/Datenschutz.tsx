import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { legal } from "@/content/content";

const Datenschutz = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-light text-architectural mb-12">
              {legal.datenschutz.headline}
            </h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="whitespace-pre-wrap">{legal.datenschutz.content}</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Datenschutz;
