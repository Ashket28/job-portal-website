import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Check from '@material-ui/icons/Check';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import SchoolIcon from '@mui/icons-material/School';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import AssignmentIcon from '@mui/icons-material/Assignment';
import StepConnector from '@material-ui/core/StepConnector';
import { Stepper, Step, StepLabel } from "@material-ui/core";
import './WizardForm.css';
import { useState } from 'react';
import { motion } from "framer-motion";
import BasicInfo from '../components/wizardformcomp/BasicInfo';
import LastStep from '../components/wizardformcomp/LastStep';
import Experience from '../components/wizardformcomp/Experience';
import Eduction from '../components/wizardformcomp/Eduction';



const ColorlibConnector = withStyles({
    alternativeLabel: {
        top: 22,
    },
    active: {
        '& $line': {
            backgroundImage:
                ' linear-gradient(136deg, rgb(0 255 9) 0%, rgb(64 205 102) 50%, rgb(48 171 59) 100%)',
        },
    },
    completed: {
        '& $line': {
            backgroundImage:
                ' linear-gradient(136deg, rgb(0 255 9) 0%, rgb(64 205 102) 50%, rgb(48 171 59) 100%)',
        },
    },
    line: {
        height: 3,
        border: 0,
        backgroundColor: '#eaeaf0',
        borderRadius: 1,
    },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
    root: {
        backgroundColor: '#ccc',
        zIndex: 1,
        color: '#fff',
        width: 50,
        height: 50,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    active: {
        backgroundImage:
            ' linear-gradient(136deg, rgb(0 255 9) 0%, rgb(64 205 102) 50%, rgb(48 171 59) 100%)',
        boxShadow: '0px 4px 6px 1px rgba(0,0,0,0.45)',
    },
    completed: {
        backgroundImage:
            ' linear-gradient(136deg, rgb(0 255 9) 0%, rgb(64 205 102) 50%, rgb(48 171 59) 100%)',
    },
});

const useQontoStepIconStyles = makeStyles({
    completed: {
        color: '#ffffff',
        fontSize: 27,
    },
});

function ColorlibStepIcon(props) {
    const checkClasses = useQontoStepIconStyles();
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;

    const icons = {
        1: <AutoStoriesIcon />,
        2: <SchoolIcon />,
        3: <VideoLabelIcon />,
        4: <AssignmentIcon />,
    };

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
                [classes.completed]: completed,
            })}
        >

            {completed ? <Check className={checkClasses.completed} /> : icons[String(props.icon)]}

        </div>
    );
}

ColorlibStepIcon.propTypes = {
    active: PropTypes.bool,
    completed: PropTypes.bool,
    icon: PropTypes.node,
};

export default function WizardForm() {
    function getstep() {
        return [
            "Basic Infomation",
            "Eduction",
            "Experience",
            "Last Step"
        ]
    }
    function getStepContent(step) {
        switch (step) {
            case 0:
                return <BasicInfo />;
            case 1:
                return <Eduction />;
            case 2:
                return <Experience />;
            case 3:
                return <LastStep />;
            default:
                return "Unknown Step";
        }
    }
    const steps = getstep();
    const [ActiveStep, SetActiveStep] = useState(0);
    const handleNext = () => {
        SetActiveStep(ActiveStep + 1);
    }
    const handleBack = () => {
        SetActiveStep(ActiveStep - 1);
    }
    return (
        <>
            <div className='wizard-bg'>
                <div className='wizard-box'>
                    <div className='stepper-container'>
                        <div className='stepper-content'>
                            <Stepper alternativeLabel activeStep={ActiveStep} connector={<ColorlibConnector />}>
                                {steps.map((label) => (
                                    <Step key={label}>
                                        <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        </div>
                        <div className='stepper-bottom-progressbar'>
                            <motion.div
                                className='stepper-progress'
                                animate={{ width: ActiveStep === 0 ? "10%" : ActiveStep === 1 ? "38%" : ActiveStep === 2 ? "65%" : "100%" }}
                                transition={{ duration: 0.5 }}
                            >
                            </motion.div>
                        </div>
                    </div>
                    <div className='form-content-body'>
                        {ActiveStep === 4 ? "Thank You " :
                            <>
                                <div className='form-div'>
                                    <form>
                                        {getStepContent(ActiveStep)}
                                    </form>
                                </div>
                                <div className="button-group" style={{marginTop : ActiveStep === 0  ? '5rem' : ActiveStep === 1 ? '7rem' : ActiveStep === 2 ? "27rem" : "8rem"}}>
                                    <div className='row wizard-button'>
                                        <div className='col-6'>
                                            <button className='wizard-previousbutton' onClick={handleBack} disabled={ActiveStep === 0}>
                                                <i className="fa-solid fa-angle-left"></i>  Previous
                                            </button>
                                        </div>
                                        <div className='col-6'>
                                            <button className='wizard-nextbutton' onClick={handleNext}>{ActiveStep === 4 ? "Finish" : "Next"}
                                                <i className="fa-solid fa-angle-right"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>



                            </>
                        }
                    </div>


                </div>
            </div>


        </>)
}

