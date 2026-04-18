import { NavLink } from "react-router";
import { tasks } from "@/app/tasks";

export function Sidebar() {
  return (
    <aside className="top-0 h-auto border-b border-border bg-sidebar p-4 backdrop-blur md:sticky md:h-screen md:overflow-y-auto md:border-r md:border-b-0">
      <div className="mb-5">
        <h2 className="text-lg font-bold text-primary">Tasks</h2>
        <p className="mt-1 text-sm text-foreground">Pick a task from the list</p>
      </div>

      <nav aria-label="Tasks navigation">
        {tasks.length === 0 ? (
          <div className="rounded-xl bg-background p-3 text-sm text-primary">No tasks yet</div>
        ) : (
          <ul className="grid gap-2">
            {tasks.map((task) => (
              <li key={task.id}>
                <NavLink
                  to={`/tasks/${task.id}`}
                  className={({ isActive }) =>
                    [
                      "block rounded-xl border p-3 transition-all",
                      isActive
                        ? "border-border bg-sidebar"
                        : "border-transparent hover:border-border/10 hover:bg-background/5",
                    ].join(" ")
                  }
                >
                  <span className="block text-sm font-semibold text-primary">{task.title}</span>

                  {task.description ? (
                    <span className="mt-1 block text-xs leading-5 text-foreground">
                      {task.description}
                    </span>
                  ) : null}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </aside>
  );
}
