export default function Tag({ text }: { text: string }) {
  return (
    <span className="font-mono text-xs border border-border px-3 py-1 rounded-full text-text-secondary bg-surface/30">
      {text}
    </span>
  );
}
