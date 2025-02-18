"use client";
import { Navbar } from "flowbite-react";

const Header = () => {
    return (
        <Navbar fluid rounded className="px-4 sticky top-0 z-20">
            <Navbar.Brand href="/">
                <span
                    className="self-center text-3xl font-semibold whitespace-nowrap text-primary">
                    Indirand.
                </span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link href="#home" className="hover:text-white md:text-gray-900 hover:bg-primary md:hover:text-primary">
                    Home
                </Navbar.Link>
                <Navbar.Link href="#about" className="hover:text-white md:text-gray-900 hover:bg-primary md:hover:text-primary">
                    About Me
                </Navbar.Link>
                <Navbar.Link href="#insight" className="hover:text-white md:text-gray-900 hover:bg-primary md:hover:text-primary">
                    Insight
                </Navbar.Link>
                <Navbar.Link href="#rate-card" className="hover:text-white md:text-gray-900 hover:bg-primary md:hover:text-primary">
                    Rate Cards
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
