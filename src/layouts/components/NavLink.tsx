import {Fragment} from "@/components";
import React, {memo} from "react";
import Link from "next/link";

export interface NavLinkProps {
  href: string;
  title: string;
}

const NavLinkComponent: React.FC<NavLinkProps> = ({href, title}) => {
  return (
    <Fragment>
      <Link
        href={href}
        className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
      >
        {title}
      </Link>
    </Fragment>
  );
};

NavLinkComponent.displayName = "NavLink";

export const NavLink = memo(NavLinkComponent);
