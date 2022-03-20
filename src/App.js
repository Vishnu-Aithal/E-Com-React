import "./App.css";
import { Card } from "./components/Card";
import { TopNav } from "./components/TopNav";
import { FilterOptions } from "./components/FilterOptions";
import { Hero } from "./components/Hero";

function App() {
    return (
        <div className="App">
            <Hero />
            <FilterOptions />
            <TopNav />
            <Card type="home-page" badge="70% off" />
            <Card type="listing" inWishlist={false} />
        </div>
    );
}

export default App;
