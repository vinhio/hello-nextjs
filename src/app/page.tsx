import {BlankProps} from "@/components";
import React, {memo} from "react";
import {MainLayout} from "@/layouts";
import {AboutSection, HeroSection} from "./_partials";

const HomeComponent: React.FC<BlankProps> = ({}) => {
  return (
      <MainLayout>
        <HeroSection />
        <AboutSection />
      </MainLayout>
  );
};

HomeComponent.displayName = "Home";

export default memo(HomeComponent);
