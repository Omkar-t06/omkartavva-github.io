import { useState } from "react";
import { MdOutlineKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

function NavItem({ ItemName, ItemLink, dropdownItems}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <li className="relative">
      <a
        href={ItemLink || "#"}
        onClick={() => dropdownItems && setIsDropdownOpen(!isDropdownOpen)}
        className="flex md:w-auto w-full p-2 text-xl font-medium items-center transition-colors duration-300 hover:text-orange-500 dark:hover:text-orange-400"
        aria-label={ItemName}
      >
        <span className="flex items-center justify-center p-1 rounded-full hover:bg-slate-200 dark:hover:bg-slate-500">
          {ItemName}
          {dropdownItems && (!isDropdownOpen? <MdOutlineKeyboardArrowDown /> : <MdKeyboardArrowUp />)}
        </span>
      </a>
      {
        dropdownItems && (
          <ul
            className={`absolute left-0 mt-2 w-48 bg-ivory dark:bg-dark-navy shadow-lg rounded-md transition-all duration-300 ease-in-out transform ${isDropdownOpen ? 'md:opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
          >
            {dropdownItems.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.link}
                  className="block px-4 py-2 text-teal-50 dark:text-light-cyan hover:bg-slate-200 dark:hover:bg-slate-500 transition-colors duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        )
      }
    </li>
  );
}

export default NavItem;