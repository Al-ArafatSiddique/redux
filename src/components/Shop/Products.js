import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {id: 'p1', price: 5, title: 'My first book', description: 'it is a nice one'},
  {id: 'p2', price: 6, title: 'My second book', description: 'it is another beauty'}

]


const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product)=>
        <ProductItem
        key={product.id}
        title={product.title}
        price={product.price}
        description={product.description}
      />)}
        
      </ul>
    </section>
  );
};

export default Products;
