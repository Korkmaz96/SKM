import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 flex items-center justify-center pt-20">
        <div className="text-center px-6">
          <h1 className="text-6xl md:text-8xl font-light text-architectural mb-6">
            404
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Die angeforderte Seite wurde nicht gefunden.
          </p>
          <Link
            to="/"
            className="inline-flex bg-foreground text-background px-8 py-4 hover:bg-foreground/90 transition-colors duration-300"
          >
            Zur Startseite
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
