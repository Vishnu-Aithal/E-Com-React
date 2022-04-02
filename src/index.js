import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "contexts/auth-context";
import { ConditionalRouter } from "routes/AuthRouteHandler";

// Call make Server
makeServer();

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <ConditionalRouter />
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
