import React, { useRef } from 'react';
import { useScroll } from '../../useHooks/useScroll';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useAvatarHide } from '../../useHooks/useAvatarHide';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      width: '30vw',
      height: '30vw',
      maxWidth: '160px',
      maxHeight: '160px',
      minHeight: '80px',
      minWidth: '80px',
      boxShadow: '0 0 30px rgba(0,0,0,0.65)',
      borderRadius: '100%',
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
  const { isHide, setHide } = useAvatarHide();

  /* 滚动到64px（header高度）设置隐藏 */
  if (position.elementTop && position.elementTop <= 64 && !isHide) {
    setHide(true);
  }

  if (position.elementTop && position.elementTop > 64 && isHide) {
    setHide(false);
  }
  return <div className={`${classes.avatar} ${props.className}`} ref={avatarDOM}></div>;
};
