import { TopNav } from "./components/TopNav";
import { Outlet } from "react-router-dom";
import "./index.css";
import { FilterProvider } from "contexts/filter-context";

function App() {
    return (
        <div className="App">
            <main>
                <FilterProvider>
                    <TopNav />
                    <Outlet />
                </FilterProvider>
            </main>
        </div>
    );
}

export default App;
