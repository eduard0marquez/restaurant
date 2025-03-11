import { MenuCard } from '../../components';
import './Menu.css';

const desayuno=[{
  id:1,
  name:'Cafe con Tostatas',
  description: 'Cafe, Pan, Jamon y queso',
  price:'$4500',
},
  {id:2,
  name:'Enchiladas Suizas con fruta y cafe',
  description: 'Enchiladas suizas, Pan, Jamon y queso',
  price:'$200',
},
{id:3,
  name:'Huevos al gusto con jugo de naranja',
  description: 'Huevos al gusto, Pan, Jugo de naranja',
  price:'$150',
}
]

const almuerzo = [{
  id:1,
  name:'Espagueti con Ensalada',
  description: 'Espagueti acompañado de una porcion de Espinaca,Almendras, Queso de cabra, Jamon,Lechuga y un dip de aderezo',
  price:'$200',
},
  {
  id:2,
  name:'Pollo al Horno',
  description: 'Pollo especiado y cocinado en horno de piedra',
  price:'$150',
  },
  {
  id:3,
  name:'Huevos al gusto con jugo de naranja',
  description: 'Huevos al gusto, Pan, Jugo de naranja',
  price:'$150',
}]
const cena= [{
  id:1,
  name:'Pizza Hawayana al Horno',
  description: 'Pizza con queso, piña y salsa de la casa cocinada en horno de piedra ',
  price:'$200',
},
  {
  id:2,
  name:'Chiles en nogada',
  description: 'Chiles rellenos con carne y especias, bañados con salsa de nogada, granada y un toque de pate',
  price:'$350',
  },
  {
  id:3,
  name:'Lasagna',
  description: 'Lasagna con carne de res',
  price:'$150',
  }]

  const postres = [{
  id:1,
  name:'Muffin Chocolate',
  description: 'pastelillo con relleno de chocolate y cobertura con chispas de chocolate ',
  price:'$200',
},
  {
  id:2,
  name:'Muss de limon',
  description: 'pastelillo de galleta con leche descremada y ralladura de limon',
  price:'$150',
  },
  {
  id:3,
  name:'Flan Imposible',
  description: 'Pastelillo con pan de chocolate en la capa superior y flan napolitano en la parte inferior ',
  price:'$150',
  }]


function Menu() {
  return (
    <div className='menu-page'>
      <header className='mt-5'>
        <div className='container h-100 d-flex align-items-center justify-content-center'>
              <h1 className='text-light'>Menu</h1>
          </div>
      </header>
      
      <MenuCard
        menu={desayuno}
        img='https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/377px-A_small_cup_of_coffee.JPG'
        title='Desayuno'
        bg={'bg-white' }
        text='' />
      
       <MenuCard
        menu={almuerzo}
        img='https://static.guiainfantil.com/media/2098/c/ensalada-de-espaguetis-recetas-faciles-y-completas-para-los-ninos-md.jpg'
        title='Almuerzo'
        bg={'bg-dark' }
        text='text-white' />
       <MenuCard
        menu={cena}
        img='https://ai-cooking.net/wp-content/uploads/2023/08/Chiles-en-Nogada-jpeg.webp'
        title='Cena'
        bg={'bg-white' }
        text='' />
       <MenuCard
        menu={postres}
        img='https://images.pexels.com/photos/16993718/pexels-photo-16993718/free-photo-of-plato-arandanos-azules-postre-dulce.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        title='Postres'
        bg={'bg-dark' }
      text='text-white'/>


      
    </div>
  )
}

export default Menu
