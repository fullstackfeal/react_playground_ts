import { useState } from "react";

function Contador() {
  const [valor, setValor] = useState(0);

  function handleClick() {
    setValor(valor + 2);
  }

  function handleRemove() {
    if (valor > 0) {
      setValor(valor - 1);
    }
  }

  return (
    <>
      <h1>Componente Contador</h1>
      <p>O valor é: {valor}</p>
      <button onClick={handleClick}> Adicionar 2</button>
      <button onClick={handleRemove}>Diminuir 1</button>
    </>
  );
}

export default Contador;
