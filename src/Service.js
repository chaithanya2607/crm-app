import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export function Service() {
  const [service, setService] = React.useState('');

  const handleChange = (event) => {
  setService(event.target.value)
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Service Request</InputLabel>
        <Select
          value={service}
          label="Service Request"
          onChange={handleChange}
        >
          <MenuItem 
          >Created</MenuItem>
          <MenuItem value="Open">Open</MenuItem>
          <MenuItem value="In process">In process</MenuItem>
          <MenuItem value="Released">Released</MenuItem>
          <MenuItem value="Cancelled">Cancelled</MenuItem>
          <MenuItem value="Completed">Completed</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
