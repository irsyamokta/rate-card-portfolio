import { useState, useEffect } from "react";
const ScrollUp = () => {
    const [show, setShow] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 200) {
            setShow(true);
        } else {
            setShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <div
            id="scroll"
            className={`fixed bottom-48 right-5 md:right-16 z-50 bg-accent p-2 rounded-full border border-primary ${show ? 'block' : 'hidden'}`}>
            <a href="#home">
                <img src="/src/assets/icon/icon-up-arrow.png" alt="icon arrow" className="w-6 md:w-10" />
            </a>
        </div>
    )
}

export default ScrollUp;