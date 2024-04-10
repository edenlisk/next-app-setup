'use client'
import { Provider } from "react-redux";
import { store } from "./store";
import {setupListeners} from "@reduxjs/toolkit/query";

setupListeners(store.dispatch);
function Providers({children}: {children: React.ReactNode}) {
    return <Provider store={store}>{children}</Provider>;
}

export default Providers;