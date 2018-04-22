import React, { Fragment } from 'react';
import { Grid, Paper, Typography, List } from 'material-ui';
import { ListItem, ListItemText } from 'material-ui/List';

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
          <Fragment>
            <Typography
              variant="headline"
              style={{ textTransform: 'capitalize' }}
            >
              {group}
            </Typography>
            <List component="ul">
              {exercises.map(({ title }) => (
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              ))}
            </List>
          </Fragment>
        ))}
      </Paper>
    </Grid>
    <Grid item xs>
      <RightPane styles={styles} />
    </Grid>
  </Grid>
);
