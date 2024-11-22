import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { clsx, ClassValue } from "clsx";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type Props = {
  children: ReactNode;
  className?: string;
};

export function H1({ className, children }: Props) {
  return <h1 className={cn("text-5xl font-bold", className)}>{children}</h1>;
}
