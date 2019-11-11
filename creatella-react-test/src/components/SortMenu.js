import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const productsSortOption = [
    {
        value: 'id',
        label: 'Id'
    },
    {
        value: 'size',
        label: 'Size'
    },
    {
        value: 'price',
        label: 'Price',
    },
];

const useStyles = makeStyles(theme => ({
    container: {
        
    },
    textField: {
        marginLeft: 13,
        marginRight: theme.spacing(1),
        width: 200,
        position: 'fixed',
        marginTop: 70
    },
    menu: {
        width: 200,
    },
}));

const SortMenu = (props) => {
    const classes = useStyles();
    return (
        <div>
            <TextField
                id="sort"
                select
                label="Sort by"
                className={classes.textField}
                value={props.sortOption || ''}
                onChange={(e) => props.handleChange(e)}
                SelectProps={{
                    MenuProps: {
                        className: classes.menu,
                    },
                }}
                helperText="Please select any sort option"
                margin="normal"
            >
                {productsSortOption.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
        </div>

    );
}
export default SortMenu 