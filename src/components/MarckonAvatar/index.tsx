import React, { useRef } from 'react';
import { useScroll } from '../../useHooks/useScroll';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useAvatarHide, AvatarReducerAction } from '../../useHooks/useAvatarHide';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      width: '10vw',
      height: '10vw',
      boxShadow: '0 0 0 5px rgba(0,0,0,0.65)',
      borderRadius: '10vw',
      backgroundColor: '#fff',
    },
  })
);

interface MarckonAvatarProps {
  className: string;
}

export const MarckonAvatar = (props: MarckonAvatarProps) => {
  const avatarDOM = useRef(null);
  const position = useScroll(avatarDOM.current || undefined);
  const classes = useStyles();
  const { isHide, dispatch } = useAvatarHide();

  /* 滚动到64px（header高度）设置隐藏 */
  if (position.elementTop && position.elementTop <= 64 && !isHide) {
    dispatch(AvatarReducerAction.Hide);
  }

  if (position.elementTop && position.elementTop > 64 && isHide) {
    dispatch(AvatarReducerAction.Show);
  }
  return <div className={`${classes.avatar} ${props.className}`} ref={avatarDOM}></div>;
};
