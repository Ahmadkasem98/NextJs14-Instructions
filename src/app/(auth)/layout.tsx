// layout and template

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

type Props = {};

const navlink = [
  { name: "login", href: "/login" },
  { name: "register", href: "/register" },
  { name: "forgot-password", href: "/forgot-password" },
];

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [input, setInput] = useState("");
  return (
    <div>
      <div>
        <input onChange={(e) => setInput(e.target.value)} /> {/* template */}
      </div>
      {navlink.map((item) => {
        const isActive = pathname.startsWith(item.href);
        return (
          <Link
            href={item.href}
            key={item.name}
            className={isActive ? "font-bold mx-3" : "text-blue-500 mx-3"}
          >
            {item.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
};

export default AuthLayout;
