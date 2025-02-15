const Navbar = () => {
    return (
        <nav
            className="bg-white border-gray-200 fixed sm:static top-0 w-full z-20">
            <div
                className="flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/"
                    className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span
                        className="self-center text-3xl font-semibold whitespace-nowrap text-primary">
                        Indirand.
                    </span>
                </a>
                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="navbar-default"
                    aria-expanded="false">
                    <span
                        className="sr-only">
                        Open main menu
                    </span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14">
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div
                    className="hidden w-full md:block md:w-auto"
                    id="navbar-default">
                    <ul
                        className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                        <li>
                            <a
                                href="#home"
                                className="block py-2 px-3 text-white bg-primary rounded-sm md:bg-transparent md:text-primary md:p-0" aria-current="page">
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0">
                                About Me
                            </a>
                        </li>
                        <li>
                            <a
                                href="#insight"
                                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0">
                                Insight
                            </a>
                        </li>
                        <li>
                            <a
                                href="#rate-card"
                                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0">
                                Rate Cards
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;