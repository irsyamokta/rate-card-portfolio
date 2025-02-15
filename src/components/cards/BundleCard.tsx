import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface BundleCardProps {
    name: string;
    type: string;
    detail: string;
    price: string;
    message: string;
}

const PackageCard: React.FC<BundleCardProps> = ({ name, type, detail, price, message }) => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const encodedMessage = encodeURIComponent(message);

    return (
        <div
            className="bg-background border border-primary flex flex-col items-center justify-center w-[300px] py-10 text-base font-medium text-center text-white rounded-lg gap-14"
            data-aos="flip-right">
            <h1
                className="text-2xl font-semibold text-primary">
                {name}
            </h1>
            <div>
                <p
                    className="text-primary">
                    {type}
                </p>
                <p
                    className="text-primary">
                    {detail}
                </p>
            </div>
            <h1
                className="text-4xl font-bold text-primary">
                Rp{price}
            </h1>
            <a
                href={`https://wa.me/6288226362997?text=${encodedMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-secondary focus:ring-4 focus:ring-accent"
            >
                Select Package
            </a>
        </div>
    );
};

const BundleList: React.FC = () => {
    const bundles: BundleCardProps[] = [
        {
            name: "Glow Up",
            type: "Combine",
            detail: "(Story + Feed)",
            price: "150.000",
            message: "Saya tertarik dengan paket Glow Up seharga Rp150.000. Mohon informasi lebih lanjut.",
        },
        {
            name: "Campaign Series",
            type: "Combine",
            detail: "(Story + Reels)",
            price: "220.000",
            message: "Saya tertarik dengan paket Campaign Series seharga Rp220.000. Mohon informasi lebih lanjut.",
        },
        {
            name: "All-In Beauty",
            type: "Full",
            detail: "(Story + Feed + Reels)",
            price: "350.000",
            message: "Saya tertarik dengan paket All-In Beauty seharga Rp350.000. Mohon informasi lebih lanjut.",
        },
    ];

    return (
        <div className="flex flex-wrap justify-center gap-4">
            {bundles.map((pkg, index) => (
                <PackageCard
                    key={index}
                    name={pkg.name}
                    type={pkg.type}
                    detail={pkg.detail}
                    price={pkg.price}
                    message={pkg.message}
                />
            ))}
        </div>
    );
};

export default BundleList;
