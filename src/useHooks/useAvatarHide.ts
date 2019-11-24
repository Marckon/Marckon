import React, { useReducer } from 'react';

interface UseAvatarHideState {
  isHide: boolean;
}

export enum AvatarReducerAction {
  'Hide',
  'Show',
}

export function avatarReducer(state: UseAvatarHideState, action: AvatarReducerAction) {
  switch (action) {
    case AvatarReducerAction.Hide:
      return { isHide: true };
    case AvatarReducerAction.Show:
      return { isHide: false };
  }
}

export function useAvatarHide(): { isHide: boolean; dispatch: (action: AvatarReducerAction) => void } {
  const [state, dispatch] = useReducer(avatarReducer, {
    isHide: false,
  });

  return { isHide: state.isHide, dispatch };
}
