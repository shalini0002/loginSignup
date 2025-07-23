import { Children } from "react";

export default function ({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="border-2 bg-purple-400 text-center">
        50% off for the 3 days
      </div>
      {children}
    </div>
  );
}
