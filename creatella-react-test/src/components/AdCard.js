import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import SimpleModalWrapped from './Modal'

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const AdMediaCard = (props) => {
  const classes = useStyles();
  if (props.isAd && props.adUrl) {
    return (
      <SimpleModalWrapped
        modalControle={props.modalControle}
        contant={
          <Card className={classes.card}>
            <CardActionArea>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Ads
              </Typography>
              <CardMedia
                className={classes.media}
                image={props.adUrl}
                title=""
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  But first, a word from our sponsors:
              </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        }
      />)
  } else {
    return null
  }

}
export default AdMediaCard