import Admin from "./pages/Admin";
// components
import DevicePage from "./pages/DevicePage";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
// utils
import {ADMIN_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE, SHOP_ROUTE} from "./utils/consts";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: <Admin />
    }
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: <Shop />
    },
    {
        path: LOGIN_ROUTE,
        Component: <Auth />
    },
    {
        path: REGISTER_ROUTE,
        Component: <Auth />
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: <DevicePage />
    }
]