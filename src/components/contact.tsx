import { Button } from "@mui/material";
import { MdMail } from "react-icons/md";
import { useTranslation } from 'react-i18next';

const mail = 'agustin.harris.cavia@gmail.com';

const Contact: React.FC = () => {

    const { t } = useTranslation();

    return (
        <>
            <div className="bg-gray-900 text-white py-6 xl:max-w-2xl mx-auto">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-8 text-center">{t('contact.title')}</h2>
                    <div className="flex-col xl:flex-row md:flex-row">
                        <div className="md:w-1/2 mx-auto">
                            <p className="text-lg mb-4">
                                {t('contact.first')}
                            </p>
                            <p className="text-lg">
                                {t('contact.second')}
                            </p>
                        </div>
                        <div className="md:w-1/2 mt-8 md:mt-0 mx-auto">
                            <h3 className="text-xl font-bold mb-4">{t('contact.mail')}</h3>
                            <div className="flex">
                                <p className="text-lg mb-4">{mail}</p>
                                <a href="mailto:agustin.harris.cavia@gmail.com" className="text-3xl ml-2">
                                    <MdMail/>
                                </a>
                            </div>
                            
                            <h3 className="text-xl font-bold mb-4">{t('contact.social')}</h3>
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
