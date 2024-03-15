import React from "react";
import 'tailwindcss/tailwind.css';
import { useTranslation } from 'react-i18next';

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



const Technologies: React.FC = () => {

    const { t } = useTranslation();

    return (
        <>
            <div>
                <h1 className="xl:text-5xl xxxs:text-3xl text-white text-right font-semibold mb-5 ml-3 relative">
                    {t('technologies.title')}
                </h1>
            </div>
            <div className="flex flex-wrap justify-center max-w-3xl mx-auto sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-7xl">
                {technologies.map((tech, index) => (
                    <div key={index} className="w-full xxxs:w-1/2 xxs:w-1/3 sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-4 px-2">
                        <div className="bg-white rounded-xl flex items-center p-4 shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
                            <img src={tech.logo} alt={`${tech.name} Logo`} className="w-9 h-9 mr-1" />
                            <p className="xl:text-xl xl:ml-2 xxxs:ml-1 xxxs:text-lg font-semibold">{tech.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Technologies;
