import { TopNav } from "./components/TopNav";
import { Outlet } from "react-router-dom";
import "./index.css";

import { Loader } from "components/Loader";
import { ToastContainer } from "components/Toast";

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
