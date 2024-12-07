
// function CompraExitosa() {
//   return (
//     <div>
//       <h1>¡Compra Exitosa!</h1>
//       <p>Gracias por tu compra. Hemos recibido tu pedido.</p>
//     </div>
//   )
// }

// export default CompraExitosa

import React from 'react';
import { Link } from 'react-router-dom';

function CompraExitosa() {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f4f4f9',
      padding: '20px',
    },
    content: {
      backgroundColor: '#ffffff',
      borderRadius: '10px',
      padding: '30px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      width: '100%',
      maxWidth: '500px',
      textAlign: 'center',
    },
    title: {
      fontSize: '30px',
      color: '#28a745',
      marginBottom: '15px',
    },
    message: {
      fontSize: '16px',
      color: '#333',
      marginBottom: '20px',
    },
    details: {
      fontSize: '14px',
      color: '#555',
      marginBottom: '20px',
      textAlign: 'left',
    },
    detailsStrong: {
      fontWeight: 'bold',
      color: '#333',
    },
    orderNumber: {
      color: '#007bff',
      fontWeight: 'bold',
    },
    date: {
      color: '#007bff',
      fontWeight: 'bold',
    },
    paymentMethod: {
      color: '#007bff',
      fontWeight: 'bold',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>¡Compra Exitosa!</h1>
        <p style={styles.message}>
          Gracias por tu compra. Hemos recibido tu pedido y estamos procesándolo.
        </p>
        <p style={styles.details}>
          <span style={styles.detailsStrong}>Detalles del pedido:</span>
          <br />
          Número de pedido: <span style={styles.orderNumber}>#123456</span>
          <br />
          Fecha: <span style={styles.date}>6 de diciembre, 2024</span>
          <br />
          Método de pago: <span style={styles.paymentMethod}>Tarjeta de crédito</span>
        </p>
        <button
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        >
          <Link to = {'/carrito'}> Volver al inicio</Link>
        </button>
      </div>
    </div>
  );
}

export default CompraExitosa;
