import React, { useMemo, ReactHTMLElement } from "react";
import { getMDXComponent } from "mdx-bundler/client";

export const MDX = ({ source }) => {
  const Component = useMemo(() => getMDXComponent(source), [source]);
  return <Component />;
};

export const Content = ({ source, heading }) => {
  return (
    <ContentContainer>
      <h1>{heading}</h1>
      <MDX source={source} />
    </ContentContainer>
  );
};

export const ContentContainer = ({ children }) => {
  return <div>{children}</div>;
};
