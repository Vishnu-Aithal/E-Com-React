export const FilterOptions = ({}) => {
    return (
        <aside className="filter">
            <div className="filter__header m-2">
                <h4 className="heading-xs text-bold">Filters</h4>
                <p className="filter__clear ms-auto">Clear</p>
            </div>
            <div className="filter__price m-2">
                <h4 className="heading-xs text-bold">Price</h4>
                <input
                    className="filter__price-slider"
                    type="range"
                    min="100"
                    max="1000"
                    step="100"
                    list="price-steps"
                    name=""
                    id=""
                />
                <datalist id="price-steps">
                    <option value="100" label="100"></option>
                    <option value="200"></option>
                    <option value="300"></option>
                    <option value="400"></option>
                    <option value="500" label="500"></option>
                    <option value="600"></option>
                    <option value="700"></option>
                    <option value="800"></option>
                    <option value="900"></option>
                    <option value="1000" label="1000"></option>
                </datalist>
            </div>
            <div className="filter__category m-2">
                <h4 className="heading-xs text-bold">Category</h4>
                <label className="">
                    <input type="checkbox" name="" id="" /> Men Clothing
                </label>
                <label className="">
                    <input type="checkbox" name="" id="" /> Women Clothing
                </label>
            </div>
            <div className="filter__rating m-2">
                <h4 className="heading-xs text-bold">Rating</h4>
                <label className="">
                    <input type="radio" name="filter-rating" id="" /> 4 Stars &
                    Above
                </label>
                <label className="">
                    <input type="radio" name="filter-rating" id="" /> 3 Stars &
                    Above
                </label>
                <label className="">
                    <input type="radio" name="filter-rating" id="" /> 2 Stars &
                    Above
                </label>
                <label className="">
                    <input type="radio" name="filter-rating" id="" /> 1 Stars &
                    Above
                </label>
            </div>
            <div className="filter__sort m-2">
                <h4 className="heading-xs text-bold">Sort By</h4>
                <label className="">
                    <input type="radio" name="filter-sort" id="" /> Price - Low
                    to High
                </label>
                <label className="">
                    <input type="radio" name="filter-sort" id="" /> Price - High
                    to Low
                </label>
            </div>
        </aside>
    );
};
