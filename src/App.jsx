import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardLayout from "./layout/Dashboard/DashboardLayout";

import { publicRoutes, privateRoutes } from "./router";
import { Fragment } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Layout = DashboardLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                                path={route.path}
                            />
                        );
                    })}

                    {privateRoutes.map((route, index) => {
                        let Layout = DashboardLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                element={
                                    <PrivateRoute>
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    </PrivateRoute>
                                }
                                path={route.path}
                            />
                        );
                    })}
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
