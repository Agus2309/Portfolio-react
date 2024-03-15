import { useTranslation } from 'react-i18next';


const About: React.FC = () => {

    const { t } = useTranslation();

    return (
        <div className="container mx-auto py-6">
            <h1 className="xl:text-5xl xxxs:text-4xl text-right text-white font-semibold mb-8">{t('about.title')}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8">
                    <h2 className="text-2xl text-white font-bold mb-4">{t('about.sub1')}</h2>
                    <p className="text-lg text-white">{t('about.first')}</p>
                </div>
                <div className="p-8">
                    <h2 className="text-2xl text-white font-bold mb-4">{t('about.sub2')}</h2>
                    <p className="text-lg text-white">
                        {t('about.second')}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
