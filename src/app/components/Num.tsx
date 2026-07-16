/**
 * Renders a sourced/verified number in IBM Plex Mono with a dimension-line
 * bracket beneath it — the signature visual treatment for hard numbers on
 * this site (cost ranges, dates, permit timelines).
 *
 * Use for standalone numbers (table cells, stat callouts). For numbers
 * embedded inline in prose, use <span className="font-mono"> instead.
 */
export default function Num({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block">
      <span className="block font-mono font-medium leading-tight">{children}</span>
      <span className="flex items-end mt-[2px]" aria-hidden="true">
        <span className="w-px h-[5px] bg-concrete flex-shrink-0" />
        <span className="flex-1 h-px bg-concrete self-end" />
        <span className="w-px h-[5px] bg-concrete flex-shrink-0" />
        <span className="ml-1 text-[8px] text-sage leading-none self-end mb-[-1px]">✓</span>
      </span>
    </span>
  );
}
