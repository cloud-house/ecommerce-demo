import Link from "next/link";

export function Header() {
  return (
    <header className="container mx-auto px-4 py-8 flex flex-col items-center justify-between">
      <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="flex w-full items-center justify-between">
          <Link
            className="flex place-items-center gap-2 font-bold text-xl"
            href="/"
          >
            wdresie.pl
          </Link>
          <nav>
            <Link href="/dashboard">Dashboard</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
