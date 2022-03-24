import { TopNav } from "./components/TopNav";
import { Outlet } from "react-router-dom";
import "./index.css";

function App() {
    return (
        <div className="App">
            <main>
                <TopNav />
                <Outlet />
            </main>
        </div>
    );
}

export default App;
