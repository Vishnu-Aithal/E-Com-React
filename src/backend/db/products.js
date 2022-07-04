import { v4 as uuid } from "uuid";
/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */
const importAll = (r) => {
    return r.keys().map(r);
};
const images = importAll(
    require.context("assets/images/product", false, /\.(png|jpe?g|svg)$/)
);
const types = ["Pant", "Shirt", "Shoes"];
const categories = ["Casual", "Formal", "Sports"];
const brands = ["Hike", "Adibas", "WoodSky"];
const ratings = [1, 2, 3, 4, 5];

const randomPrice = (maxPrice, multiple) => {
    const randomPrice = Math.ceil(Math.random() * maxPrice);
    const randomPriceRounded = Math.round(randomPrice / multiple) * multiple;
    return randomPriceRounded + "";
};

const getRandomElement = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
};

const productsGenerator = (types, categories, brands) => {
    let products = [];
    for (const category of categories) {
        for (const type of types) {
            for (const brand of brands) {
                const product = {
                    _id: uuid(),
                    title: `${category} ${type}`,
                    brand: brand,
                    price: randomPrice(5000, 100),
                    category: category,
                    type: type,
                    image: images[products.length].default,
                    rating: getRandomElement(ratings),
                    outOfStock: getRandomElement([
                        false,
                        false,
                        false,
                        false,
                        true,
                    ]),
                };
                products.push(product);
            }
        }
    }
    return products;
};

export const products = productsGenerator(types, categories, brands);

// export const products = [
//     {
//         _id: uuid(),
//         title: "Sports Shoes",
//         brand: "Adibas",
//         price: "5000",
//         category: "shoes",
//         type:"sports"
//         rating:5,
//         outOfStock: false
//     }
// ];
