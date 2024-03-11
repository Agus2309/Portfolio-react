import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';

const Footer: React.FC = () => {
    return (
        <>
            <footer className="bg-gray-600 rounded pt-5 p-4 text-white text-center static bottom-0">
            <p className='mt-2'>&copy; 2024 Agus2309 | All rights reserved.</p>
                <div className="flex justify-center items-center mt-6 space-x-4">
                    <a href="https://www.linkedin.com/in/agustin-harris">
                        <FaLinkedin className="text-white mx-2" size={24} />
                    </a>
                    <a href="https://github.com/Agus2309">
                        <FaGithub className="text-white mx-2" size={24} />
                    </a>
                    <a href="mailto:agustin.harris.cavia@gmail.com">
                        <MdMail className="text-white mx-2" size={24} />
                    </a>
                </div>
            </footer>
        </>
    )
}

export default Footer;
