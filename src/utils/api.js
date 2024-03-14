import Salad from '../assets/salad.jpg';
import Creme from '../assets/creme.jpg';
import Bruschetta from '../assets/bruschetta.jpg';

const currentSpecials = [
    {
        image: Salad,
        title: "Greek Salad",
        price: "$14.99",
        description: "Enjoy our Greek salad with fresh lettuce, tangy peppers, juicy olives, and feta cheese from Chicago, all garnished with crunchy garlic and rosemary croutons.",
        order: "Order a delivery"
    },
    {
        image: Creme,
        title: "Lemon Dessert",
        price: "$6.00",
        description: "Indulge in our Lemon Dessert, a recipe straight from Grandma's kitchen. Every ingredient is authentically sourced to provide an unforgettable taste experience.",
        order: "Order a delivery"
    },
    {
        image: Bruschetta,
        title: "Bruschetta",
        price: "$6.99",
        description: "Experience our Bruschetta, made from perfectly grilled bread smeared with aromatic garlic and seasoned with salt and olive oil. It's the perfect dish for an evening dinner.",
        order: "Order a delivery"
    }
]

const fakeApi = {
    get: () => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ data: currentSpecials, pages: 1 })
        }, 500);

        if (!currentSpecials) {
            return reject(new Error('Error fetching data'))
        }
    })
}

export default fakeApi;