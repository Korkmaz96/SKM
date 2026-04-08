import { Link, useLocation } from "react-router-dom";
import { company } from "@/content/content";

interface LogoProps {
  className?: string;
  showName?: boolean;
  size?: "sm" | "md" | "lg";
}

const Logo = ({ className = "", showName = true, size = "md" }: LogoProps) => {
  const location = useLocation();
  const sizeClasses = {
    sm: "h-5 w-5 sm:h-6 sm:w-6",
    md: "h-7 w-7 sm:h-8 sm:w-8",
    lg: "h-10 w-10 sm:h-12 sm:w-12",
  };

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Link
      to="/"
      onClick={handleHomeClick}
      className={`flex min-w-0 items-center gap-2 sm:gap-3 ${className}`}
    >
      {/* Logo Slot - Replace with actual SVG/Image */}
      <div 
        className={`${sizeClasses[size]} shrink-0 bg-foreground flex items-center justify-center`}
        aria-label={`${company.name} Logo`}
      >
        {/* Placeholder: Replace with actual logo */}
        <span className="text-[10px] font-bold text-background sm:text-xs">
          SKM
        </span>
      </div>
      
      {showName && (
        <span className="min-w-0 truncate text-[11px] leading-none text-foreground max-[359px]:hidden sm:text-xs md:text-sm">
          {company.name.toUpperCase()}
        </span>
      )}
    </Link>
  );
};

export default Logo;
