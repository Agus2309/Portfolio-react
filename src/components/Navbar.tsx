import { useState } from 'react';
import { Button, Drawer, List, ListItem, SelectChangeEvent } from '@mui/material';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ApiOutlinedIcon from '@mui/icons-material/ApiOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';
import { Select, MenuItem } from '@mui/material';

const Navbar: React.FC = () => {
    const { t } = useTranslation();
    const [language, setLanguage] = useState('en');
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const handleSectionClick = (sectionId: string) => {
        setIsDrawerOpen(false);
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleChangeLanguage = (event: SelectChangeEvent<string>) => { // Change event type to SelectChangeEvent<string>
        const selectedLanguage = event.target.value;
        setLanguage(selectedLanguage);
        i18n.changeLanguage(selectedLanguage);
    };
    
    return (
        <header className="bg-transparent rounded text-white p-6">
            <div className="flex justify-between max-w-12xl">
                <div className="md:hidden">
                    <Button variant="outlined" onClick={toggleDrawer}>
                        <MenuIcon/>
                    </Button>
                </div>
                <div className="hidden md:flex lg:flex xl:flex items-center text-red-500 font-bold text-xl">
                    <ArrowBackIosNewOutlinedIcon />
                    <ArrowBackIosNewOutlinedIcon />
                    <ApiOutlinedIcon />
                    <ArrowForwardIosOutlinedIcon />
                    <ArrowForwardIosOutlinedIcon />
                </div>
                <div className="hidden md:flex lg:flex xl:flex space-x-8 items-center">
                    <Link to="home" smooth={true} duration={900} className="text-white hover:text-gray-300 text-2xl font-semibold">{t('navbar.home')}</Link>
                    <Link to="about" smooth={true} duration={900} className="text-white hover:text-gray-300 text-2xl font-semibold">{t('navbar.about')}</Link>
                    <Link to="projects" smooth={true} duration={900} className="text-white hover:text-gray-300 text-2xl font-semibold">{t('navbar.projects')}</Link>
                    <Link to="technologies" smooth={true} duration={900} className="text-white hover:text-gray-300 text-2xl font-semibold">{t('navbar.technologies')}</Link>
                    <Link to="contact" smooth={true} duration={900} className="text-white hover:text-gray-300 text-2xl font-semibold">{t('navbar.contact')}</Link>
                    <a href="file/example.pdf" download>
                        <Button variant="contained" className="flex-grow">
                            {t('navbar.resume')}
                        </Button>
                    </a>
                    <Select
                        value={language}
                        onChange={handleChangeLanguage}
                        label="Language"
                        variant="standard"
                    >
                        <MenuItem value="en">English</MenuItem>
                        <MenuItem value="es">Español</MenuItem>
                    </Select>
                </div>
            </div>
            <Drawer anchor="left" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} sx={{width: '20%', '& .MuiDrawer-paper': {
            backgroundColor: '#050342',
            color: '#ffffff',
            fontWeight: '600',
            alignContent: 'center',
            
        }, }}>
                <div
                    role="presentation"
                    onClick={toggleDrawer}
                    onKeyDown={toggleDrawer}
                >
                    <List>
                        <ListItem button onClick={() => handleSectionClick('home')} className="text-xl mb-2">
                            {t('navbar.home')}
                        </ListItem>
                        <ListItem button onClick={() => handleSectionClick('about')} className="text-xl mb-2">
                            {t('navbar.about')}
                        </ListItem>
                        <ListItem button onClick={() => handleSectionClick('projects')} className="text-xl mb-2">
                            {t('navbar.projects')}
                        </ListItem>
                        <ListItem button onClick={() => handleSectionClick('technologies')} className="text-xl mb-2">
                            {t('navbar.technologies')}
                        </ListItem>
                        <ListItem button onClick={() => handleSectionClick('contact')} className="text-xl mb-2">
                            {t('navbar.contact')}
                        </ListItem>
                        <ListItem button>
                            <a href="file/example.pdf" download>
                                <Button sx={{ fontWeight: '600' }} variant="contained" className="flex-grow">
                                    {t('navbar.resume')}
                                </Button>
                            </a>
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        </header>
    );
};

export default Navbar;
