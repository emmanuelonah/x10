import { useState, useCallback, useMemo } from 'react';

import Tesseract from 'tesseract.js';

export type State = {
  [imageName: string]: {
    isLoading: boolean;
    error: Error | null;
    ocrText: string | null;
    selectedImage: File | null;
  };
};

export type ContextType = {
  state: State;
  setOcrLang: React.Dispatch<React.SetStateAction<string>>;
  onImageChange: (key: string) => (event: React.ChangeEvent<HTMLInputElement>) => void;
  performOCR: (key: string) => Promise<void>;
};

export type Logger = (arg: Tesseract.LoggerMessage) => void;

export function useOcrContextValues(lang: string, _logger?: Logger) {
  const [state, setState] = useState<State>({});
  const [ocrLang, setOcrLang] = useState<string>(lang);

  const onImageChange = useCallback(function (key: string) {
    return function (event: React.ChangeEvent<HTMLInputElement>) {
      if (event.target.files && event.target.files[0]) {
        setState((prevState) => ({
          ...prevState,
          [key]: {
            ...prevState[event.target.files![0].name],
            selectedImage: event.target.files![0],
          },
        }));
      }
    };
  }, []);

  const performOCR = useCallback(
    async (key: string) => {
      const { selectedImage } = state[key];

      console.log('Got here', selectedImage);

      if (!selectedImage) return;

      setState((prevState) => ({
        ...prevState,
        [key]: { ...prevState[key], isLoading: true },
      }));

      try {
        const {
          data: { text },
        } = await Tesseract.recognize(selectedImage, ocrLang, {
          logger: (m) => console.log('OCRLogger', m),
        });

        setState((prevState) => ({
          ...prevState,
          [key]: { ...prevState[key], ocrText: text, isLoading: false },
        }));
      } catch (error) {
        setState((prevState) => ({
          ...prevState,
          [key]: { ...prevState[key], error: error as Error, isLoading: false },
        }));
      }
    },
    [ocrLang, state]
  );

  return useMemo(
    () => ({
      state,
      setOcrLang,
      onImageChange,
      performOCR,
    }),
    [onImageChange, performOCR, state]
  );
}
