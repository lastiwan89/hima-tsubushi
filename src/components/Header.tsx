import { useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleClick() {
    setIsOpen((prev) => !prev);
  }

  return (
    <header className="bg-bluish mb-14 flex flex-row place-content-between px-6 py-4 md:px-14 md:py-8">
      <div className="flex items-center justify-center">
        <Link className="text-navish font-sans font-bold" to="/">
          Toko Sumatra
        </Link>
      </div>
      <ul className="hidden gap-8 font-semibold md:flex">
        <Link className="hover:text-oranges text-navish" to="/">
          home
        </Link>
        <Link className="hover:text-oranges text-navish" to="/work">
          work
        </Link>
        <Link className="hover:text-oranges text-navish" to="/about">
          about
        </Link>
      </ul>
      <div className="relative md:hidden" onClick={handleClick}>
        {isOpen ? (
          <IoMdClose className="h-10 w-10 text-white" />
        ) : (
          <IoMdMenu className="h-10 w-10 text-white" />
        )}
        {isOpen && (
          <ul className="top-18 bg-bluish fixed right-0 flex h-full w-full flex-col items-center gap-8 p-12 font-semibold">
            <Link className="hover:text-oranges text-navish" to="/">
              home
            </Link>
            <Link className="hover:text-oranges text-navish" to="/work">
              work
            </Link>
            <Link className="hover:text-oranges text-navish" to="/about">
              about
            </Link>
          </ul>
        )}
      </div>
    </header>
  );
}
