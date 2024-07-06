import { useState, useCallback, useContext } from 'react';

import type { Theme } from '../types';
import { ThemeContext } from '../context/ThemeContext';
import { useLocalStorage } from './useLocalStorage';
import { theme } from '../utils';

export const useTheme = () => {
  const { getLocalStorageValue, setLocalStorageValue } = useLocalStorage();

  const [systemTheme, setSystemTheme] = useState<Theme>(() => {
    const localTheme = getLocalStorageValue('theme');
    return localTheme ? localTheme : theme.blueDolphin;
  });

  const setTheme = useCallback(
    (value: Theme) => {
      setSystemTheme(value);
      setLocalStorageValue('theme', value);
    },
    [setSystemTheme, setLocalStorageValue]
  );

  return { systemTheme, setTheme };
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
