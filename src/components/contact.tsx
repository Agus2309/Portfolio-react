import { Button } from "@mui/material";
import { MdMail } from "react-icons/md";
import { useTranslation } from 'react-i18next';

const mail = 'mimail@gmail.com';

const Contact: React.FC = () => {

    const { t } = useTranslation();

    return (
        <>
            <div className="bg-gray-900 text-white py-10 xl:max-w-2xl mx-auto">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-8 text-center">{t('contact.title')}</h2>
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
                            <div className="flex">
                                <p className="text-lg mb-4">{mail}</p>
                                <a href="mailto:agustin.harris.cavia@gmail.com" className="text-3xl ml-2">
                                    <MdMail/>
                                </a>
                            </div>
                            
                            <h3 className="text-xl font-bold mb-4">Social Media</h3>
                            <div className="flex space-x-4">
                                <Button variant="contained" href="https://www.linkedin.com/in/agustin-harris/">Linkedin</Button>
                                <Button variant="contained" href="https://github.com/Agus2309">Github</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
