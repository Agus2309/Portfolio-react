const name = "Jorge";

const About: React.FC = () => {

    return (
        <div className="container mx-auto py-6">
            <h1 className="xl:text-5xl xxxs:text-4xl text-right text-white font-semibold mb-8">About Me</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-indigo-900 rounded-lg shadow-lg p-8">
                    <h2 className="text-3xl text-white font-bold mb-4">Hi, I'm {name}</h2>
                    <p className="text-lg text-white">Fullstack Web Developer</p>
                </div>
                <div className="bg-indigo-900 rounded-lg shadow-lg p-8">
                    <h2 className="text-3xl text-white font-bold mb-4">My Story</h2>
                    <p className="text-lg text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
