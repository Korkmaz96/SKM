import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ChevronDown } from "lucide-react";
import Logo from "@/components/Logo";
import { navigation } from "@/content/content";

const scrollToPageTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

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

  const createSamePageClickHandler = (href: string, callback?: () => void) => () => {
    if (location.pathname === href) {
      scrollToPageTop();
    }
    callback?.();
  };

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-md shadow-sm">
        <div className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between px-3 sm:h-16 sm:px-6">
          <Logo size="md" className="min-w-0 flex-1 md:flex-none" />
        
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
                  onClick={createSamePageClickHandler(item.href)}
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
                            onClick={createSamePageClickHandler(child.href, () => setIsDropdownOpen(false))}
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
                onClick={createSamePageClickHandler(item.href)}
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
            className="ml-2 h-9 w-9 flex-none px-0 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
          >
            {isMenuOpen ? "✕" : "☰"}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-x-0 top-14 z-40 border-b border-border/80 bg-background/80 backdrop-blur-md shadow-lg md:hidden sm:top-16">
          <div className="mx-auto w-full max-w-7xl px-3 py-5 sm:px-6 sm:py-6">
            <div className="space-y-4">
              {navigation.main.map((item) => (
                item.hasDropdown ? (
                  <div key={item.label}>
                    <div className="flex items-center justify-between gap-3">
                      <Link
                        to={item.href}
                        onClick={createSamePageClickHandler(item.href)}
                        className="text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300"
                      >
                        {item.label}
                      </Link>
                      <button
                        onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                        className="flex h-8 w-8 flex-none items-center justify-center text-muted-foreground hover:text-foreground transition-colors duration-300"
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
                      <div className="mt-3 ml-4 space-y-3 border-l border-border pl-4">
                        {item.children?.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            onClick={createSamePageClickHandler(child.href)}
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
                    onClick={createSamePageClickHandler(item.href)}
                    className="block text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                )
              ))}

              <div className="border-t border-border pt-4">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
