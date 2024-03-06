import Link from "next/link";

export function Header() {
  return (
    <header className="flex flex-col items-center justify-between py-8">
      <div className="z-10 max-w-screen-xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full justify-between bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:bg-none">
          <Link
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 font-bold text-xl"
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
