"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { TarefaInterface } from "@/types/tarefa";

interface TarefasContextType {
  tarefas: TarefaInterface[];
  setTarefas: React.Dispatch<React.SetStateAction<TarefaInterface[]>>;
}

const TarefasContext = createContext<TarefasContextType | undefined>(undefined);

export const useTarefas = () => {
  const context = useContext(TarefasContext);
  if (!context) throw new Error("ficou sem zap!!!!!!!");
  return context;
};

export const TarefasProvider = ({ children }: { children: ReactNode }) => {
  const [tarefas, setTarefas] = useState<TarefaInterface[]>([]);

  // Carregar do localStorage ao iniciar
  useEffect(() => {
    const tarefasSalvas = localStorage.getItem("tarefas");
    if (tarefasSalvas) {
      setTarefas(JSON.parse(tarefasSalvas));
    }
  }, []);

  // Salvar no localStorage sempre que mudar
  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  return (
    <TarefasContext.Provider value={{ tarefas, setTarefas }}>
      {children}
    </TarefasContext.Provider>
  );
};