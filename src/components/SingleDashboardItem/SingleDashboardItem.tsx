import React, { FunctionComponent } from 'react';
import { Typography, Card, CardContent, Grid } from '@mui/material';

import { IDashboardData } from '../../definitions';

import useStyles from '../../styles/styles';

type TSingleDashboardItem = {
  data: IDashboardData;
};

const Dashboard: FunctionComponent<TSingleDashboardItem> = ({ data }) => {
  const classes = useStyles();
  const { name, id, company } = data;
  return (
    <Grid item key={id} xs={12} sm={6} md={4} lg={3}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5">
            {name}
          </Typography>
          <Typography>{company}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Dashboard;
