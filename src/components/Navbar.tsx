import { useState } from 'react';
import { Button, Drawer, List, ListItem } from '@mui/material';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ApiOutlinedIcon from '@mui/icons-material/ApiOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-scroll';

const Navbar: React.FC = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const handleSectionClick = (sectionId: string) => {
        setIsDrawerOpen(false);
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
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
                    <Link to="home" smooth={true} duration={900} className="text-white hover:text-gray-300 text-2xl font-semibold">Home</Link>
                    <Link to="about" smooth={true} duration={900} className="text-white hover:text-gray-300 text-2xl font-semibold">About</Link>
                    <Link to="projects" smooth={true} duration={900} className="text-white hover:text-gray-300 text-2xl font-semibold">Projects</Link>
                    <Link to="technologies" smooth={true} duration={900} className="text-white hover:text-gray-300 text-2xl font-semibold">Technologies</Link>
                    <Link to="contact" smooth={true} duration={900} className="text-white hover:text-gray-300 text-2xl font-semibold">Contact</Link>
                    <a href="file/example.pdf" download>
                        <Button variant="contained" className="flex-grow">
                            Resume
                        </Button>
                    </a>
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
                            Home
                        </ListItem>
                        <ListItem button onClick={() => handleSectionClick('about')} className="text-xl mb-2">
                            About
                        </ListItem>
                        <ListItem button onClick={() => handleSectionClick('projects')} className="text-xl mb-2">
                            Projects
                        </ListItem>
                        <ListItem button onClick={() => handleSectionClick('technologies')} className="text-xl mb-2">
                            Technologies
                        </ListItem>
                        <ListItem button onClick={() => handleSectionClick('contact')} className="text-xl mb-2">
                            Contact
                        </ListItem>
                        <ListItem button>
                            <a href="file/example.pdf" download>
                                <Button sx={{ fontWeight: '600' }} variant="contained" className="flex-grow">
                                    Resume
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
