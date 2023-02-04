interface IContainer {
  narrow?: boolean;
  full?: boolean;
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}

export default function Container({
  narrow,
  full,
  className,
  as = "div",
  children,
}: IContainer) {
  const Container = as;
  return (
    <Container
      className={[
        'container',
        className,
        narrow ? '-narrow' : full ? '-full' : '']
        .join(' ')
      }
    >
      {children}
    </Container>
  );
}
