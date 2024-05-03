import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
//data
//icons
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
//styles
import '../../styles/ListEntry.css'


const style = {
    p: 0,
    width: '100%',
    maxWidth: '100%',
    borderRadius: 2,
    border: '1px solid',
    borderColor: 'divider',
    backgroundColor: 'background.paper',
};

export default function ListDividers({ data, updateData }) {

    function handleChangeIcon(entryData) {
        updateData(data.map((entry) => {

            if (entry.name == entryData.name) {
                console.log(entryData);

                return { ...entry, showOnCV: !entryData.showOnCV }
            }
            else return entry
        }))
    }

    return (
        <List sx={style} aria-label="mailbox folders">
            {
                data.map((entry, index) => {

                    return (
                        <>
                            <ListItem key={index} onClick={() => console.log(index)}  >
                                <ListItemText primary={entry.name}></ListItemText>
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
    );
}