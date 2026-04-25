"use client";

import { useState, useEffect } from "react";
import Hamburger from "./Hamburger";
import Github from "@/shared/icons/Github";
import { Link } from "@cher1shrxd/loading";
import A from "next/link";
import NavItem from "./NavItem";
import { ROUTES } from "../constants/routes";
import { useScroll } from "../hooks/useScroll";
import { ThemeToggle } from "@/shared/themes/ThemeToggle";
import Reveal from "@/shared/ui/Reveal";
import Logo from "@/shared/icons/Logo";

const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const { isVisible, isTop } = useScroll();

  useEffect(() => {
    if (isMenuOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpened]);

  const shouldShow = isMenuOpened || isVisible;

  return (
    <div
      className={`w-full fixed top-0 z-50 ${isMenuOpened ? "backdrop-blur-lg" : "backdrop-blur-none"} transition-all duration-300`}>
      <header
        className={`w-full ${isMenuOpened ? "bg-primary/80" : "bg-background"} flex flex-col items-center justify-start ${shouldShow ? "translate-y-0" : "-translate-y-full"} transition-transform duration-700`}>
        <div
          className={`${isTop || isMenuOpened ? "border-0" : "border-b border-border"} w-full max-w-440 h-20 flex items-center justify-start px-2 gap-4`}>
          <Hamburger
            isMenuOpened={isMenuOpened}
            setIsMenuOpened={setIsMenuOpened}
          />
          <Link href="/">
            <Logo size={48} className="text-text cursor-pointer" />
          </Link>
          <div className="flex-1" />
          <A href="https://github.com/Jaewift" target="_blank">
            <Github size={24} className="text-text cursor-pointer" />
          </A>
          <ThemeToggle />
        </div>
        <div
          className={`w-full ${isMenuOpened ? "h-[calc(100svh-5rem)]" : "h-0"} transition-all`}>
          {isMenuOpened && (
            <nav className="w-full h-full max-w-440  px-2 mx-auto">
              <Reveal
                triggerOnce
                delay={0.3}
                className="flex flex-col items-start justify-start xl:gap-8 lg:gap-6 md:gap-4 gap-2">
                {ROUTES.map(({ name, href }) => (
                  <NavItem
                    key={href}
                    name={name}
                    href={href}
                    onClick={() => setIsMenuOpened(false)}
                  />
                ))}
              </Reveal>
            </nav>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
