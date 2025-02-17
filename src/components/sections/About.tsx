import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section
            id="about"
            className="flex flex-col-reverse lg:flex-row items-center justify-center mt-16 mb-16 py-16 gap-5">
            <img
                src="/src/assets/img/img-about.png"
                alt="Indira Haeka Ananda"
                decoding="async"
                className="w-1/2 lg:w-1/4"
                data-aos="fade-up" />
            <div
                className="lg:w-1/2 px-10">
                <p
                    className="md:text-xl mb-2 lg:mb-5"
                    data-aos="fade-up">
                    - About Me
                </p>
                <h1
                    className="mb-5 text-3xl font-semibold tracking-tight leading-none text-gray-900 md:text-5xl xl:text-6xl"
                    data-aos="fade-up">
                    Who is
                    <span className="ms-2 text-primary italic font-normal">
                        Indira?
                    </span>
                </h1>
                <p
                    className="mb-8 text-sm font-normal text-gray-500 xl:text-xl"
                    data-aos="fade-up">
                    Hello! I am Indira, a beauty enthusiast who has a passion
                    in the world of beauty and self-care. In addition to sharing tips and
                    reviews of beauty products, I am also active in various social activities, because I believe that true beauty comes from
                    caring and kindness.
                </p>
            </div>
        </section>
    )
}

export default About