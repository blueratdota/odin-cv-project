import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

// my imports

// my functions




export default function AccordionUsage({ title, children, editForm, data, changeMode, currentMode }) {

    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                >
                    <h2 className='accordion-header'>{title}</h2>
                </AccordionSummary>

                <AccordionDetails className='accordion-details'>
                    {children}

                </AccordionDetails>
            </Accordion>
        </div >
    );
}