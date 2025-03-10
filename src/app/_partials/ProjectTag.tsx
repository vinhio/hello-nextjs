/**
 * @author  Vinh <vohuynhvinh@gmail.com>
 * @time    10/03/2025 15:09:34
 * @package src/app/_partials/ProjectTab.tsx
 */

import React, {memo} from "react";

interface ProjectTag {
  name: string;
  onClick: (name: string) => void;
  isSelected: boolean;
}

const ProjectTabComponent: React.FC<ProjectTag> = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-primary-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

ProjectTabComponent.displayName = "ProjectTab";

export const ProjectTag = memo(ProjectTabComponent);
