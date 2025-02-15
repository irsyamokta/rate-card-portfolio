import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface PackageCardProps {
    name: string;
    type: string;
    detail: string;
    price: string;
    message: string;
}

const PackageCard: React.FC<PackageCardProps> = ({ name, type, detail, price, message }) => {

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

const PackageList: React.FC = () => {
    const packages: PackageCardProps[] = [
        {
            name: "Starter Glow",
            type: "Instagram Story",
            detail: "(1 frame + tag + mention)",
            price: "35.000",
            message: "Saya tertarik dengan paket Starter Glow seharga Rp35.000. Mohon informasi lebih lanjut.",
        },
        {
            name: "Insta Shout",
            type: "Instagram Story",
            detail: "(3 frames + tag + mention + CTA)",
            price: "90.000",
            message: "Saya tertarik dengan paket Insta Shout seharga Rp90.000. Mohon informasi lebih lanjut.",
        },
        {
            name: "Beauty Buzz",
            type: "Instagram Feed",
            detail: "(Foto/Carousel)",
            price: "130.000",
            message: "Saya tertarik dengan paket Beauty Buzz seharga Rp130.000. Mohon informasi lebih lanjut.",
        },
        {
            name: "Quick Review",
            type: "Instagram Reels",
            detail: "(VideoReview/Tutorial/Unboxing)",
            price: "200.000",
            message: "Saya tertarik dengan paket Quick Review seharga Rp200.000. Mohon informasi lebih lanjut.",
        },
    ];

    return (
        <div className="flex flex-wrap justify-center gap-4">
            {packages.map((pkg, index) => (
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

export default PackageList;
