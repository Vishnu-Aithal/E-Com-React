import { TopNav } from "./components/TopNav";
import { Outlet } from "react-router-dom";
import "./index.css";

import { Loader } from "components/Loader";

function App() {
    return (
        <div className="App">
            <Loader />
            <main>
                <TopNav />
                <Outlet />
            </main>
        </div>
    );
}

export default App;
