const Footer = () => {
    return (
        <footer
            className="bg-primary">
            <div
                className="w-full mx-auto p-4 md:py-8">
                <div
                    className="sm:flex sm:items-center sm:justify-between">
                    <a
                        href="/"
                        className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <span
                            className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            Indirand.
                        </span>
                    </a>
                    <ul
                        className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a
                                href="mailto:indirahaekq@gmail.com"
                                className="hover:underline">
                                <img src="/src/assets/icon/icon-email.png" alt="email" className="w-7 md:w-9 me-2 md:me-4" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/indiirahn/"
                                target="_blank"
                                className="hover:underline">
                                <img src="/src/assets/icon/icon-instagram.png" alt="instagram" className="w-6 md:w-8 me-2 md:me-4" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/indirand/"
                                target="_blank"
                                className="hover:underline">
                                <img src="/src/assets/icon/icon-linkedin.png" alt="linkedIn" className="w-6 md:w-8 me-2 md:me-4" />
                            </a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-white sm:mx-auto lg:my-8" />
                <span
                    className="block text-sm text-white sm:text-center">
                    © {new Date().getFullYear()}
                    <a href="https://flowbite.com/" className="hover:underline">
                        Indirand
                    </a>
                    . All Rights Reserved.
                </span>
            </div>
        </footer>
    )
}

export default Footer;