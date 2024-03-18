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
        <nav className="fixed top-0 w-full bg-transparent text-white p-6 z-50">
            <div className="flex justify-between max-w-12xl">
                <div className="md:hidden">
                    <Button variant="contained" size='large' onClick={toggleDrawer}>
                        <MenuIcon/>
                    </Button>
                </div>
                <div className="hidden md:flex lg:flex xl:flex items-center text-red-500 font-black text-xl">
                    <ArrowBackIosNewOutlinedIcon />
                    <ArrowBackIosNewOutlinedIcon />
                    <ApiOutlinedIcon />
                    <ArrowForwardIosOutlinedIcon />
                    <ArrowForwardIosOutlinedIcon />
                </div>
                <div className="hidden md:flex lg:flex xl:flex space-x-8 items-center">
                    <Link to="home" smooth={true} duration={900} className="rounded-md border-t-purple-700 border-solid border-2 p-2 text-secondary hover:text-white text-[18px] font-medium cursor-pointer">{t('navbar.home')}</Link>
                    <Link to="about" smooth={true} duration={900} className="rounded-md border-t-purple-700 border-solid border-2 p-2 text-secondary hover:text-white text-[18px] font-medium cursor-pointer">{t('navbar.about')}</Link>
                    <Link to="projects" smooth={true} duration={900} className="rounded-md border-t-purple-700 border-solid border-2 p-2 text-secondary hover:text-white text-[18px] font-medium cursor-pointer">{t('navbar.projects')}</Link>
                    <Link to="technologies" smooth={true} duration={900} className="rounded-md border-t-purple-700 border-solid border-2 p-2 text-secondary hover:text-white text-[18px] font-medium cursor-pointer">{t('navbar.technologies')}</Link>
                    <Link to="contact" smooth={true} duration={900} className="rounded-md border-t-purple-700 border-solid border-2 p-2 text-secondary hover:text-white text-[18px] font-medium cursor-pointer">{t('navbar.contact')}</Link>
                    <a href={language === 'es' ? 'file/example.pdf' : 'file/example2.pdf'} download>
                        <Button variant="outlined" sx={{fontWeight: '600', padding: '12px'}} className="flex-grow">
                            {t('navbar.resume')}
                        </Button>
                    </a>
                    <Select
                        value={language}
                        onChange={handleChangeLanguage}
                        label="Language"
                        variant="standard"
                        sx={{ color: 'white', '& .MuiSelect-icon': { color: 'white' } }}
                        >
                        <MenuItem value="en">
                            <img src='/svg/flags/en.svg' className='h-8 w-8' />
                        </MenuItem>
                        <MenuItem value="es"> 
                            <img src='/svg/flags/es.svg' className='h-8 w-8' />
                        </MenuItem>
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
                            <a href={language === 'es' ? 'file/example.pdf' : 'file/example2.pdf'} download>
                                <Button sx={{ fontWeight: '600' }} variant="contained" className="flex-grow">
                                    {t('navbar.resume')}
                                </Button>
                            </a>
                        </ListItem>
                        <ListItem>
                            <Select
                                value={language}
                                onChange={handleChangeLanguage}
                                label="Language"
                                variant="standard"
                                sx={{ color: 'white', '& .MuiSelect-icon': { color: 'white' } }}
                            >
                                <MenuItem value="en">
                                    <img src='/svg/flags/en.svg' className='h-8 w-8' />
                                </MenuItem>
                                <MenuItem value="es"> 
                                    <img src='/svg/flags/es.svg' className='h-8 w-8' />
                                </MenuItem>
                            </Select>
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        </nav>
    );
};

export default Navbar;
