import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store/store.js"   
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

export const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
   <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
   <BrowserRouter>
        <App />
    </BrowserRouter>
    </PersistGate>
    </Provider>
);
