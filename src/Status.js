import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export function Status() {
  const [status, setStatus] = React.useState('');

  const handleChange = (event) => {
  setStatus(event.target.value)
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Lead Status</InputLabel>
        <Select
          value={status}
          label="Lead Status"
          onChange={handleChange}
        >
          <MenuItem value="new">New</MenuItem>
          <MenuItem value="Contacted">Contacted</MenuItem>
          <MenuItem value="Qualified">Qualified</MenuItem>
          <MenuItem value="Lost">Lost</MenuItem>
          <MenuItem value="Cancelled">Cancelled</MenuItem>
          <MenuItem value="Confirmed">Confirmed</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
