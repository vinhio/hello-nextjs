import {BlankProps} from "@/components";
import React, {memo} from "react";
import {MainLayout} from "@/layouts";
import {AboutSection, HeroSection, ProjectSection} from "./_partials";

const HomeComponent: React.FC<BlankProps> = ({}) => {
  return (
      <MainLayout>
        <HeroSection />
        <AboutSection />
        <ProjectSection />
      </MainLayout>
  );
};

HomeComponent.displayName = "Home";

export default memo(HomeComponent);
