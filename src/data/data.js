const products =[
    {
        id: "venu123",
        name: 'Venusaur 198/165',
        image: '/assets/VENUSAUR.PNG',
        price: 'Precio: 70.000',
        description: 'Scarlet and Violet EX',
        stock: 10,
        category:"cartas"
    },
    {
        id: "chari123",
        name: 'Charizard 199/165',
        image: '/assets/CHARIZARD.PNG',
        price: 'Precio: 180.000',
        description: 'Scarlet and Violet EX',
        stock: 10,
        category:"cartas"
    },
    {
        id: "blast123",
        name: 'Blastoise 200/165',
        image: '/assets/BLASTOISE.PNG',
        price: 'Precio: 80.000',
        description: 'Scarlet and Violet EX',
        stock: 10,
        category:"cartas"
    },
    {
        id: "protector_blanco",
        name: 'katana guard blanco',
        image: '/assets/protectorblanco.jpg',
        price: 'Precio: 15.000',
        description: 'katana guard blanco',
        stock: 10,
        category:"accesorios"
    },
    {
        id: "protector_rojo",
        name: 'katana guard rojo',
        image: '/assets/protector_rojo.jpg',
        price: 'Precio: 15.000',
        description: 'katana guard rojo',
        stock: 10,
        category:"accesorios"
    },
    {
        id: "protector_negro",
        name: 'katana guard negro',
        image: '/assets/protector_negro.jpg',
        price: 'Precio: 15.000',
        description: 'katana guard negro',
        stock: 10,
        category:"accesorios"
    },
]

const getproducts = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(()=>{
          resolve(products)
        },2000)
    })
  }


export { getproducts}