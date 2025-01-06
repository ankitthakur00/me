interface Props {
  title: string;
}

export function PageHeader({ title }: Props) {
  return (
    <header>
      <h1 className="font-semibold tracking-tight text-4xl mb-6 text-slate-100 pb-6 border-b border-slate-700">
        {title}
      </h1>
    </header>
  );
}
