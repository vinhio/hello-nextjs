import React, {memo} from 'react';

export interface FragmentProps {
  readonly children: React.ReactNode;
}

const FragmentComponent: React.FC<FragmentProps> = ({children}) => {
  return (
    <>
      {children}
    </>
  );
};

FragmentComponent.displayName = "Fragment";

export const Fragment = memo(FragmentComponent);
