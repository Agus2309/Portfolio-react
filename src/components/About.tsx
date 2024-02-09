const name = "Jorge";

const About: React.FC = () => {

    return (
        <>
            <div className="flex flex-wrap">
                  <h1 className="text-3xl text-white font-semibold mb-5 ml-3 relative">
                      About Me ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                  </h1>
            </div>
            <div className="flex justify-around">
                <div className="max-w-xs border rounded-xl text-center align-middle text-white bg-indigo-900 shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
                    <div className="p-5">
                        <div className="font-semibold mt-10">
                            <h5 className="text-xl mr-24 mb-1">Hi, I'm</h5>
                            <h1 className="text-6xl">{name}</h1>
                        </div>
                        <div>
                            <p className="font-bold mt-5">Fullstack Web Developer</p>
                        </div>
                    </div>
                </div>
                <div className=" max-w-md border rounded-xl text-center text-white bg-indigo-900 shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
                    <div className="p-5">
                        <div className="font-semibold">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About