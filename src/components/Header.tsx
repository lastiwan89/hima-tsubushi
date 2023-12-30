import { useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleClick() {
    setIsOpen((prev) => !prev);
  }

  return (
    <header className="mb-14 flex flex-row place-content-between bg-slate-600 px-6 py-4 md:px-14 md:py-8">
      <div className="flex items-center justify-center">
        <Link className="font-sans font-bold dark:text-slate-200" to="/">
          chill.rains
        </Link>
      </div>
      <ul className="hidden gap-8 font-semibold md:flex">
        <Link className="hover:text-orange-500 dark:text-white" to="/">
          home
        </Link>
        <Link className="hover:text-orange-500 dark:text-white" to="/work">
          work
        </Link>
        <Link className="hover:text-orange-500 dark:text-white" to="/about">
          about
        </Link>
      </ul>
      <div className="md:hidden" onClick={handleClick}>
        {isOpen ? (
          <IoMdClose className="h-10 w-10 text-white" />
        ) : (
          <IoMdMenu className="h-10 w-10 text-white" />
        )}
      </div>
    </header>
  );
}
