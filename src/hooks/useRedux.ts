import { useDispatch, useSelector,TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "../store/store";


// use through app instead of plain `useDispatch` and `useSelector`

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;