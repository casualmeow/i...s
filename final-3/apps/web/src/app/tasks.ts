import { lazy } from "react";

type TaskMeta = {
  title: string;
  description?: string;
  order?: number;
};

const pageModules = import.meta.glob("../tasks/*/page.tsx");
const metaModules = import.meta.glob("../tasks/*/meta.ts", {
  eager: true,
}) as Record<string, { default: TaskMeta }>;

function extractTaskId(path: string) {
  return path.split("/")[2];
}

export const tasks = Object.entries(metaModules)
  .map(([path, mod]) => {
    const taskId = extractTaskId(path);
    const pagePath = `../tasks/${taskId}/page.tsx`;
    const importer = pageModules[pagePath];

    if (!importer) return null;

    return {
      id: taskId,
      ...mod.default,
      component: lazy(importer as () => Promise<{ default: React.ComponentType }>),
    };
  })
  .filter(Boolean)
  .sort((a, b) => (a!.order ?? 999) - (b!.order ?? 999));
