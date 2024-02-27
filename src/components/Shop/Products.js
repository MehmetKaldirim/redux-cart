import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  { id: "p1", price: 6, title: "My First Book", description: "1" },
  { id: "p2", price: 7, title: "My Second Book", description: "2" },
  { id: "p3", price: 8, title: "My Third Book", description: "3" },
  { id: "p4", price: 9, title: "My Last Book", description: "4" },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{DUMMY_PRODUCTS.map(product=><ProductItem
          key={product.id}
          id ={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />)}
        
      </ul>
    </section>
  );
};

export default Products;
