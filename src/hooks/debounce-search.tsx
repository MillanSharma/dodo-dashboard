import { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';

function useDebounce(callback: (value: string) => void, delay: number) {
  const [searchValue, setSearchValue] = useState<string>('');

  const debouncedCallback = debounce(callback, delay);

  useEffect(() => {
    debouncedCallback(searchValue);
    return () => {
      debouncedCallback.cancel();
    };
  }, [searchValue, debouncedCallback]);

  return { searchValue, setSearchValue };
}

export default useDebounce;
