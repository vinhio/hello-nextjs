import {Fragment} from "@/components";
import React, {memo} from "react";
import {NavLink, NavLinkProps} from "./NavLink";

export interface MenuOverlayProps {
  links: NavLinkProps[];
}

const MenuOverlayComponent: React.FC<MenuOverlayProps> = ({links}) => {
  return (
    <Fragment>
      <ul className="flex flex-col py-4 items-center">
        {links.map((link, index) => (
          <li key={index}>
            <NavLink href={link.href} title={link.title} />
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

MenuOverlayComponent.displayName = "MenuOverlay";

export const MenuOverlay = memo(MenuOverlayComponent);
