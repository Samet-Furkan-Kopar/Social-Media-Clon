import { store } from "../store/store.js";
// import { useDispatch } from "react-redux";
import { userActions } from "../store/user/userSlice.js";

export const userHandle = (data) => {
    
    store.dispatch(userActions.setUser({ data }));
};

export const clearState = () => {
    localStorage.clear();
    localStorage.removeItem("persist:root");
    store.dispatch(userActions.logout());
};
