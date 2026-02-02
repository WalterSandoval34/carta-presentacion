import React, { useState } from 'react';
import '../styles.css';

const Convertidor = () => {
  const [pesos, setPesos] = useState('');
  const tasaCambio = 1450;

  const dolares = pesos ? (parseFloat(pesos) / tasaCambio).toFixed(2) : '';

  return (
    <div className="convertidor">
      
      <h2>Convertidor de Pesos a Dolares</h2>
      
      <input
        type="text"
        placeholder="Ingrese monto en pesos"
        value={pesos}
        onChange={(e) => setPesos(e.target.value)}
        className="convertidor-input"
      />

      <p className="convertidor-resultado">
        {pesos && `Equivale a U$S ${dolares}`}
      </p>
    </div>
  );
};

export default Convertidor;
