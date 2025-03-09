import {BlankProps} from "@/components";
import React, {memo} from "react";
import {MainLayout} from "@/layouts";
import {HeroSection} from "@/app/_partials";

const HomeComponent: React.FC<BlankProps> = ({}) => {
  return (
      <MainLayout>
        <HeroSection />
      </MainLayout>
  );
};

HomeComponent.displayName = "Home";

export default memo(HomeComponent);
