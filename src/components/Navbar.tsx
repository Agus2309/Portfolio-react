import { Button } from "@mui/material"
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ApiOutlinedIcon from '@mui/icons-material/ApiOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';


const Navbar: React.FC = () => {

    return (
        <>
            <header className="rounded text-white p-7">
                <div className="container flex justify-between max-w-12xl">
                    <div className="text-red-500 font-bold text-xl">
                        <ArrowBackIosNewOutlinedIcon />
                        <ArrowBackIosNewOutlinedIcon />
                        <ApiOutlinedIcon />
                        <ArrowForwardIosOutlinedIcon />
                        <ArrowForwardIosOutlinedIcon />
                    </div>
                    <div className="flex space-x-4">
                        <a href="#home" className="text-white hover:text-gray-300 mt-1">Home</a>
                        <a href="#about" className="text-white hover:text-gray-300 mt-1">About</a>
                        <a href="#projects" className="text-white hover:text-gray-300 mt-1">Projects</a>
                        <a href="#contact" className="text-white hover:text-gray-300 mt-1">Contact</a>
                        <Button variant="outlined" className="flex-grow">
                            Resume
                        </Button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar