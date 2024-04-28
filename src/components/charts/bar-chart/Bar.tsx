interface BarProps {
  positive: number;
  negative: number;
}

export function Bar({ positive, negative }: Readonly<BarProps>) {
  return (
    <div className="relative h-0">
      <div
        style={{ height: positive }}
        className="absolute w-8 left-0 bottom-0 bg-primary rounded-tl-full rounded-tr-full -translate-x-1/2 peer/positive"
      />
      <div
        style={{ height: negative }}
        className="absolute w-8 left-0 top-0 bg-tertiary rounded-bl-full rounded-br-full 
        -translate-x-1/2 peer/negative"
      />
      <div className="absolute top-0 right-0 invisible bg-secondary-surface group-hover:visible shadow text-xs px-2 py-1 rounded-sm transition-all duration-200 peer-hover/positive:visible">
        {positive.toFixed(1)}
      </div>
      <div className="absolute top-0 right-0 invisible bg-secondary-surface group-hover:visible shadow text-xs px-2 py-1 rounded-sm transition-all duration-200 peer-hover/negative:visible">
        {negative.toFixed(1)}
      </div>
    </div>
  );
}
