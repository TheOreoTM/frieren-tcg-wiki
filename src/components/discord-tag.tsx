import React from "react";

export function DiscordTag({
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={`bg-slate-300/60 px-2 py-0.5 rounded-md text-sm font-semibold font-mono ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
