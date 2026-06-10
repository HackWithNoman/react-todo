import { Trash2, Edit } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";

const TodoItem = ({
  id,
  text,
  completed,
  toggleTodo,
  deleteTodo,
  editingId,
  editText,
  setEditText,
  startEdit,
  saveEdit,
}) => {
  const isEditing = editingId === id;

  return (
    <div className="flex items-center justify-between rounded-lg border bg-card p-4 mt-7">
      <div className="flex items-center gap-3 flex-1">
        <Checkbox
          checked={completed}
          onCheckedChange={() => toggleTodo(id)}
        />

        {/* NORMAL MODE */}
        {!isEditing ? (
          <span
            className={`text-sm ${
              completed ? "text-muted-foreground line-through" : ""
            }`}
          >
            {text}
          </span>
        ) : (
          /* EDIT MODE */
          <Input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="h-8"
          />
        )}
      </div>

      <div className="flex gap-2">
        {/* EDIT / SAVE BUTTON */}
        {!isEditing ? (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => startEdit({ id, text })}
          >
            <Edit className="h-4 w-4" />
          </Button>
        ) : (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => saveEdit(id)}
          >
            Save
          </Button>
        )}

        {/* DELETE BUTTON */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => deleteTodo(id)}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default TodoItem;