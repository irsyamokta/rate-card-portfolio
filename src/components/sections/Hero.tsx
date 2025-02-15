const Hero = () => {
    return (
        <section
            id="home"
            className="flex flex-col lg:flex-row lg:justify-between items-center relative mb-10">
            <div
                className="py-32 px-4 lg:py-16">
                <h1
                    className="mb-4 text-3xl font-semibold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
                    I'm
                    <span className="text-primary italic font-normal">
                        Indira Haeka Ananda
                    </span>
                </h1>
                <h1
                    className="mb-4 text-3xl font-semibold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
                    Beauty Enthusiast
                </h1>
                <h1
                    className="mb-4 text-3xl font-semibold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
                    & Social Advocate
                </h1>
                <p
                    className="mb-8 text-base font-normal text-gray-500 lg:text-xl">
                    Through the Instagram platform, I share experiences, product recommendations, and interesting insights about beauty and lifestyle.
                </p>
                <div
                    className="flex flex-col space-y-4 sm:flex-row sm:justify-start sm:space-y-0">
                    <a
                        href="https://wa.me/6288226362997" target="_blank" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-secondary focus:ring-4 focus:ring-accent">
                        Contact Me
                        <svg
                            className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            </div>
            <img src="/src/assets/img/img-hero.png" alt="Indira Haeka Ananda" className="-mt-20 lg:mt-0 lg:w-1/2" />
            <img src="/src/assets/img/img-ornament.png" alt="Indira Haeka Ananda" className=" absolute bottom-0 right-0 h-14 md:h-20 w-full lg:h-auto" />
        </section>
    )
}

export default Hero