import { Switch } from '@mui/material';
import React from 'react';
import './SelectionToggler.css'

export function SelectionToggler({selection, setSelection}){
    return <div className="switch">
        <p>left image</p>
        <Switch onChange={ () => {
            setSelection(!selection)}}/>
        <p>right image</p>
        </div>
}