import { homepage } from "@/content/content";

const Arbeitsweise = () => {
  return (
    <section id="arbeitsweise" className="py-32 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-start">
            <div>
              <h2 className="text-minimal text-muted-foreground mb-4">
                {homepage.arbeitsweise.headline.toUpperCase()}
              </h2>
              <h3 className="text-4xl md:text-6xl font-light text-architectural mb-12">
                {homepage.arbeitsweise.subheadline}
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {homepage.arbeitsweise.description}
              </p>
            </div>
            
            <div className="space-y-8">
              <h4 className="text-minimal text-muted-foreground mb-6">PRINZIPIEN</h4>
              <div className="space-y-6">
                {homepage.arbeitsweise.principles.map((principle, index) => (
                  <div key={index} className="border-l-2 border-foreground pl-6">
                    <h5 className="text-lg font-medium mb-2">{principle.title}</h5>
                    <p className="text-muted-foreground">{principle.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Arbeitsweise;
