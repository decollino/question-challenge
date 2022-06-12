import React from "react";

export default function Header({ children }) {
  return (
    <header>
      <div>
        <h1 className="text-center">{children}</h1>
      </div>
    </header>
  );
}
