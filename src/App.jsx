import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import TodoItem from "@/components/TodoItem.jsx";

function App() {
  const todos = [
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build project", completed: true },
  ];

  return (
    <main className="max-w-lg mx-auto px-4">
      <div className="mt-6">
        <h1 className="uppercase text-center font-bold text-2xl">Todo list</h1>

        {/*Todo Input*/}
        <div className="flex gap-4 mt-4">
          <Input placeholder="Add to do ..." />
          <Button>Add</Button>
        </div>

        {/* Todo Item */}

        <div>
          {todos.map((todo, id) => (
            <TodoItem
              id={id}
              key={id}
              text={todo.text}
              completed={todo.completed}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
