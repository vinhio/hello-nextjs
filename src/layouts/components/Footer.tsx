import {BlankProps, Fragment} from "@/components";
import React, {memo} from "react";

const FooterComponent: React.FC<BlankProps> = ({}) => {
  return (
    <Fragment>
      <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
        <div className="container p-10 flex justify-between mx-auto">
          <span>LOGO</span>
          <p className="text-slate-600">All rights reserved.</p>
        </div>
      </footer>
    </Fragment>
  );
};

FooterComponent.displayName = "Footer";

export const Footer = memo(FooterComponent);
