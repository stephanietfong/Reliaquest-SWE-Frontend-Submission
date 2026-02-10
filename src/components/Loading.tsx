import React from 'react';
import { tss } from '../tss';

export const Loading = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <span className={classes.spinner} />
      <h1 style={{ color: 'white' }}>Loading...</h1>
    </div>
  );
};

const useStyles = tss.create(({ theme }: any) => ({
  root: {
    ...theme.loading,
  },

  spinner: {
    ...theme.loading.spinner,
  },
}));
