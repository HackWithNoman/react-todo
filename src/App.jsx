import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import TodoItem from "@/components/TodoItem.jsx";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build project", completed: true },
  ]);

  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input || !input.trim()) return;

    setTodos((prev) => [
      { id: Date.now(), text: input, completed: false },
      ...prev,
    ]);

    setInput("");
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id == id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id != id));
  };

  return (
    <main className="max-w-lg mx-auto px-4">
      <div className="mt-6">
        <h1 className="uppercase text-center font-bold text-2xl">Todo list</h1>

        {/*Todo Input*/}
        <div className="flex gap-4 mt-4">
          <Input
            placeholder="Add to do ..."
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button onClick={addTodo}>Add</Button>
        </div>

        {/* Todo Item */}

        <div>
          {todos.map((todo) => (
            <TodoItem
              id={todo.id}
              key={todo.id}
              text={todo.text}
              completed={todo.completed}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
