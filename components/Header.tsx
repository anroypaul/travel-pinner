import Link from "next/link";

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
              <Link href="/">
                <a className="text-lg hover:text-orange-500 transition duration-300">Home</a>
              </Link>
              <Link href="/about">
                <a className="text-lg hover:text-orange-500 transition duration-300">About</a>
              </Link>
              <Link href="/">
                <a className="text-lg hover:text-orange-500 transition duration-300">My Lists</a>
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-1 py-5">
            <Link href="/auth/login">
              <a className="py-2 px-3 bg-blue-500 hover:bg-blue-600 text-white rounded transition duration-300">
                Login
              </a>
            </Link>
            <Link href="/auth/signup">
              <a className="py-2 px-3 bg-yellow-900 hover:bg-yellow-800 text-white rounded transition duration-300">
                Sign up
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
