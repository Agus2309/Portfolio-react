import React from 'react';
import Slider from 'react-slick';

const InfiniteSlider: React.FC = () => {
    const technologies = [
        { name: "PHP", logo: "/svg/php3.svg" },
        { name: "TypeScript", logo: "/svg/typescript.svg" },
        { name: "JavaScript", logo: "/svg/javascript.svg" },
        { name: "Node.js", logo: "/svg/nodejs.svg" },
        { name: "Laravel", logo: "/svg/laravel.svg" },
        { name: "Angular", logo: "/svg/angular.svg" },
        { name: "React", logo: "/svg/react.svg" },
        { name: "Vite", logo: "/svg/vite.svg" },
        { name: "Express.js", logo: "/svg/expressjs.svg" },
        { name: "Tailwindcss", logo: "/svg/tailwindcss.svg" },
        { name: "Bootstrap", logo: "/svg/bootstrap.svg" },
        { name: "MySQL", logo: "/svg/mysql.svg" },
        { name: "MariaDB", logo: "/svg/mariadb.svg" },
        { name: "PostgreSQL", logo: "/svg/postgresql.svg" },
        { name: "MongoDB", logo: "/svg/mongodb.svg" },
        { name: "TypeORM", logo: "/svg/typeorm.svg" },
        { name: "Prisma", logo: "/svg/prisma.svg" },
        { name: "Apache", logo: "/svg/apache.svg" },
        { name: "Xampp", logo: "/svg/xampp.svg" },
        { name: "Docker", logo: "/svg/docker.svg" },
        { name: "Linux", logo: "/svg/linux.svg" },
        { name: "Ubuntu", logo: "/svg/ubuntu.svg" },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 1, // Set to 1 to make it continuous
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        pauseOnFocus: false,
        arrows: false,
        draggable: false,
        swipe: false,
        touchMove: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    };

    return (
        <div className='max-w-6xl mx-auto bg-gray-900'>
            <Slider {...settings}>
                {technologies.map((tech, index) => (
                    <div key={index} className='mx-auto text-center'>
                        <img className='h-20 w-20' src={tech.logo} alt={tech.name} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default InfiniteSlider;
