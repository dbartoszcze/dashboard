import React, { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Container, Grid } from '@mui/material';

import { IDashboardData } from '../../definitions';
import { getDataList } from '../../services/dashboardData';
import SingleDashboardItem from '../../components/SingleDashboardItem/SingleDashboardItem';

import useStyles from '../../styles/styles';

const Dashboard: FunctionComponent<RouteComponentProps> = ({ history }) => {
  const [dashboardData, setDashboardData] = useState<IDashboardData[]>([
    { id: 2, name: 'Subin', company: 'Roombo' },
    { id: 3, name: 'Stim', company: 'Leexo' },
    { id: 4, name: 'Konklux', company: 'Cogibox' },
    { id: 5, name: 'Matsoft', company: 'Mita' },
    { id: 6, name: 'Regrant', company: 'Kwideo' },
    { id: 7, name: 'Lotlux', company: 'Ailane' },
    { id: 8, name: 'Treeflex', company: 'Quinu' },
    { id: 9, name: 'Bytecard', company: 'Geba' },
    { id: 10, name: 'Duobam', company: 'Photobean' },
    { id: 11, name: 'Bitwolf', company: 'Flipbug' },
    { id: 12, name: 'Voyatouch', company: 'Linklinks' },
    { id: 13, name: 'Kanlam', company: 'Skyndu' },
  ]);

  const getDashboardData = useCallback(() => {
    try {
      const response = getDataList();

      // setDashboardData(response?.data)
      //TODO fill array by objects from response
    } catch {
      //TODO if failed alert
      return;
    } finally {
      //TODO loading stop
    }
  }, []);

  useEffect(() => {
    getDashboardData();
  }, [getDashboardData]);

  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {dashboardData?.map((dataObject: IDashboardData) => (
          <SingleDashboardItem key={dataObject.id} data={dataObject} />
        ))}
      </Grid>
    </Container>
  );
};

export default Dashboard;
