export interface useFiltersType {
  filterMap: {
    filterMap: Map<string, boolean>;
    updateFilters: (type: string) => void;
  };
}
