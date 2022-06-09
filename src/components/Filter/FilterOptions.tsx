import { useFilter } from "contexts/filter-context";
import { useEffect } from "react";
import { Product } from "types/Product";

export const FilterOptions: React.FC = () => {
    const ratings = [4, 3, 2, 1];
    const categories = ["Sports", "Casual", "Formal"];
    const brands = ["Hike", "Adibas", "WoodSky"];
    const types = ["Shoes", "Pant", "Shirt"];
    const {
        filterState: {
            data: { fromServer: products },
            filters,
            sorters,
        },
        filterDispatch: dispatch,
    } = useFilter();
    const getMaxMinPrice = (products: Product[]) => {
        const prices = products.map((product) => parseFloat(product.price));
        const maxPrice = Math.ceil(Math.max(...prices) / 100) * 100;
        const minPrice = Math.floor(Math.min(...prices) / 100) * 100;
        return { maxPrice, minPrice };
    };
    const { maxPrice, minPrice } = getMaxMinPrice(products);
    useEffect(() => {
        dispatch({ type: "PROCESS" });
    }, [filters, sorters, dispatch]);

    //Clear Products and Filter from State on Unmount
    useEffect(() => {
        return () => {
            dispatch({ type: "LOAD_DATA", payload: [] });
            dispatch({ type: "CLEAR_FILTERS" });
        };
    }, [dispatch]);
    return (
        <aside className="filter">
            <div className="filter__header m-2">
                <h4 className="heading-xs text-bold">Filters</h4>
                <p
                    className="filter__clear ms-auto"
                    onClick={() => dispatch({ type: "CLEAR_FILTERS" })}>
                    Clear
                </p>
            </div>
            <div className="filter__price m-2">
                <h4 className="heading-xs text-bold">Price</h4>
                <input
                    className="filter__price-slider"
                    type="range"
                    min={minPrice}
                    max={maxPrice}
                    list="price-steps"
                    value={filters.priceRange || maxPrice}
                    onChange={(e) =>
                        dispatch({
                            type: "SET_PRICE_RANGE",
                            payload: e.target.value,
                        })
                    }
                />
                <datalist id="price-steps">
                    <option
                        value={minPrice}
                        label={minPrice.toString()}></option>
                    <div className="text-bold text-md">
                        {filters.priceRange ?? maxPrice}
                    </div>
                    <option
                        value={maxPrice}
                        label={maxPrice.toString()}></option>
                </datalist>
            </div>
            <div className="filter__category m-2">
                <h4 className="heading-xs text-bold">Category</h4>
                {categories.map((category) => (
                    <label key={category}>
                        <input
                            type="checkbox"
                            onChange={() =>
                                dispatch({
                                    type: "CATEGORY",
                                    payload: category,
                                })
                            }
                            checked={filters.category.includes(category)}
                        />{" "}
                        {category}
                    </label>
                ))}
            </div>
            <div className="filter__category m-2">
                <h4 className="heading-xs text-bold">Brand</h4>
                {brands.map((brand) => (
                    <label key={brand}>
                        <input
                            type="checkbox"
                            onChange={() =>
                                dispatch({
                                    type: "BRAND",
                                    payload: brand,
                                })
                            }
                            checked={filters.brand.includes(brand)}
                        />{" "}
                        {brand}
                    </label>
                ))}
            </div>
            <div className="filter__category m-2">
                <h4 className="heading-xs text-bold">Type</h4>
                {types.map((type) => (
                    <label key={type}>
                        <input
                            type="checkbox"
                            onChange={() =>
                                dispatch({
                                    type: "TYPE",
                                    payload: type,
                                })
                            }
                            checked={filters.type.includes(type)}
                        />{" "}
                        {type}
                    </label>
                ))}
            </div>
            <div className="filter__rating m-2">
                <h4 className="heading-xs text-bold">Rating</h4>
                {ratings.map((rating) => (
                    <label key={rating}>
                        <input
                            type="radio"
                            name="filter-rating"
                            checked={filters.rating === rating}
                            onChange={() =>
                                dispatch({
                                    type: "SET_RATING",
                                    payload: rating,
                                })
                            }
                        />{" "}
                        {rating} Stars & Above
                    </label>
                ))}
            </div>
            <div className="filter__sort m-2">
                <h4 className="heading-xs text-bold">Sort By Price</h4>
                <label>
                    <input
                        type="radio"
                        name="price-sort"
                        checked={sorters.byPrice === "low-to-high"}
                        onChange={() =>
                            dispatch({
                                type: "SORT_BY_PRICE",
                                payload: "low-to-high",
                            })
                        }
                    />{" "}
                    Price - Low to High
                </label>
                <label>
                    <input
                        type="radio"
                        name="price-sort"
                        checked={sorters.byPrice === "high-to-low"}
                        onChange={() =>
                            dispatch({
                                type: "SORT_BY_PRICE",
                                payload: "high-to-low",
                            })
                        }
                    />{" "}
                    Price - High to Low
                </label>
            </div>
            <div className="filter__sort m-2">
                <h4 className="heading-xs text-bold">Sort By Rating</h4>
                <label>
                    <input
                        type="radio"
                        name="rating-sort"
                        checked={sorters.byRating === "low-to-high"}
                        onChange={() =>
                            dispatch({
                                type: "SORT_BY_RATING",
                                payload: "low-to-high",
                            })
                        }
                    />{" "}
                    Rating - Low to High
                </label>
                <label>
                    <input
                        type="radio"
                        name="rating-sort"
                        checked={sorters.byRating === "high-to-low"}
                        onChange={() =>
                            dispatch({
                                type: "SORT_BY_RATING",
                                payload: "high-to-low",
                            })
                        }
                    />{" "}
                    Rating - High to Low
                </label>
            </div>
            <div className="filter__category m-2">
                <h4 className="heading-xs text-bold">Other</h4>
                <label>
                    <input
                        type="checkbox"
                        onChange={() =>
                            dispatch({
                                type: "SHOW_OUT_OF_STOCK",
                            })
                        }
                        checked={filters.showOutOfStock}
                    />{" "}
                    Show Out Of Stock
                </label>
            </div>
        </aside>
    );
};
