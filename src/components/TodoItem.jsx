import { Trash2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox.jsx";
import { Button } from "@/components/ui/button.jsx";

const TodoItem = ({ id, text, completed, toggleTodo }) => {
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

      <Button variant="ghost" size="icon">
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default TodoItem;
