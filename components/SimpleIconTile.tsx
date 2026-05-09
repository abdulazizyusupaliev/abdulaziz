import type { SimpleIcon } from "simple-icons";

type SimpleIconTileProps = {
  icon: SimpleIcon;
  name: string;
};

export function SimpleIconTile({ icon, name }: SimpleIconTileProps) {
  return (
    <div
      className="group flex flex-col items-center gap-3 rounded-[1.35rem] border border-white/10 bg-white/[0.03] px-4 py-5 text-center transition duration-300 hover:-translate-y-1 hover:border-[#d4a017]/45 hover:bg-white/[0.06]"
      title={name}
      aria-label={name}
    >
      <div
        className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-black/35 shadow-[0_18px_40px_rgba(0,0,0,0.28)] transition duration-300 group-hover:border-[#d4a017]/30"
        style={{ color: `#${icon.hex}` }}
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-10 w-10 fill-current transition duration-300 group-hover:scale-110"
        >
          <path d={icon.path} />
        </svg>
      </div>
      <span className="block text-sm font-medium text-white/90">{name}</span>
    </div>
  );
}
