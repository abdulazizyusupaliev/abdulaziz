import type { SimpleIcon } from "simple-icons";

type SimpleIconTileProps = {
  icon: SimpleIcon;
  name: string;
};

export function SimpleIconTile({ icon, name }: SimpleIconTileProps) {
  return (
    <div
      className="group rounded-2xl border border-white/10 bg-white/5 p-4 transition duration-300 hover:-translate-y-1 hover:border-[color:var(--color-accent)] hover:bg-white/8"
      title={name}
      aria-label={name}
    >
      <div className="flex items-center justify-between gap-3">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-black/30"
          style={{ color: `#${icon.hex}` }}
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-6 w-6 fill-current transition duration-300 group-hover:scale-110"
          >
            <path d={icon.path} />
          </svg>
        </div>
        <span className="text-sm text-white/80">{name}</span>
      </div>
    </div>
  );
}
