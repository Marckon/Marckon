import { useState } from 'react';
import { Subject } from 'rxjs';

const subject = new Subject<boolean>();

export const useAvatarHide = (): { isHide: boolean; setHide: (isHide: boolean) => void } => {
  const [state, setState] = useState(false);

  subject.subscribe({
    next: (isHide: boolean) => {
      setState(isHide);
    },
  });

  return {
    isHide: state,
    setHide: isHide => subject.next(isHide),
  };
};
