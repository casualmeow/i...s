import { Navigate, Route, Routes } from "react-router";
import { Sidebar } from "@/components/sidebar";
import { TaskPage } from "./taskPage";
import { tasks } from "./tasks";

export function AppRouter() {
  const firstTaskId = tasks[0]?.id;

  return (
    <div className="min-h-screen bg-background text-accent md:grid md:grid-cols-[280px_1fr]">
      <Sidebar />

      <main className="min-w-0 p-5 md:p-8">
        <Routes>
          <Route
            path="/"
            element={
              firstTaskId ? (
                <Navigate to={`/tasks/${firstTaskId}`} replace />
              ) : (
                <div className="rounded-2xl border border-border bg-background p-6">
                  No tasks found
                </div>
              )
            }
          />
          <Route path="/tasks/:taskId" element={<TaskPage />} />
          <Route
            path="*"
            element={
              <div className="rounded-2xl border border-border bg-background p-6">
                Page not found
              </div>
            }
          />
        </Routes>
      </main>
    </div>
  );
}
