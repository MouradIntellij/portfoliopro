import Image from "next/image";

export default function Home() {
  return (
   <div className="min-h-screen p-8 pb-20 grid grid-rows-[20px_1fr_20px] gap-16 justify-items-center items-center bg-blue-300 font-sans sm:p-20">
      <main className="flex flex-col row-start-2 gap-[32px] items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="font-mono text-sm/6 text-center list-inside list-decimal sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="px-1 py-0.5 bg-red-200 rounded font-mono font-semibold dark:bg-white/[.06]">
              app/page.js
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex flex-col gap-4 items-center sm:flex-row">
          <a
  className="h-10 px-4 flex gap-2 justify-center items-center bg-gray-900 border border-solid border-transparent rounded-full font-medium text-amber-600 text-sm transition-colors hover:bg-gray-800 sm:text-base sm:h-12 sm:px-5 sm:w-auto dark:bg-gray-100 dark:text-white-900"
  href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
  target="_blank"
  rel="noopener noreferrer"
>
  <Image
    className="dark:invert"
    src="/vercel.svg"
    alt="Vercel logomark"
    width={20}
    height={20}
  />
  Deploy now
</a>
             
          <a
            className="w-full h-10 px-4 flex justify-center items-center border border-solid border-black/[.08] rounded-full font-medium text-sm transition-colors hover:bg-[#f2f2f2] hover:border-transparent sm:text-base sm:h-12 sm:px-5 sm:w-auto md:w-[158px] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="flex flex-wrap row-start-3 gap-[24px] justify-center items-center">
        <a
          className="flex gap-2 items-center hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex gap-2 items-center hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex gap-2 items-center hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}