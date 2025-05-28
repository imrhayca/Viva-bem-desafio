import React, { useState } from "react";

const desafios = [
  "Beber 6 copos de água",
  "Caminhar por 20 minutos",
  "Comer 1 fruta",
  "Fazer 5 minutos de meditação",
  "Evitar açúcar refinado",
  "Dormir pelo menos 7 horas",
  "Escrever 3 coisas pelas quais é grato",
];

export default function App() {
  const [concluidos, setConcluidos] = useState(Array(7).fill(false));
  const totalConcluidos = concluidos.filter(Boolean).length;

  const concluirDesafio = (index) => {
    const novosConcluidos = [...concluidos];
    novosConcluidos[index] = true;
    setConcluidos(novosConcluidos);
  };

  return (
    <div style={{ maxWidth: 480, margin: "auto", padding: 20, fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>Viva Bem – Desafio de 7 Dias</h1>
      <p style={{ textAlign: "center", color: "#555", marginBottom: 20 }}>
        Criado por <strong>Rhayca</strong> – Lançado em 2025
      </p>

      {desafios.map((desafio, index) => (
        <div key={index} style={{ marginBottom: 12, padding: 12, border: "1px solid #ccc", borderRadius: 8, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <h3 style={{ margin: 0 }}>Dia {index + 1}</h3>
            <p style={{ margin: 0 }}>{desafio}</p>
          </div>
          <button
            disabled={concluidos[index]}
            onClick={() => concluirDesafio(index)}
            style={{
              padding: "6px 12px",
              borderRadius: 4,
              border: "none",
              backgroundColor: concluidos[index] ? "#4caf50" : "#2196f3",
              color: "white",
              cursor: concluidos[index] ? "default" : "pointer",
            }}
          >
            {concluidos[index] ? "Feito!" : "Concluir"}
          </button>
        </div>
      ))}

      <div style={{ textAlign: "center", marginTop: 20 }}>
        <p>
          Progresso: {totalConcluidos} / 7 desafios concluídos
        </p>
        {totalConcluidos === 7 && (
          <p style={{ color: "#4caf50", fontWeight: "bold" }}>
            Parabéns! Você concluiu todos os desafios! 🎉
          </p>
        )}
      </div>
    </div>
  );
}
