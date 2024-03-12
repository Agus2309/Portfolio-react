
const Contact: React.FC = () => {
    return (
        <>
            <div className="bg-gray-900 text-white py-20 xl:max-w-2xl mx-auto">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-8 text-center">Contact Me</h2>
                    <div className="flex-col xl:flex-row md:flex-row">
                        <div className="md:w-1/2 mx-auto">
                            <p className="text-lg mb-4">
                                Feel free to reach out to me if you have any questions or if you'd like to work together on a project.
                            </p>
                            <p className="text-lg">
                                You can contact me via email or through my social media channels.
                            </p>
                        </div>
                        <div className="md:w-1/2 mt-8 md:mt-0 mx-auto">
                            <h3 className="text-xl font-bold mb-4">Email</h3>
                            <p className="text-lg mb-4">example@example.com</p>
                            <h3 className="text-xl font-bold mb-4">Social Media</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="text-lg">Twitter</a>
                                <a href="#" className="text-lg">LinkedIn</a>
                                <a href="#" className="text-lg">GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
