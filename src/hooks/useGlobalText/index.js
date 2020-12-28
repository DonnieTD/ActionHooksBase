import { useStore } from "../../store";

export const useGlobalText = () => {
  const [{ GlobalText }, setState] = useStore();
  const setGlobalText = (text = "") => {
    setState((state) => {
      state.GlobalText = text;
    });
  };

  return [GlobalText, setGlobalText];
};
