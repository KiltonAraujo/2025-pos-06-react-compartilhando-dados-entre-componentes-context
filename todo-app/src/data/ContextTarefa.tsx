"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
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
  return (
    <TarefasContext.Provider value={{ tarefas, setTarefas }}>
      {children}
    </TarefasContext.Provider>
  );
};