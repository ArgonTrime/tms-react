import { useCallback, useState } from "react";

const useInputText = (initialValue) => {
  const [inputText, setInputText] = useState(initialValue);
  const handleTextEditing = useCallback((event) => {
    setInputText(event.target.value);
  }, []);
  const handleTextClear = useCallback(() => {
    setInputText("");
  }, []);
  return {
    inputText,
    handleTextEditing,
    handleTextClear,
  };
};
export default useInputText;
