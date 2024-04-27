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




export default function AccordionUsage({ title, children, editForm }) {
    const [display, setDisplay] = React.useState('show')
    const [mode, setMode] = React.useState('show')

    function displayThis() {
        if (mode == 'show') {
            return (
                <>
                    {children}
                    <div className='button-container'>
                        <Button variant="outlined" sx={{ p: 1, maxWidth: 140 }} onClick={() => setMode('edit')}>

                            <span className="material-symbols-outlined">
                                add_circle
                            </span>
                            Add Entry
                        </Button>
                    </div>

                </>


            )
        }
        else {
            return (
                <>
                    {editForm}
                    <div className='button-container'>
                        <Button variant="outlined" sx={{ p: 1, maxWidth: 140 }} onClick={() => setMode('show')}>Add Entry</Button>
                    </div>

                </>
            )
        }
    }

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
                    {displayThis()}
                </AccordionDetails>
            </Accordion>
        </div >
    );
}