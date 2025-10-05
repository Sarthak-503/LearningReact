import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const DUUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "My first book",
    description: "this book is written by bankim chandra chaterjee",
  },
  {
    id: "p2",
    price: 16,
    title: "My Second book",
    description: "this book is written by me",
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
