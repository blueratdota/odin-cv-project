import * as React from 'react';
import { useImmer } from 'use-immer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
//data
//icons
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
//styles
import '../../styles/ListEntry.css'
import EditEducDetails from '../education-info/EditEducDetails';
import EditExpDetails from '../experience-info/EditExpDetails';


const style = {
    p: 0,
    width: '100%',
    maxWidth: '100%',
    borderRadius: 2,
    border: '1px solid',
    borderColor: 'divider',
    backgroundColor: 'background.paper',
};

export default function ListDividers({ data, updateData, changeMode, currentMode, type }) {
    const [editMode, setEditMode] = React.useState(false)
    const [toBeEdited, setToBeEdited] = useImmer('')

    function handleChangeIcon(entryData) {
        updateData(data.map((entry) => {

            if (entry.name == entryData.name) {
                console.log(entryData);

                return { ...entry, showOnCV: !entryData.showOnCV }
            }
            else return entry
        }))
    }

    function EditDetails(entryData) {
        setEditMode(true)
        setToBeEdited(entryData)
    }

    //button area function
    function AddButton() {
        return (<div className='button-container'>
            <Button variant="outlined" sx={{ p: 1, maxWidth: 140 }} onClick={handleClick}>

                <span className="material-symbols-outlined">
                    add_circle
                </span>
                Add Entry
            </Button>
        </div>)
    }
    function AnotherButton() {
        return (<div className='button-container'>
            <Button variant="outlined" sx={{ p: 1, maxWidth: 140 }} onClick={handleClick}>
                Cancel
            </Button>
        </div>)

    }
    function handleClick() {
        console.log(currentMode);
        if (currentMode == 'show') {
            changeMode('edit')
        }
        else changeMode('show')

    }

    if (!editMode) {
        return (
            <>
                <List sx={style} aria-label="mailbox folders">
                    {
                        data.map((entry, index) => {

                            return (
                                <>
                                    <ListItem key={index}>
                                        <ListItemText primary={entry.name} onClick={(e) => EditDetails(entry)}></ListItemText>
                                        <div onClick={(e) => handleChangeIcon(entry)} >{
                                            entry.showOnCV ? <VisibilityIcon /> : <VisibilityOffIcon />}</div>

                                    </ListItem >

                                    {index + 1 !== data.length ? <Divider component="li" /> : null
                                    }
                                </>


                            )
                        })
                    }


                </List >
                {currentMode == 'show' ? <AddButton /> : <AnotherButton />
                }
            </>


        );
    }
    else {
        if (type == 'educ') {
            return (
                <>
                    <EditEducDetails initialData={toBeEdited} data={data} updateData={updateData} updateMode={setEditMode} />
                </>
            )
        }
        if (type == 'exp') {
            return (
                <>
                    <EditExpDetails initialData={toBeEdited} data={data} updateData={updateData} updateMode={setEditMode} />
                </>
            )
        }

    }




}