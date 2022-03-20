import "./App.css";
import { Card } from "./components/Card";
import { TopNav } from "./components/TopNav";
import { FilterOptions } from "./components/FilterOptions";
import { Hero } from "./components/Hero";
import { HighlightCategory } from "./components/HighlightCategory";
import { CartInfo } from "./components/CartInfo";
import { SignInForm } from "./components/SignInForm";
import { SignUpForm } from "./components/SignUpForm";

function App() {
    return (
        <div className="App">
            <Hero />
            <FilterOptions />
            <TopNav />
            <Card type="home-page" badge="70% off" />
            <Card type="listing" inWishlist={false} />
            <Card type="listing" inCart={true} />
            <Card type="cart" />
            <Card type="wishlist" />
            <HighlightCategory />
            <CartInfo />
            <SignInForm />
            <SignUpForm />
        </div>
    );
}

export default App;
