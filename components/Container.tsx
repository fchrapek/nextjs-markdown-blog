// import { clsxm } from "utils";

interface IContainer {
  fullSize?: boolean;
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}

export default function Container({
  fullSize,
  className,
  as = "div",
  children,
}: IContainer) {
  const Container = as;
  return (
    <Container

    >
      {children}
    </Container>
  );
}
