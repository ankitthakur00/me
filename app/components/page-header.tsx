interface Props {
  title: string;
}

export function PageHeader({ title }: Props) {
  return (
    <header>
      <h1 className="font-semibold tracking-tight text-4xl mb-6 text-foreground pb-6 border-b border-border">
        {title}
      </h1>
    </header>
  );
}
