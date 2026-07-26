export default function Loading() {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-bg">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 rounded-full border-2 border-white/10 border-t-secondary animate-spin" />
        <span className="font-mono text-xs text-muted tracking-widest uppercase">
          Loading
        </span>
      </div>
    </div>
  );
}
