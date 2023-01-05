import { useState } from 'react';

//-----------------------------------------------------------
// type
//-----------------------------------------------------------
export type IUseDisabled = {
  disabled: boolean;
  diabledStart: () => void;
  diabledEnd: () => void;
};

//-----------------------------------------------------------
// hooks
//-----------------------------------------------------------
export const useDisabled = (): IUseDisabled => {
  const [disabled, setDisabled] = useState<boolean>(false);

  //-----------------------------------------------------------
  // 処理が終わるまでボタンを無効化する
  //-----------------------------------------------------------
  const diabledStart = (): void => {
    setDisabled(true);
  };

  //-----------------------------------------------------------
  // 無効化を解除する
  //-----------------------------------------------------------
  const diabledEnd = (): void => {
    setDisabled(false);
  };

  return {
    disabled,
    diabledStart,
    diabledEnd
  };
};
