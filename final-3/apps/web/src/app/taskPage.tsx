import { Suspense } from "react";
import { Navigate, useParams } from "react-router";
import { tasks } from "./tasks";

export function TaskPage() {
  const { taskId } = useParams();
  const task = tasks.find((item) => item.id === taskId);

  if (!task) {
    return <Navigate to="/" replace />;
  }

  const Component = task.component;

  return (
    <Suspense
      fallback={
        <div className="rounded-2xl border border-border bg-background p-6">Loading task...</div>
      }
    >
      <div>
        <div className="mb-6">
          <h1 className="mb-2 text-3xl font-bold tracking-tight text-primary">{task.title}</h1>

          {task.description ? <p className="text-sm text-foreground">{task.description}</p> : null}
        </div>

        <div className="rounded-2xl border border-border bg-background p-5">
          <Component />
        </div>
      </div>
    </Suspense>
  );
}
