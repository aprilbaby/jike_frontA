import React from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import Courses from '../components/Courses';
import withLayout from '../lib/withLayout';
import restClient from '../lib/restClient';

const styles = {
  headline: {
    marginTop: 30,
    textAlign: 'center'
  },
  subtitle: {
    marginTop: 20,
    textAlign: 'center'
  }
};

function Home({ classes, history }) {
  return (
    <div>
      <Typography className={classes.headline} variant="h4" component="h4">
        Development
      </Typography>
      <Typography className={classes.subtitle} variant="h6" component="p">
        Get the Technology and Creative Skills you need to launch a career by learning from industry
        experts.
      </Typography>

      <Courses history={history} />
    </div>
  );
}

export default withLayout(withStyles(styles)(Home));
