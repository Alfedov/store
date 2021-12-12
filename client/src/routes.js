import Admin from "./pages/Admin";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import Login from "./pages/Auth";
import Device from "./pages/DevicePage";

import {ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE, SHOP_ROUTE} from "./utils/consts";





export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    }
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Login
    },
    {
        path: REGISTER_ROUTE,
        Component: Login
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: Device
    }
]