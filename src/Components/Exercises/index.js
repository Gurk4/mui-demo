import React from 'react';
import { Grid, Paper, Typography } from 'material-ui';

import LeftPane from './LeftPane';
import RightPane from './RightPane';

const styles = {
  paper: {
    padding: 20,
    margin: 10
  }
};

export default ({ exercises }) => (
  <Grid container>
    <Grid item xs>
      <Paper style={styles.paper}>
        {exercises.map(([group, exercises]) => (
          <Typography>{group}</Typography>
        ))}
      </Paper>
    </Grid>
    <Grid item xs>
      <RightPane styles={styles} />
    </Grid>
  </Grid>
);
