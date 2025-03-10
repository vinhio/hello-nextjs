/**
 * @author  Vinh <vohuynhvinh@gmail.com>
 * @time    09/03/2025 16:36:09
 * @package src/app/_partials/AboutSection.tsx
 */
"use client";
import {BlankProps, Fragment} from "@/components";
import React, {memo, useState} from "react";
import Image from "next/image";

interface TabProps {
  title: string;
  id: string;
  content: React.ReactNode;
}

const tabData: TabProps[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

interface TabButtonProps {
  tab: TabProps;
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}

const TabButton: React.FC<TabButtonProps> = ({tab, selectedTab, setSelectedTab}) => {
  return (
    <Fragment>
      <button key={tab.id} onClick={() => setSelectedTab(tab.id)}><p
        className="mr-3 font-semibold hover:text-white text-[#ADB7BE]">{tab.title}</p>
        <div className={"h-1 bg-primary mt-2 mr-3 duration-300 " + (selectedTab === tab.id ? 'on-width' : 'w-0')}></div>
      </button>
    </Fragment>
  );
}

const AboutSectionComponent: React.FC<BlankProps> = ({}) => {
  const [selectTab, setSelectTab] = useState<string>("skills");

  return (
    <Fragment>
      <section className="text-white" id="about">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          <Image src="/images/about-image.png" width={500} height={500} alt="" />
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-base lg:text-lg">
              I am a full stack web developer with a passion for creating
              interactive and responsive web applications. I have experience
              working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
              Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
              looking to expand my knowledge and skill set. I am a team player and
              I am excited to work with others to create amazing applications.
            </p>
            <div className="flex flex-row justify-start mt-8">
              { tabData.map((tab) => (
                <TabButton key={tab.id} tab={tab} selectedTab={selectTab} setSelectedTab={setSelectTab}/>
              ))}
            </div>
            <div className="mt-8">
              { tabData.find((t) => t.id === selectTab)!.content }
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

AboutSectionComponent.displayName = "AboutSection";

export const AboutSection = memo(AboutSectionComponent);
