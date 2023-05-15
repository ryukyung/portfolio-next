import Link from 'next/link';
import Image from 'next/image';
import DarkModeToggleButton from './dark-mode-toggle-button';

export default function Header() {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            href="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image src="/profile.png" width={30} height={30} alt="profile" />
            <span className="ml-3 text-xl">goari portfolio</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/" className="mr-5 hover:text-gray-900">
              Home
            </Link>
            <Link href="/projects" className="mr-5 hover:text-gray-900">
              Project
            </Link>
            <Link
              href="https://velog.io/@gaori"
              className="mr-5 hover:text-gray-900">
              Blog
            </Link>
          </nav>
          <DarkModeToggleButton />
          {/* 다크모드 버튼 */}
        </div>
      </header>
    </>
  );
}
