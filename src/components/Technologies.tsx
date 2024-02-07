import React from "react";
import 'tailwindcss/tailwind.css';

const technologies = [
    { name: "PHP", logo: "/svg/php.svg" },
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
    { name: "SASS", logo: "/svg/sass.svg" },
    { name: "JQuery", logo: "/svg/jquery.svg" },
    { name: "Rxjs", logo: "/svg/rxjs.svg" },
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
    { name: "Github", logo: "/svg/github.svg" },
    { name: "VS Code", logo: "/svg/vscode.svg" },
    { name: "Vercel", logo: "/svg/vercel.svg" },
];

const Technologies: React.FC = () => {
    return (
        <>
            <div className="flex flex-wrap">
                <h1 className="text-3xl text-white font-semibold mb-5 ml-3 relative">
                    Tools and Technologies
                </h1>
            </div>
            <div className="flex flex-wrap justify-center max-w-3xl mx-auto">
                {technologies.map((tech, index) => (
                    <div key={index} className="w-full xxs:w-1/4 sm:w-1/5 md:w-1/5 lg:w-1/6 xl:w-1/8 mb-4 px-2 justify-center">
                        <div className="bg-white rounded flex items-center p-4 shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
                            <img src={tech.logo} alt={`${tech.name} Logo`} className="w-8 h-8 mr-2" />
                            <p className="font-semibold">{tech.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Technologies;
