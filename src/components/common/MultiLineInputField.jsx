import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function MultilineTextFields() {
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 0, width: '50%' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    id="outlined-multiline-flexible"
                    label="Multiline"
                    multiline
                    maxRows={4}
                />
                <TextField
                    id="outlined-textarea"
                    label="Multiline Placeholder"
                    placeholder="Placeholder"
                    multiline
                />

            </div>
            {/* <div>
                <TextField
                    id="filled-multiline-flexible"
                    label="Multiline"
                    multiline
                    maxRows={4}
                    variant="filled"
                />
                <TextField
                    id="filled-textarea"
                    label="Multiline Placeholder"
                    placeholder="Placeholder"
                    multiline
                    variant="filled"
                />

            </div>
            <div>
                <TextField
                    id="standard-multiline-flexible"
                    label="Multiline"
                    multiline
                    maxRows={4}
                    variant="standard"
                />
                <TextField
                    id="standard-textarea"
                    label="Multiline Placeholder"
                    placeholder="Placeholder"
                    multiline
                    variant="standard"
                />

            </div> */}
        </Box>
    );
}