import { configureStore } from "@reduxjs/toolkit";
import user from "./reducer/user/userSlice";
import products from "./reducer/products/productsSlice";
import appConfig from "./reducer/appConfig/appConfigSlice";

const store = configureStore({
    reducer: {
        appConfig: appConfig,
        user: user,
        products: products,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
