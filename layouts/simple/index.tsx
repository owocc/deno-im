import type { LayoutProps } from "../__shared.ts";

export const SimpleLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      Simple
      {children}
    </div>
  );
};
