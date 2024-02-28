import React from "react";
import {
  Route,
  createHashRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";
// Wrappers
import PrivateRoute from "./components/private.route.component";
import AuthListener from "./components/app.wrapper";
// Layouts
import DefaultLayout from "./routes/root/defaultlayout";
import AuthLayout from "./routes/root/auth/authlayout";
// Pages
import Home from "./routes/root/home";
import Signin from "./routes/root/auth/signin";
import About from "./routes/root/about";

function App() {
  return createHashRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<AuthListener />}>
          <Route path="/" element={<DefaultLayout />}>
            <Route
              index
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="/about"
              element={
                <PrivateRoute>
                  <About />
                </PrivateRoute>
              }
            />
          </Route>
          <Route path="/auth" element={<AuthLayout />}>
            <Route index element={<Navigate to="/auth/signin" />} />
            <Route path="/auth/signin" element={<Signin />} />
          </Route>
        </Route>
      </Route>,
    ),
  );
}

export default App;
