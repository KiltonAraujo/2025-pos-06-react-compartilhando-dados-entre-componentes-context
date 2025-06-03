"use client";

import type React from "react";
import axios from 'axios';
import { useEffect, useState } from "react";
import { TarefaInterface } from "@/types/tarefa";
import { useTarefas } from "@/data/ContextTarefa";
import Navbar from "@/componentes/Navbar";


interface TarefaProps {
	titulo: string;
	concluido?: boolean;
}

const Tarefa: React.FC<TarefaProps & { id: number }> = ({ id, titulo, concluido }) => {
    const { tarefas, setTarefas } = useTarefas();

	const classeCard = `p-3 mb-3 rounded-lg shadow-md text-white hover:cursor-pointer transition-colors ${
		concluido ? "bg-green-500 hover:bg-green-600" : "bg-gray-600 hover:bg-gray-700"
	}`;

	const classeCorDoTexto = concluido ? "text-amber-50" : "";

	const escutarClique = () => {
		console.log(`A tarefa '${titulo}' foi clicada!`);
		setTarefas(
			tarefas.map(tarefa =>
				tarefa.id === id ? { ...tarefa, completed: !tarefa.completed } : tarefa
			)
		);
	};

	return (
		<div className={classeCard} onClick={escutarClique}>
			<h3 className={`text-xl font-bold ${classeCorDoTexto}`}>{titulo}</h3>
			<p className={`text-sm ${classeCorDoTexto}`}>
				{concluido ? "Concluída" : "Pendente"}
			</p>
		</div>
	);
};

interface TareafasProps {
	dados: TarefaInterface[];
}

const Tarefas: React.FC<TareafasProps> = ({ dados }) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
			{dados.map((tarefa) => (
				<Tarefa
					key={tarefa.id}
					id={tarefa.id}
					titulo={tarefa.title}
					concluido={tarefa.completed}
				/>
			))}
		</div>
	);
};

const Home = () => {
  const { tarefas, setTarefas } = useTarefas();
  const [mostrarModal, setMostrarModal] = useState(false);

  useEffect(() => {
    axios.get('https://dummyjson.com/todos')
      .then(response => {
        const tarefasAdaptadas: TarefaInterface[] = response.data.todos.map((tarefa: any) => ({
          id: tarefa.id,
          title: tarefa.todo,
          completed: tarefa.completed,
        }));
        setTarefas(tarefasAdaptadas);
      })
      .catch(error => {
        console.error('Erro ao buscar tarefas:', error);
      });
  }, [setTarefas]);

  const adicionarNovaTarefa = (novaTarefa: string) => {
    const nova: TarefaInterface = {
      id: tarefas.length + 1,
      title: novaTarefa,
      completed: false,
    };
    setTarefas([...tarefas, nova]);
  };

  return (
	<main>
		<div className="w-full">
			<Navbar />
		</div>
		<div className="container mx-auto p-4">
				<h1 className="p-3 mt-6 text-3xl font-bold text-gray-800 text-center">Lista de tarefas</h1>
				<Tarefas dados={tarefas} />
		</div>
			
	</main>
	
)}

export default Home;