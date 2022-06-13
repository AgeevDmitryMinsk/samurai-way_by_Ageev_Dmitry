import {AppRootStateType} from "../redux/redux-store";
import {TypedUseSelectorHook, useSelector} from "react-redux";

export const useTypedSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
