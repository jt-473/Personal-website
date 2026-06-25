"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { href: "/about", label: "About", external: false },
  { href: "/work", label: "Work", external: false },
  { href: "/resume.pdf", label: "Resume", external: true },
  { href: "https://www.linkedin.com/in/jovan-tomy-077b1a32a/", label: "Contact", external: true },
];

export default function Navbar() {
  const pathname = usePathname();

  // Homepage has its own inline navbar inside the hero
  if (pathname === "/") return null;

  return (
    <motion.nav
      className="fixed top-0 left-1/2 -translate-x-1/2 z-50 flex items-center bg-black rounded-b-2xl md:rounded-b-3xl px-5 py-2.5 md:px-8 md:py-3"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
    >
      <ul className="flex items-center gap-4 sm:gap-8 md:gap-12">
        <li>
          <Link
            href="/"
            className="hover:opacity-70 transition-opacity duration-200 cursor-pointer"
            style={{ fontFamily: "Hussar, sans-serif", fontSize: "18px", fontWeight: "bold", color: "#F94F02" }}
          >
            JT
          </Link>
        </li>

        {links.map(({ href, label, external }) => (
          <li key={href} className="relative">
            {external ? (
              <a
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="text-[11px] sm:text-xs md:text-sm cursor-pointer transition-colors duration-200"
                style={{ color: "rgba(225, 224, 204, 0.65)" }}
                onMouseEnter={e => ((e.target as HTMLElement).style.color = "#E1E0CC")}
                onMouseLeave={e => ((e.target as HTMLElement).style.color = "rgba(225, 224, 204, 0.65)")}
              >
                {label}
              </a>
            ) : (
              <>
                <Link
                  href={href}
                  className="text-[11px] sm:text-xs md:text-sm cursor-pointer transition-colors duration-200"
                  style={{ color: pathname === href ? "#E1E0CC" : "rgba(225, 224, 204, 0.65)" }}
                >
                  {label}
                </Link>
                {pathname === href && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-px"
                    style={{ backgroundColor: "#F94F02" }}
                    layoutId="nav-underline"
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}
              </>
            )}
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
