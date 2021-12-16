import React from 'react';
import { Route, Switch } from 'react-router';
import { Typography, AppBar, CssBaseline, Toolbar, Container } from '@mui/material';

import Dashboard from './Dashboard/Dashboard';
import useStyles from '../styles/styles';

const Pages = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6">Monitor dashboard</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="md" style={{ marginTop: '100px' }}>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              {/*<Route path="/detail/:id" component={Details} />*/}
              {/*  TODO details page if we navigate with id on url*/}
            </Switch>
          </Container>
        </div>
      </main>
    </>
  );
};

export default Pages;
