import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";

export interface ButtonPros {
  children: ReactNode;
  asChild?: boolean;
}
export function Button({ children, asChild }: ButtonPros) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={clsx(
        "py-4 px-3 bg-cyan-500 rounded text-black font-semibold text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white",
        {}
      )}
    >
      {children}
    </Comp>
  );
}
