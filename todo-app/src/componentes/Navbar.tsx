export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-30 py-4 bg-blue-900 text-white">
      <div className="font-bold text-xl">
        <h1 className="text-semibold">Gestão de tarefas</h1>
      </div>
      <div className="flex gap-4">
        <a href="/tarefas" className="hover:underline">Tarefas</a>
        <a href="/tarefas/nova" className="hover:underline">Nova Tarefa</a>
      </div>
    </nav>
  );
}