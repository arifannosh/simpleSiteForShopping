import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const modalCloseBtn = {
  position: 'absolute',
  right: 0,
  top: 5,
  zIndex: 2,
  border: 'none',
  color: 'white',
  background: 'transparent'
}

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    position: 'fixed',
    padding: 8,
    color: theme.palette.text.secondary,
  }
});

class SimpleModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      open: true,
    };
  }

  handleClose() {
    this.setState({ open: false });
    this.props.modalControle();
  }

  render() {
    const { classes } = this.props;
    return (
      <div style={{ display: this.state.open ? "block" : 'none',float:"right",marginRight:278,marginTop: 70}}>
        <Paper className={classes.paper} >
          <Button style={modalCloseBtn} size="small" variant="outlined" onClick={this.handleClose}>X</Button>
          <>{this.props.contant}</>
        </Paper>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;