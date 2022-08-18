import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

// Note I copy pasted this from material UI site
export default function ControlledCheckbox({updateStocksToDisplay, name}) {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    updateStocksToDisplay(name, event.target.checked)
  };

  return (
    <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
}