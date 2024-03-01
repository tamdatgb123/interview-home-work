import React from "react";
import {
    RouterProvider,
    createBrowserRouter,
} from "react-router-dom";
import Layout from "../Layout";
import HomePage from "../pages/HomePage";

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <Layout>
                    <HomePage />
                </Layout>
            )
        }
    ]);

    return <RouterProvider router={router} />;
}

export default Routes;