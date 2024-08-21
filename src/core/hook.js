// custom hook
// lấy State của context
// useSeletor()

// lấy dispatch của context
// useDispatch()
import { useContext } from "react";
import { ProviderContext } from "./Provider";

// lấy dispath của context
// useDispatch()
export const useSelector = () => {
    const {state} = useContext(ProviderContext);
    return state;
};

export const useDispatch = () => {
    const {dispatch} = useContext(ProviderContext);
    return dispatch;
}