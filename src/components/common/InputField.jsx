import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields({
    label,
    required,
    className,
    defaultValue,
    onChange
}) {
    return (
        <Box
            // sx={{
            //     '& > :not(style)': { p: 1, m: 1 },
            // }}
            noValidate
            autoComplete="off"
        >
            <TextField fullWidth label={label} variant="outlined" defaultValue={defaultValue} onChange={onChange} />




            {/* <TextField id="filled-basic" label="Filled" variant="filled" />
            <TextField id="standard-basic" label="Standard" variant="standard" /> */}
        </Box>
    );
}