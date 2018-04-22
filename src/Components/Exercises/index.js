import React, { Fragment } from 'react';
import { Grid, Paper, Typography, List } from 'material-ui';
import { ListItem, ListItemText } from 'material-ui/List';

import RightPane from './RightPane';

const styles = {
  paper: {
    padding: 20,
    margin: 10,
    height: 500,
    overflowY: 'auto'
  }
};

export default ({ exercises, category, onSelect }) => (
  <Grid container>
    <Grid item xs>
      <Paper style={styles.paper}>
        {exercises.map(
          ([group, exercises]) =>
            !category || group === category ? (
              <Fragment key={group}>
                <Typography
                  variant="headline"
                  style={{ textTransform: 'capitalize' }}
                >
                  {group}
                </Typography>
                <List component="ul">
                  {exercises.map(({ title, id }) => (
                    <ListItem button key={id}>
                      <ListItemText
                        primary={title}
                        onClick={() => onSelect(id)}
                      />
                    </ListItem>
                  ))}
                </List>
              </Fragment>
            ) : null
        )}
      </Paper>
    </Grid>
    <Grid item xs>
      <RightPane styles={styles} />
    </Grid>
  </Grid>
);
