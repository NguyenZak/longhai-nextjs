"use client";

import Link from "next/link";

const links = [
  { href: "/events", label: "Sự kiện" },
  { href: "/about", label: "Về chúng tôi" },
  { href: "/contact", label: "Liên hệ" },
];

export function NavMenu({
  onClick,
  className = "",
}: {
  onClick?: () => void;
  className?: string;
}) {
  return (
    <nav
      className={`flex gap-6 pt-3 font-medium items-center text-2xl sm:text-lg ${className}`}
    >
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={onClick}
          className="group relative text-[#005366] dark:text-white hover:text-[#005366] dark:hover:text-white transition"
        >
          <span
            className="after:content-[''] after:absolute after:left-1/2 after:bottom-[-4px]
              after:w-0 after:h-[2px] after:bg-[#005366] dark:after:bg-white
              after:transition-all after:duration-300 group-hover:after:w-full 
              group-hover:after:bg-[#005366] dark:group-hover:after:bg-white 
              after:transform after:-translate-x-1/2"
          >
            {link.label}
          </span>
        </Link>
      ))}
    </nav>
  );
}
