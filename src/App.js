import { HomePage } from "./routes/HomePage";
import { TopNav } from "./components/TopNav";
import { Outlet } from "react-router-dom";
import "./index.css";

function App() {
    return (
        <div className="App">
            <Outlet />
        </div>
    );
}

export default App;
