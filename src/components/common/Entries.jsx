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

export default function ListDividers({ data }) {


    return (
        <List sx={style} aria-label="mailbox folders">
            {
                data.map((x, index) => {
                    const [icon, setIcon] = React.useState('visible')

                    function handleChangeIcon() {
                        if (icon == 'visible') {
                            setIcon('not visible')
                        }
                        else setIcon('visible')


                    }

                    return (
                        <>
                            <ListItem >
                                <ListItemText primary={x.name}></ListItemText>
                                <div onClick={() => handleChangeIcon()}>{
                                    icon == 'visible' ? <VisibilityIcon /> : <VisibilityOffIcon />}</div>

                            </ListItem >
                            {index + 1 !== data.length ? <Divider component="li" /> : null
                            }
                        </>


                    )
                })
            }

            {/* <ListItem>
                <ListItemText primary="Inbox" />
            </ListItem>
            <Divider component="li" />
            <ListItem>
                <ListItemText primary="Drafts" />
            </ListItem>
            <Divider component="li" />
            <ListItem>
                <ListItemText primary="Trash" />
            </ListItem>
            <Divider component="li" />
            <ListItem>
                <ListItemText primary="Spam" />
            </ListItem> */}
        </List >
    );
}