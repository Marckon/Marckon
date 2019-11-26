import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import bannerUrl from '../../banner.jpg';
import { useScroll } from '../../useHooks/useScroll';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pageBackGround: {
      height: '50vh',
      overflow: 'hidden',
      zIndex: -1,
      backgroundImage: `url(${bannerUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      filter: 'blur(5px) blur(0px)',
    },
  })
);

export const PageBackGround = () => {
  const classes = useStyles();
  const positions = useScroll();

  return (
    <div
      className={classes.pageBackGround}
      style={{ transform: `translate3d(0px, ${-positions.windowTop * 0.5}px, 0px)` }}
    />
  );
};
