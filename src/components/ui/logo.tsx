
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
        <span className="absolute font-semibold">b</span>
      </div>
      {showText && (
        <span className="text-xl font-semibold tracking-tight">
          bcommune
        </span>
      )}
    </div>
  );
}
