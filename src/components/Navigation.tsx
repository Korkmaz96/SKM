import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ChevronDown } from "lucide-react";
import Logo from "@/components/Logo";
import { navigation } from "@/content/content";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 150);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsMobileDropdownOpen(false);
  }, [location.pathname]);

  const isActiveRoute = (href: string) => {
    if (href === "/leistungen") {
      return location.pathname.startsWith("/leistungen");
    }
    return location.pathname === href;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Logo size="md" />
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          {navigation.main.map((item) => (
            item.hasDropdown ? (
              <div 
                key={item.label} 
                className="relative" 
                ref={dropdownRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={item.href}
                  className={`flex items-center gap-1 text-minimal transition-colors duration-300 ${
                    isActiveRoute(item.href) 
                      ? "text-foreground" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                  <ChevronDown 
                    className={`h-3 w-3 transition-transform duration-200 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`} 
                  />
                </Link>
                
                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 pt-3 w-72 z-50">
                    <div className="bg-background border border-border shadow-elegant">
                      <div className="py-2">
                        {item.children?.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            onClick={() => setIsDropdownOpen(false)}
                            className={`block px-4 py-3 text-sm transition-colors duration-200 ${
                              location.pathname === child.href
                                ? "bg-muted text-foreground"
                                : "text-muted-foreground hover:bg-muted hover:text-foreground"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                className={`text-minimal transition-colors duration-300 ${
                  isActiveRoute(item.href)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            )
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
        >
          {isMenuOpen ? "✕" : "☰"}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="container mx-auto px-6 py-6 space-y-4">
            {navigation.main.map((item) => (
              item.hasDropdown ? (
              <div key={item.label}>
                  <div className="flex items-center gap-2">
                    <Link
                      to={item.href}
                      className="text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300"
                    >
                      {item.label}
                    </Link>
                    <button
                      onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                      className="p-1 text-muted-foreground hover:text-foreground transition-colors duration-300"
                      aria-label="Untermenü öffnen"
                    >
                      <ChevronDown 
                        className={`h-3 w-3 transition-transform duration-200 ${
                          isMobileDropdownOpen ? "rotate-180" : ""
                        }`} 
                      />
                    </button>
                  </div>
                  
                  {isMobileDropdownOpen && (
                    <div className="mt-2 ml-4 space-y-2 border-l border-border pl-4">
                      {item.children?.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className="block text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {item.label}
                </Link>
              )
            ))}
            
            {/* Mobile Theme Toggle */}
            <div className="pt-4 border-t border-border">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
