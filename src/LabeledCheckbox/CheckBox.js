import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import './LabeledCheckbox.css'

export default function ControlledCheckbox({ updateStocksToDisplay, name }) {
    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
        updateStocksToDisplay(name, event.target.checked)
    };
    
    let cssClass = 'unselected'
    if(checked){
        cssClass = 'selected'
    }else{
        cssClass ='unselected'
    }
    return (
        <div className='labeled-checkbox'>
            <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <div className={cssClass}>
                {name}
            </div>
        </div>
    );
}