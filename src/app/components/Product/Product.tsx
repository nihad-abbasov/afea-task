import Image from "next/image";

const Product = ({product}: any) => {
  return (
    <li key={product.id}>
      <div className="product_wrapper">
        <Image
          alt={product.title}
          src={product.images[0]}
          width="450"
          height="300"
        />
        <h2>{product.title}</h2>
        <h3>Rating: {product.rating}</h3>
        <h3>Price: ${product.price}</h3>
        <button className={product.stock > 0 ? "inStock" : "outOfStock"}>
          {product.stock > 0 ? "See Product" : "Out of Stock"}
        </button>
      </div>
    </li>
  );
};

export default Product;
