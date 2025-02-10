import { ShineBorder } from "@/registry/magicui/shine-border";

export default function ShineBorderDemo() {
  return (
    <ShineBorder
      className="relative size-48 rounded-lg"
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
    >
      <span className="pointer-events-none whitespace-pre-wrap bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Shine Border
      </span>
    </ShineBorder>
  );
}
