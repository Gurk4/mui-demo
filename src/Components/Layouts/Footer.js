import React from 'react';
import { Paper, Tabs } from 'material-ui';
import { Tab } from 'material-ui/Tabs';

export default ({ muscles, onChange, category }) => {
  const tabIndex = category ? muscles.findIndex(e => e === category) + 1 : 0;
  return (
    <Paper style={{ overflowX: 'auto' }}>
      <Tabs
        value={tabIndex}
        onChange={(e, value) => {
          onChange(value ? muscles[value - 1] : null);
        }}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="all" />
        {muscles.map(group => <Tab label={group} />)}
      </Tabs>
    </Paper>
  );
};
