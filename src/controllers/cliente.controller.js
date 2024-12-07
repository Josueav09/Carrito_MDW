import Product from "../models/products.model.js";
import Cart from "../models/cart.model.js";


// export const addProductCart = async (req, res) => {
  
//     console.log(req.body); // Esto te ayudará a depurar
    
//     // Validación de entrada
//     if (!req.body || !req.body.name || !req.body.img || !req.body.price) {
//       return res.status(400).json({ mensaje: "Faltan campos en el cuerpo de la solicitud" });
//     }
  
//     const { name, img, price } = req.body;
  
//     try {
//       // Comprobar si el producto existe en la base de datos
//       const estaEnProducts = await Product.findOne({ name });
  
//       if (!estaEnProducts) {
//         return res.status(400).json({
//           mensaje: "Este producto no se encuentra en nuestra base de datos",
//         });
//       }
  
//       // Comprobar si el producto ya está en el carrito
//       const estaEnElCarrito = await Cart.findOne({ name });
//       if (estaEnElCarrito) {
//         return res.status(400).json({
//           mensaje: "El producto ya está en el carrito",
//           product: estaEnElCarrito,
//         });
//       }
  
//       // Si todos los campos están correctos y el producto no está en el carrito, agregarlo
//       const newProductInCart = new Cart({ name, img, price, amount: 1 });
  
//       // Actualizar el producto en la base de datos marcando como en el carrito
//       await Product.findByIdAndUpdate(
//         estaEnProducts._id,
//         { inCart: true },
//         { new: true }
//       );
  
//       // Guardar el nuevo producto en el carrito
//       await newProductInCart.save();
  
//       // Respuesta exitosa
//       res.json({
//         mensaje: `El producto ${name} fue agregado al carrito.`,
//         product: estaEnProducts,
//         cart: newProductInCart,
//       });
  
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ mensaje: "Error al agregar el producto al carrito" });
//     }
//   };

  export const addProductCart = async (req, res) => {
    console.log(req.body); // Esto te ayudará a depurar
  
    // Validación de entrada
    if (!req.body || !req.body.name || !req.body.img || !req.body.price) {
      return res.status(400).json({ mensaje: "Faltan campos en el cuerpo de la solicitud" });
    }
  
    const { name, img, price } = req.body;
    const userId = req.user.id; // Aquí obtienes el userId del usuario autenticado
  
    try {
      // Comprobar si el producto existe en la base de datos
      const estaEnProducts = await Product.findOne({ name });
  
      if (!estaEnProducts) {
        return res.status(400).json({
          mensaje: "Este producto no se encuentra en nuestra base de datos",
        });
      }
  
      // Comprobar si el producto ya está en el carrito
      const estaEnElCarrito = await Cart.findOne({ name, userId });
      if (estaEnElCarrito) {
        return res.status(400).json({
          mensaje: "El producto ya está en el carrito",
          product: estaEnElCarrito,
        });
      }
  
      // Si todos los campos están correctos y el producto no está en el carrito, agregarlo
      const newProductInCart = new Cart({
        userId,  // Aquí agregas el userId al carrito
        name,
        img,
        price,
        amount: 1
      });
  
      // Actualizar el producto en la base de datos marcando como en el carrito
      await Product.findByIdAndUpdate(
        estaEnProducts._id,
        { inCart: true },
        { new: true }
      );
  
      // Guardar el nuevo producto en el carrito
      await newProductInCart.save();
  
      // Respuesta exitosa
      res.json({
        mensaje: `El producto ${name} fue agregado al carrito.`,
        product: estaEnProducts,
        cart: newProductInCart,
      });
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: "Error al agregar el producto al carrito" });
    }
  };
  

  
// export const deleteProductCart = async (req, res) => {
//     const { productId } = req.params;
  
//     /* Buscamos el producto en el carrito */
//     const productInCart = await Cart.findById(productId);
  
//     /* Buscamos el producto en nuestra DB por el nombre del que está en el carrito */
//     const { name, img, price, _id } = await Product.findOne({
//       name: productInCart.name,
//     });
  
