import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignItems: 'center',
    // verticalAlign: '',
    backgroundColor: 'rgba(214, 219, 178)',
    width: '500px',
    height: '500px',
    borderStyle: 'solid',
    borderColor: 'black',
    marginTop: '20px',
    paddingTop: '30px',
    paddingLeft: '20px',
    paddingRight: '10px',
    margin: '0 auto',
    
    
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '125px'
  },
}));

export function HomePage() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}>hello</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (

    <div>
            <div className="tic-tac-toe-header"><h1>tic-Tac-toe</h1></div>
        <div className={classes.root}>
            <div className="black-box">
                <Grid container spacing={1}>
                    <Grid container item xs={12} spacing={1}>
                    <FormRow />
                    </Grid>
                    <Grid container item xs={12} spacing={1}>
                    <FormRow />
                    </Grid>
                    <Grid container item xs={12} spacing={1}>
                    <FormRow />
                    </Grid>
                </Grid>
            </div>
        </div>
    </div>
  );
}
