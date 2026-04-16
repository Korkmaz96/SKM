import { Link, useLocation } from "react-router-dom";
import { company } from "@/content/content";
import { cn } from "@/lib/utils";
import logoAsset from "@/assets/Logo2.svg";

interface LogoProps {
  className?: string;
  showName?: boolean;
  size?: "sm" | "md" | "lg";
  boxed?: boolean;
  asLink?: boolean;
  uppercaseName?: boolean;
  nameClassName?: string;
  imageClassName?: string;
}

const Logo = ({
  className = "",
  showName = true,
  size = "md",
  boxed = false,
  asLink = true,
  uppercaseName = true,
  nameClassName,
  imageClassName,
}: LogoProps) => {
  const location = useLocation();
  const sizeClasses = {
    sm: "h-8",
    md: "h-10",
    lg: "h-16 sm:h-20",
  };

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const content = (
    <>
      <div
        className={cn(
          "shrink-0",
          sizeClasses[size],
          boxed && "box-border rounded-lg bg-background p-1.5 sm:p-2",
        )}
      >
        <img
          src={logoAsset}
          alt={showName ? "" : `${company.name} Logo`}
          className={cn("h-full w-auto object-contain", imageClassName)}
        />
      </div>

      {showName && (
        <span
          className={cn(
            "min-w-0 truncate text-[11px] leading-none text-foreground max-[359px]:hidden sm:text-xs md:text-sm",
            nameClassName,
          )}
        >
          {uppercaseName ? company.name.toUpperCase() : company.name}
        </span>
      )}
    </>
  );

  if (!asLink) {
    return (
      <div className={cn("flex min-w-0 items-center gap-2 sm:gap-3", className)}>
        {content}
      </div>
    );
  }

  return (
    <Link
      to="/"
      onClick={handleHomeClick}
      className={cn("flex min-w-0 items-center gap-2 sm:gap-3", className)}
    >
      {content}
    </Link>
  );
};

export default Logo;
