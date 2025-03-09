import {Fragment, FragmentProps} from "@/components";
import React, {memo} from "react";
import {Footer, Navbar} from "@/layouts/components";

const MainLayoutComponent: React.FC<FragmentProps> = ({children}) => {
  return (
    <Fragment>
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <Navbar />
        <div className="container mt-24 mx-auto px-12 py-4">
          {children}
        </div>
        <Footer />
      </main>
    </Fragment>
  );
};

MainLayoutComponent.displayName = "MainLayout";

export const MainLayout = memo(MainLayoutComponent);
