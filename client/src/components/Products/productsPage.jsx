// import React, { useContext } from "react";
// import CartContext from "../../context/CartContext";
// import styles from "../Products/style.module.css";

// const Products = () => {
//   /* Traemos del context la funcion para agregar un producto */
//   const { addItemToCart, products } = useContext(CartContext);

//   return (
//     <div className={styles.productsContainer}>
//       {products &&
//         products.map((product, i) => (
//           <div key={i} className={styles.product}>
//             <img src={product.img} alt={product.name} />
//             <div>
//               <p>
//                 {product.name} - ${product.price}
//               </p>
//             </div>
//             {!product.inCart ? (
//               <button onClick={() => addItemToCart(product)}>
//                 Add to Cart
//               </button>
//             ) : (
//               <button>En el carrito</button>
//             )}
//           </div>
//         ))}
//     </div>
//   );
// };

// export default Products;
import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import styles from "../Products/style.module.css";

const Products = () => {
  /* Traemos del context la funcion para agregar un producto */
  const { addItemToCart, products } = useContext(CartContext);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {products &&
        products.map((product, i) => (
          <div key={i} className="bg-[#ffebeb] rounded-lg shadow-md p-4 hover:scale-105 transition-all">
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <div className="text-center">
              <p className="text-[#333] text-lg font-semibold">
                {product.name} - ${product.price}
              </p>
            </div>
            {!product.inCart ? (
              <button
                onClick={() => addItemToCart(product)}
                className="w-full mt-4 bg-[#ff69b4] text-white py-2 rounded-md hover:bg-[#ff1493] transition-colors"
              >
                Add to Cart
              </button>
            ) : (
              <button className="w-full mt-4 bg-gray-400 text-white py-2 rounded-md cursor-not-allowed">
                En el carrito
              </button>
            )}
          </div>
        ))}
    </div>
  );
};

export default Products;
