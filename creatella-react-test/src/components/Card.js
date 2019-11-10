import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import * as money from '../utils/money'
import * as timestamp from '../utils/timestamp'

const useStyles = makeStyles({
  card: {
    minWidth: 180,
    height: 180,
    margin:12,
    color: 'black',
    background: '#f8fff7'
  },
  pos: {
    marginBottom: 12,
  },
});

 const SimpleCard =(props) =>{
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2" style={{fontSize: `${props.size}px` ,textAlign: 'center',marginBottom: 20,minHeight:60}}>
         {props.face}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        $ { money.fromCents(props.price) }
        </Typography>
        <Typography variant="body2" component="p">
        { timestamp.fromNow(props.date) }
        </Typography>
      </CardContent>
    </Card>
  );
}
export default SimpleCard 