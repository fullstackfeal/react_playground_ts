import { useEffect, useState } from "react";

function Tarefa() {
  const [completed, setCompleted] = useState(false);
  const [tarefa, setTarefa] = useState("");
  const [contador, setContador] = useState(0);

  useEffect(() => {
    if (completed) {
      setTarefa("Parabéns! Você concluiu a tarefa!");
      setContador((prev) => prev + 1);
    } else {
      setTarefa("");
    }
  }, [completed]);

  return (
    <>
      <h1>Componente Tarefa</h1>
      <h3>{tarefa}</h3>
      <p>Tarefas concluídas: {contador}</p>
      <button onClick={() => setCompleted(!completed)}>
        {completed ? "Desfazer" : "Concluir"}
      </button>
    </>
  );
}

export default Tarefa;
