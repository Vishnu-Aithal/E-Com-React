import { TopNav } from "./components/Layout/TopNav";
import { Outlet } from "react-router-dom";
import "./index.css";

import { Loader } from "components/Loader/Loader";
import { ToastContainer } from "components/Toast/ToastContainer";

function App() {
    return (
        <div className="App">
            <Loader />
            <main>
                <TopNav />
                <Outlet />
            </main>
            <ToastContainer />
        </div>
    );
}

export default App;
