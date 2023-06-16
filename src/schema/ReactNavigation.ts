import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import TradeType from "./products/TradeType";
import { RootState } from "../store/store";
import ITrade from "./products/ITrade";

export type RootStackParamList = {
    Welcome: undefined;
    Login: undefined;
    SignUp: undefined;
    Home: undefined;
    AllProducts: undefined;
    CreateProduct: undefined;
    CreateTrade: {
        productId: string;
        tradeType: TradeType;
        trade: ITrade | null;
    };
    Details: {
        productId: string;
        name: string;
    };
};

export type LoginScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    "Login"
>;

export type SignUpScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    "SignUp"
>;

export type WelcomeScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    "Welcome"
>;

export type DetailsScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    "Details"
>;

export type CreateProductScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    "CreateProduct"
>;

export type CreateTradeScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    "CreateTrade"
>;

export type DetailsScreenRouteProp = RouteProp<RootStackParamList, "Details">;

export type CreateTradeScreenRouteProp = RouteProp<
    RootStackParamList,
    "CreateTrade"
>;
