const InstagramInsight = () => {
    return (
        <section id="insight" className="bg-background flex flex-col items-center justify-center mt-16 mb-16 gap-5 py-16 px-4">
            <div className="text-center mb-16">
                <p className="md:text-xl mb-2 lg:mb-5 duration-[600ms] taos:translate-x-[-100%] taos:opacity-0 [animation-iteration-count:infinite]" data-taos-offset="100">- Instagram Insight</p>
                <h1 className="lg:mb-5 text-3xl font-semibold tracking-tight leading-10 text-gray-900 md:text-5xl lg:text-6xl delay-[300ms] duration-[600ms] taos:translate-x-[100%] taos:opacity-0 [animation-iteration-count:infinite]" data-taos-offset="100">Engagement On Point, <span className="text-primary italic font-normal">Ready to Collaborate</span></h1>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
                <div className="bg-primary flex flex-col items-center justify-center py-5 px-20 md:py-8 md:px-10 lg:py-10 lg:px-20 text-base font-medium text-center text-white rounded-lg delay-[300ms] duration-[600ms] taos:translate-y-[200px] taos:opacity-0 [animation-iteration-count:infinite]" data-taos-offset="50">
                    <img src="/src/assets/icon/icon-followers.png" alt="Icon Followers" className="w-24 md:w-20 lg:w-32 mb-5" />
                    <h1 className="text-4xl md:text-3xl lg:text-4xl">2K+</h1>
                    <p className="md:text-sm lg:text-base">Followers</p>
                </div>
                <div className="bg-primary flex flex-col items-center justify-center py-5 md:py-8 md:px-10 lg:py-10 lg:px-20 text-base font-medium text-center text-white rounded-lg delay-[300ms] duration-[700ms] taos:translate-y-[200px] taos:opacity-0 [animation-iteration-count:infinite]" data-taos-offset="50">
                    <img src="/src/assets/icon/icon-likes.png" alt="Icon Likes" className="w-24 md:w-20 lg:w-32 mb-5" />
                    <h1 className="text-4xl md:text-3xl lg:text-4xl">338</h1>
                    <p className="md:text-sm lg:text-base">Avg Likes</p>
                </div>
                <div className="bg-primary flex flex-col items-center justify-center py-5 md:py-8 md:px-10 lg:py-10 lg:px-20 text-base font-medium text-center text-white rounded-lg delay-[300ms] duration-[800ms] taos:translate-y-[200px] taos:opacity-0 [animation-iteration-count:infinite]" data-taos-offset="50">
                    <img src="/src/assets/icon/icon-comments.png" alt="Icon Comments" className="w-24 md:w-20 lg:w-32 mb-5" />
                    <h1 className="text-4xl md:text-3xl lg:text-4xl">13</h1>
                    <p className="md:text-sm lg:text-base">Avg Comments</p>
                </div>
                <div className="bg-primary flex flex-col items-center justify-center py-5 md:py-8 md:px-10 lg:py-10 lg:px-20 text-base font-medium text-center text-white rounded-lg delay-[300ms] duration-[900ms] taos:translate-y-[200px] taos:opacity-0 [animation-iteration-count:infinite]" data-taos-offset="50">
                    <img src="/src/assets/icon/icon-analytics.png" alt="Icon Analytics" className="w-24 md:w-20 lg:w-32 mb-5" />
                    <h1 className="text-4xl md:text-3xl lg:text-4xl">15.85%</h1>
                    <p className="md:text-sm lg:text-base">Engagement Rate</p>
                </div>
            </div>
        </section>
    )
}

export default InstagramInsight