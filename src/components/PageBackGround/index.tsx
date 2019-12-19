import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useScroll } from '../../useHooks/useScroll';

const bannerUrl =
  'https://cn.bing.com/th?id=OHR.ValleyForge_ZH-CN8129420249_768x1024.jpg&rf=LaDigue_1920x1080.jpg&pid=hp';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pageBackGround: {
      height: '50vh',
      overflow: 'hidden',
      zIndex: -1,
      backgroundImage: `url(${bannerUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
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
