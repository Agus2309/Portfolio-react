import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";


const AutoPlaySwipeableViews = autoPlay(SwipeableViews, { interval: 8000 });

const images = [
  {
    label: "Web System for device and users management",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
    livePage: "",
    gitRepo: "",
    technologies:[
      {name: "Laravel", logo: "/svg/laravel.svg"},
      {name: "Bootstrap", logo: "/svg/bootstrap.svg"},
      {name: "MySQL", logo: "/svg/mysql.svg"},
    ]
  },
  {
    label: "App to create and manage events",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
    livePage: "",
    gitRepo: "",
    technologies:[
      {name: "Angular", logo: "/svg/angular.svg"},
      {name: "Bootstrap", logo: "/svg/bootstrap.svg"},
      {name: "TypeScript", logo: "/svg/typescript.svg"},
      {name: "Express.js", logo: "/svg/expressjs.svg"},
      {name: "Node.js", logo: "/svg/nodejs.svg"},
      {name: "TypeORM", logo: "/svg/typeorm.svg"},
      {name: "MariaDB", logo: "/svg/mariadb.svg"},
    ]
  },
  {
    label: "Independant presentation component for the App Event",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
    livePage: "",
    gitRepo: "",
    technologies:[
      {name: "Laravel", logo: "/svg/laravel.svg"},
      {name: "Bootstrap", logo: "/svg/bootstrap.svg"},
      {name: "MariaDB", logo: "/svg/mariadb.svg"},
    ]
  },
  {
    label: "Notes App",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
    livePage: "",
    gitRepo: "",
    technologies:[
      {name: "React", logo: "/svg/react.svg"},
      {name: "Bootstrap", logo: "/svg/bootstrap.svg"},
      {name: "Node.js", logo: "/svg/nodejs.svg"},
      {name: "Laravel", logo: "/svg/laravel.svg"},
      {name: "MySQL", logo: "/svg/mysql.svg"},
    ]
  },
  {
    label: "CSV Parser",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
    livePage: "https://csv-parser-sp-test.vercel.app/",
    gitRepo: "https://github.com/Agus2309/CSV-Parser-SPTest",
    technologies:[
      {name: "React", logo: "/svg/react.svg"},
      {name: "Tailwindcss", logo: "/svg/tailwindcss.svg"},
      {name: "Node.js", logo: "/svg/nodejs.svg"},
      {name: "TypeScript", logo: "/svg/typescript.svg"},
      {name: "Express.js", logo: "/svg/expressjs.svg"},
      {name: "Prisma", logo: "/svg/prisma.svg"},
    ]
  },
];

const Projects: React.FC = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;
  const [livePage, setLivePage] = useState("");
  const [gitRepo, setGitRepo] = useState("");

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === 0 ? maxSteps - 1 : prevActiveStep - 1
    );
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  const handleChangeLinks = (index: number) => {
    setLivePage(images[index].livePage);
    setGitRepo(images[index].gitRepo);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
    }, 8000);

    return () => clearInterval(intervalId);
  }, [maxSteps]);

  React.useEffect(() => {
    handleChangeLinks(activeStep);
  }, [activeStep]);
  

  return (
    <>
      <div className="flex flex-wrap">
        <h1 className="xl:text-5xl xxxs:text-3xl text-white font-semibold mb-5 ml-3 relative">
          Projects
        </h1>
      </div>
      <div className="max-w-3xl mx-auto justify-center xxs:max-w-96 sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-3xl">
        <Box sx={{ flexGrow: 2 }}>
          <Paper
            square
            elevation={12}
            sx={{
              borderRadius: 1,
              display: "flex",
              alignItems: "center",
              height: 70,
              pl: 2,
              bgcolor: "background.default",
            }}
          >
            <Typography>{images[activeStep].label}</Typography>
          </Paper>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
            interval={5000}
          >
            {images.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    component="img"
                    sx={{
                      height: "auto",
                      display: "block",
                      maxWidth: "auto",
                      overflow: "hidden",
                      width: "100%",
                    }}
                    src={step.imgPath}
                    alt={step.label}
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <MobileStepper
            sx={{ borderRadius: 1 }}
            variant="progress"
            steps={maxSteps}
            position="static"
            
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </Box>
      </div>
      <div className="mt-8 max-w-12xl">
        <div className="flex mx-auto justify-center space-x-10 mb-5">
          <Button
            variant="outlined"
            sx={{ fontSize: "16px" }}
            onClick={() => window.open(livePage, "_blank")}
          >
            See live page
          </Button>
          <Button
            variant="outlined"
            sx={{ fontSize: "16px" }}
            onClick={() => window.open(gitRepo, "_blank")}
          >
            See Github repo
          </Button>
        </div>
        <h1 className="text-center text-2xl text-white font-semibold">Technologies used</h1>
        <div className="mt-6 flex flex-wrap justify-center max-w-3xl mx-auto sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-7xl">
          {images[activeStep].technologies.map((tech, index) => (
            <div
              key={index}
              className="w-full xxxs:w-1/2 xxs:w-1/3 sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-4 px-2"
            >
              <div className="bg-white rounded-xl flex items-center p-4 shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
                <img
                  src={tech.logo}
                  alt={`${tech.name} Logo`}
                  className="w-9 h-9 mr-1"
                />
                <p className="xl:text-xl xl:ml-2 xxxs:ml-1 xxxs:text-lg font-semibold">
                  {tech.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
