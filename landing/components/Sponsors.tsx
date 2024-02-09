import Image from 'next/image';
import React from 'react';

const sponsors = [
    {
        logourl: '/partner1.svg',
        alt: 'tripadvisor',
        width: 211.83,
        height: 32,
    },
    {
        logourl: '/partner2.svg',
        alt: 'expedia',
        width: 113.06,
        height: 32,
    },
    {
        logourl: '/partner3.svg',
        alt: 'booking.com',
        width: 188.6,
        height: 32,
    },
    {
        logourl: '/partner4.svg',
        alt: 'airbnb',
        width: 102.53,
        height: 32,
    },
    {
        logourl: '/partner5.svg',
        alt: 'grabitz',
        width: 173.57,
        height: 32,
    }
];

const Sponsors = () => {
    return (
        <main className="py-[10rem] ml-[1rem] flex justify-between px-[6rem] bg-[url('/partnerBgTriangles.svg')] bg-no-repeat bg-[0_center]">
            {sponsors.map((sponsor, index) => (
                <Image
                    key={index}
                    src={sponsor.logourl}
                    alt={sponsor.alt}
                    width={sponsor.width}
                    height={sponsor.height}
                />
            ))}
        </main>
    );
};

export default Sponsors;