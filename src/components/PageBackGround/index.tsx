import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import bannerUrl from '../../banner.jpg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pageBackGround: {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
    bgImage: {},
  })
);

export const PageBackGround = () => {
  const classes = useStyles();

  return (
    <div className={classes.pageBackGround}>
      <img src={bannerUrl} alt="" width="100%" height="600px" />
    </div>
  );
};
