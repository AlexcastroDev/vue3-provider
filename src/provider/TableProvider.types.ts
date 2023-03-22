export interface FlexysearchState {
  filtered_data: Data[];
}

export interface FlexysearchProvider extends FlexysearchState {
  filterData: (search_term: string) => void;
}

export interface Data {
  name: string;
  mass: number;
}
