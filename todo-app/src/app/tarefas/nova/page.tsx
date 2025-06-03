"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useTarefas } from "@/data/ContextTarefa";
import Navbar from "@/componentes/Navbar";

export default function NovaTarefaPage() {
  const [novaTarefa, setNovaTarefa] = useState("");
  const { tarefas, setTarefas } = useTarefas();
  const router = useRouter();

  const adicionarTarefa = () => {
    if (novaTarefa.trim() !== "") {
      setTarefas([
        ...tarefas,
        {
          id: tarefas.length + 1,
          title: novaTarefa,
          completed: false,
        },
      ]);
      setNovaTarefa("");
      router.push("/tarefas");
    }
  };

  return (
    <main>
        <div className="w-full">
        <Navbar />
    </div>
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded">
      <h1 className="text-2xl font-bold mb-4 text-gray-900">Adicionar Nova Tarefa</h1>
      <input
        className="border-2 border-gray-300 rounded p-3 w-full mb-4 text-gray-900"
        type="text"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        placeholder="Digite a nova tarefa"
      />
      <div className="flex gap-2">
        <button className="p-2 bg-blue-500 text-white rounded" onClick={adicionarTarefa}> Adicionar</button>
        <button className="p-2 bg-red-900 text-white rounded" onClick={() => router.push("/tarefas")}>Cancelar</button>
      </div>
    </div>
    </main>
  );
}
