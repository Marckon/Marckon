import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import bannerUrl from '../../banner.jpg';
import { useScroll } from '../../useHooks/useScroll';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pageBackGround: {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: -1,
    },
    bgImage: {
      height: '45vh',
      overflow: 'hidden',
    },
  })
);

export const PageBackGround = () => {
  const classes = useStyles();
  const positions = useScroll();

  return (
    <div className={classes.pageBackGround}>
      <div className={classes.bgImage} style={{ transform: `translate3d(0px, ${-positions.windowTop * 0.5}px, 0px)` }}>
        <img src={bannerUrl} alt="" width="100%" />
      </div>
    </div>
  );
};
