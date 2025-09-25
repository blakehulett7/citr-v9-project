import { useState } from "react";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { CartContext } from "../contexts.jsx";

import Header from "../Header.jsx";
import PizzaOfTheDay from "../PizzaOfTheDay.jsx";

export const Route = createRootRoute({
    component: function () {
        const cartHook = useState([]);
        return (
            <>
                <CartContext.Provider value={cartHook}>
                    <div>
                        <Header />
                        <Outlet />
                        <PizzaOfTheDay />
                    </div>
                </CartContext.Provider>
                <TanStackRouterDevtools />
            </>
        );
    },
});
