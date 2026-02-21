import Link from "next/link";

export function UnderGuidanceOf() {
  return (
    <p className="text-xs text-muted-foreground text-center">
      Under guidance of{" "}
      <Link
        href="https://mohammed-musab-khan.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline"
      >
        Mohammed Musab Khan
      </Link>
    </p>
  );
}