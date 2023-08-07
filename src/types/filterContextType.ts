export interface filterContextType {
  filterMap: Map<string, boolean>;
  updateFilters: (type: string) => void;
  getFilter: (type: string) => boolean | undefined;
}
