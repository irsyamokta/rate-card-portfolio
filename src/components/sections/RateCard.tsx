import BundleList from "../cards/BundleCard"
import PackageList from "../cards/PackageCard"

const RateCard = () => {
    return (
        <section id="rate-card" className="flex flex-col items-center justify-center mt-16 mb-16 gap-5 py-16 px-4">
            <div className="text-center mb-16">
                <p className="md:text-xl mb-2 lg:mb-5 duration-[600ms] taos:translate-x-[-100%] taos:opacity-0 [animation-iteration-count:infinite]" data-taos-offset="100">- Rate Cards</p>
                <h1 className="lg:mb-5 text-3xl font-semibold tracking-tight leading-10 text-gray-900 md:text-5xl lg:text-6xl delay-[300ms] duration-[600ms] taos:translate-x-[100%] taos:opacity-0 [animation-iteration-count:infinite]" data-taos-offset="100"><span className="text-primary italic font-normal">Endorsement Packages </span>That Suit Your Needs</h1>
            </div>
            <PackageList />
            <div className="text-center mt-16 mb-8 lg:mb-16">
                <h1 className="mb-4 text-3xl font-semibold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl delay-[300ms] duration-[600ms] taos:translate-y-[-100%] taos:opacity-0 [animation-iteration-count:infinite]" data-taos-offset="500"><span className="text-primary italic font-normal">Bundle </span>Package</h1>
            </div>
            <BundleList />
        </section>
    )
}

export default RateCard