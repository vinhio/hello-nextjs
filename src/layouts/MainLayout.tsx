import {Fragment, FragmentProps} from "@/components";
import React, {memo} from "react";
import {Footer} from "@/layouts/components";

const MainLayoutComponent: React.FC<FragmentProps> = ({children}) => {
  return (
    <Fragment>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          {children}
        </main>
        <Footer/>
      </div>
    </Fragment>
  );
};

MainLayoutComponent.displayName = "MainLayout";

export const MainLayout = memo(MainLayoutComponent);
