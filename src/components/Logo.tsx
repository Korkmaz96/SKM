import { Link } from "react-router-dom";
import { company } from "@/content/content";

interface LogoProps {
  className?: string;
  showName?: boolean;
  size?: "sm" | "md" | "lg";
}

const Logo = ({ className = "", showName = true, size = "md" }: LogoProps) => {
  const sizeClasses = {
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  };

  return (
    <Link to="/" className={`flex items-center gap-3 ${className}`}>
      {/* Logo Slot - Replace with actual SVG/Image */}
      <div 
        className={`${sizeClasses[size]} bg-foreground flex items-center justify-center`}
        aria-label={`${company.name} Logo`}
      >
        {/* Placeholder: Replace with actual logo */}
        <span className="text-background font-bold text-xs">
          SKM
        </span>
      </div>
      
      {showName && (
        <span className="text-minimal text-foreground">
          {company.name.toUpperCase()}
        </span>
      )}
    </Link>
  );
};

export default Logo;
