import { useState } from 'react';

//-----------------------------------------------------------
// type
//-----------------------------------------------------------
export type IUseSearch = {
  search: string;
  panel: boolean;
  searchWord: (value: string) => void;
  searchPanel: (isOpen: boolean) => void;
};

//-----------------------------------------------------------
// hooks
//-----------------------------------------------------------
export const useSearch = (): IUseSearch => {
  const [search, setSearch] = useState<string>('');
  const [panel, setPanel] = useState<boolean>(false);

  //-----------------------------------------------------------
  // 検索ワードをセットする
  //-----------------------------------------------------------
  const searchWord = (value: string): void => {
    setSearch(value);
  };

  //-----------------------------------------------------------
  // 検索パネルをオープンする
  //-----------------------------------------------------------
  const searchPanel = (isOpen: boolean): void => {
    setPanel(!isOpen);
  };

  return {
    search,
    panel,
    searchWord,
    searchPanel
  };
};
