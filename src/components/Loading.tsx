import React from 'react';
import { tss } from '../tss';
import { keyframes } from 'tss-react';

export const Loading = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <span className={classes.spinner} />
      <h1>Loading...</h1>
    </div>
  );
};

const useStyles = tss.create(({ theme }: any) => ({
  root: {
    ...theme.flex,
    ...theme.flex.column,
    height: '100%',
    color: theme.color.text.secondary,
  },

  spinner: {
    width: '48px',
    height: '48px',
    border: '5px solid',
    borderColor: theme.color.text.secondary,
    borderBottomColor: 'transparent',
    borderRadius: '50%',
    display: 'inline-block',
    boxSizing: 'border-box',
    animation: `${spinnerRotation} 1s linear infinite`,
  },
}));

const spinnerRotation = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
});
