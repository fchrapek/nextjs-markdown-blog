import { useMDXComponent } from "next-contentlayer/hooks";
import React from "react";

const components = {
  a: ({ ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
    <a
      {...props}
    />
  ),

  ul: ({ ...props }) => (
    <ul {...props} />
  ),
  li: ({ ...props }) => <li {...props} />,
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={className}
      {...props}
    />
  ),
};

interface IMDXComponents {
  code: string;
}
export default function MDXComponents({ code }: IMDXComponents) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}
