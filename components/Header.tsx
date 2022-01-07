import Link from "next/link";
import HeaderItem from "./HeaderItem";

export default function Header() {
  return (
    <nav className="bg-gray-200">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between">
          <div className="flex items-center space-x-4">
            <div>
              <h3 className="text-2xl font-bold">Travel Pinner</h3>
            </div>
            <div className="flex space-x-4">
              <HeaderItem link="/" title="Home" />
              <HeaderItem link="/about" title="About" />
              <HeaderItem link="/lists" title="My Lists" />
            </div>
          </div>
          <div className="flex items-center py-5 space-x-1">
            <HeaderItem
              link="/auth/login"
              title="Login"
              classNames="px-3 py-2 text-white transition duration-300 bg-blue-500 rounded hover:bg-blue-600"
            />
            <HeaderItem
              link="/auth/signup"
              title="Sign Up"
              classNames="px-3 py-2 text-white transition duration-300 bg-yellow-900 rounded hover:bg-yellow-800"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
