interface SortableProject {
  data: { title: string; order?: number };
}

export const sortProjects = <T extends SortableProject>(projects: T[]) =>
  [...projects].sort((a, b) => {
    const aOrder = a.data.order ?? Number.MAX_SAFE_INTEGER;
    const bOrder = b.data.order ?? Number.MAX_SAFE_INTEGER;

    if (aOrder !== bOrder) {
      return aOrder - bOrder;
    }

    return a.data.title.localeCompare(b.data.title);
  });
