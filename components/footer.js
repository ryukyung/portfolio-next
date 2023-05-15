import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer className="body-font">
        <div className="">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <Link
              href="/"
              className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <span className="ml-3 text-xl">gaori's Portfolio</span>
            </Link>
            <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
              @ 2023 gaori
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"></span>
          </div>
        </div>
      </footer>
    </>
  );
}
