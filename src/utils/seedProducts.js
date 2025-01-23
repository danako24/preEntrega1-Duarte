import db from "../db/db.js";
import { collection, addDoc } from "firebase/firestore";

const products =[
    {
        id: "venu123",
        name: 'Venusaur 198/165',
        image: ['/assets/VENUSAUR.PNG', '/assets/VENUSAURESP.png'],
        price: 70000,
        description: 'Scarlet and Violet EX',
        stock: 10,
        category:"cartas"
    },
    {
        id: "chari123",
        name: 'Charizard 199/165',
        image: ['/assets/CHARIZARD.PNG', '/assets/CHARZARDESP.png'],
        price: 180000,
        description: 'Scarlet and Violet EX',
        stock: 10,
        category:"cartas"
    },
    {
        id: "blast123",
        name: 'Blastoise 200/165',
        image: ['/assets/BLASTOISE.PNG','/assets/BLASTOISEESP.png'],
        price: 80000,
        description: 'Scarlet and Violet EX',
        stock: 10,
        category:"cartas"
    },
    {
        id: "zap123",
        name: 'Zapdos 202/165',
        image: ['/assets/ZAPDOS.png','/assets/ZAPDOSESPAÑOL.png'],
        price: 55000,
        description: 'Scarlet and Violet EX',
        stock: 10,
        category:"cartas"
    },
    {
        id: "mew123",
        name: 'Mew promo',
        image: ['/assets/MEW.png','/assets/MEWESPAÑOL.png'],
        price: 20000,
        description: 'Scarlet and Violet EX',
        stock: 10,
        category:"cartas"
    },
    {
        id: "ala123",
        name: 'Alakazam 201/165',
        image: ['/assets/AKALAZAM.jpg','/assets/ALAKAZAMESPAÑOL.png'],
        price: 40000,
        description: 'Scarlet and Violet EX',
        stock: 10,
        category:"cartas"
    },
    {
        id: "protector_blanco",
        name: 'katana guard blanco',
        image: ['/assets/protectorblanco.jpg'],
        price: 15000,
        description: 'katana guard blanco',
        stock: 10,
        category:"accesorios"
    },
    {
        id: "protector_rojo",
        name: 'katana guard rojo',
        image: ['/assets/protector_rojo.jpg'],
        price:  15000,
        description: 'katana guard rojo',
        stock: 10,
        category:"accesorios"
    },
    {
        id: "protector_negro",
        name: 'katana guard negro',
        image: ['/assets/protector_negro.jpg'],
        price: 15000,
        description: 'katana guard negro',
        stock: 10,
        category:"accesorios"
    },
    {
        id: "binder151",
        name: 'Binder 151',
        image: ['/assets/binder151.jpg'],
        price: 15000,
        description: 'Carpeta Binder 151 ',
        stock: 10,
        category:"accesorios"
    },
    {
        id: "binderprismatic",
        name: 'Binder prismatic',
        image: ['/assets/binderprismatic.jpg'],
        price: 15000,
        description: 'Carpeta Binder prismatic ',
        stock: 10,
        category:"accesorios"
    },
]

const seedProducts = async() =>{
    try{
        const productsRef = collection(db, "products")
        products.map( async ( { id, ...dataProduct } )=>{
            await addDoc(productsRef, dataProduct)

        })

        console.log ("producto subido")
    } catch (error) {
        console.log(error)

    }

}

seedProducts()