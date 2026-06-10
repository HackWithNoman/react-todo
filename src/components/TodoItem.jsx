import { Trash2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Edit } from "lucide-react";

const TodoItem = ({ id, text, completed, toggleTodo, deleteTodo }) => {
  return (
    <div className="flex items-center justify-between rounded-lg border bg-card p-4 mt-7">
      <div className="flex items-center gap-3">
        <Checkbox checked={completed} onCheckedChange={() => toggleTodo(id)} />

        <label htmlFor={id} className="text-sm font-medium leading-none">
          <span
            className={`text-sm ${
              completed ? "text-muted-foreground line-through" : ""
            }`}
          >
            {text}
          </span>
        </label>
      </div>

      <div>
        <Button variant="ghost" size="icon" >
          <Edit className="h-4 w-4" />
        </Button>

        <Button variant="ghost" size="icon" onClick={() => deleteTodo(id)}>
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default TodoItem;
