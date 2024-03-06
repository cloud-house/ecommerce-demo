import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section>
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Najlepsze dresy w sieci
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Odkryj najnowsze trendy w modzie ulicznej! Nasze dresy to idealne
            połączenie stylu i komfortu. Znajdź swój ulubiony zestaw już teraz!
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-black hover:bg-gray-700"
          >
            Zobacz produkty
          </Link>
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Zobacz dashboard
          </Link>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image src="/hero.png" width={600} height={550} alt="Hero image" />
        </div>
      </div>
    </section>
  );
}