//     /* Buscamos y eliminamos el producto con la id */ 
//     await Cart.findByIdAndDelete(productId);
  
//     /* Buscamos y editamos la propiedad inCart: false */
//     try {
//       const product = await Product.findByIdAndUpdate(
//         _id,
//         { inCart: false, name, img, price },
//         { new: true }
//       );
//       res.json({
//         mensaje: `El producto ${product.name} fue eliminado del carrito`,
//       });
//     } catch (error) {
//       res.json({ mensaje: "Hubo un error" });
//     }
//   };

  export const deleteProductCart = async (req, res) => {
    const { productId } = req.params;

    try {
      // Buscamos el producto en el carrito
      const productInCart = await Cart.findById(productId);
      
      // Verificamos si el producto existe en el carrito
      if (!productInCart) {
        return res.status(404).json({ mensaje: "Producto no encontrado en el carrito" });
      }

      // Buscamos el producto en nuestra DB por el nombre del que está en el carrito
      const product = await Product.findOne({ name: productInCart.name });
      
      // Verificamos si el producto existe en la base de datos
      if (!product) {
        return res.status(404).json({ mensaje: "Producto no encontrado en la base de datos" });
      }

      // Eliminamos el producto del carrito
      await Cart.findByIdAndDelete(productId);

      // Actualizamos el producto en la base de datos, estableciendo `inCart: false`
      await Product.findByIdAndUpdate(
        product._id,
        { inCart: false, name: product.name, img: product.img, price: product.price },
        { new: true }
      );

      res.json({
        mensaje: `El producto ${product.name} fue eliminado del carrito`,
      });

    } catch (error) {
      console.error("Error al eliminar producto del carrito:", error);
      res.status(500).json({ mensaje: "Hubo un error en el servidor" });
    }
  };


  export const getProducts = async (req, res) => {
    const products = await Product.find();
  
    if (products) {
      res.json({ products });
    } else {
      res.json({ mensaje: "No hay productos" });
    }
  };

  export const getProductCart = async (req, res) => {
    const productsCart = await Cart.find();
  
    if (productsCart) {
      res.json({ productsCart });
    } else {
      res.json({ mensaje: "No hay productos en el carrito" });
    }
  };

  export const putProduct = async (req, res) => {
    const { productId } = req.params;
    const { query } = req.query;
    const body = req.body;
  
    /* Buscamos el producto en el carrito */
    const productBuscado = await Cart.findById(productId);
  
    /* Si no hay query 'add' o 'del' */
    if (!query) {
      res.status(404).json({ mensaje: "Debes enviar una query" });
  
      /* Si está el producto en el carrito y quiero agregar */
    } else if (productBuscado && query === "add") {
      body.amount = body.amount + 1;
  
      await Cart.findByIdAndUpdate(productId, body, {
        new: true,
      }).then((product) => {
        res.json({
          mensaje: `El producto: ${product.name} fue actualizado`,
          product,
        });
      });
  
      /* Si está el producto en el carrito y quiero sacar */
    } else if (productBuscado && query === "del") {
      body.amount = body.amount - 1;
  
      await Cart.findByIdAndUpdate(productId, body, {
        new: true,
      }).then((product) =>
        res.json({
          mensaje: `El producto: ${product.name} fue actualizado`,
          product,
        })
      );
    } else {
      res.status(400).json({ mensaje: "Ocurrió un error" });
    }
  };

  export const clearCart = async (req, res) => {
    try {
      // Eliminar todos los productos del carrito
      await Cart.deleteMany();
  
      // Actualizar los productos en la base de datos para establecer `inCart: false`
      await Product.updateMany({ inCart: true }, { inCart: false });
  
      res.json({ mensaje: "El carrito fue vaciado exitosamente" });
    } catch (error) {
      console.error("Error al vaciar el carrito:", error);
      res.status(500).json({ mensaje: "Hubo un error al vaciar el carrito" });
    }
  };
  
  