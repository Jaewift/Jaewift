"use client";

import { Link } from "@cher1shrxd/loading";

interface Props {
  name: string;
  href: string;
  onClick: () => void;
}

const NavItem = ({ name, href, onClick }: Props) => {
  return (
    <Link href={href} className="hover:[&>div]:w-full" onClick={onClick}>
      <p className="mb-3 mr-2 xl:text-6xl lg:text-4xl md:text-3xl text-2xl font-playpen">{name}</p>
      <div className="w-0 h-0.5 bg-text transition-all duration-300 ease-in-out rounded-full" />
    </Link>
  )
}

export default NavItem