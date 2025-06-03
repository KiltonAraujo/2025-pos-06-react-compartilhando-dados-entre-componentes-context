"use client";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import type React from "react";

export default function Home() {
  return (
    <main>
      <div className="flex items-center flex-col justify-center min-h-screen">
		    <h1 className="text-4xl text-gray-900 font-bold">Bem-vindo à Home!</h1>
      	<a href="/tarefas" className="text-1xl mt-8 p-3 bg-blue-700 text-white-700 p-2 rounded-full hover:bg-black  transition-colors">Ir para Tarefas</a>

	  </div>
    </main>
  );
}