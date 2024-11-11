export function Tag({ data }: { data: string }) {
  return (
    <div className="bg-foreground rounded-md px-2 py-1 shadow-md text-xs text-white font-medium">
      <p>{data}</p>
    </div>
  );
}
