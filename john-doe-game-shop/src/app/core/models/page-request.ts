import { Link } from "./link"
import { SortValues } from "./sort-values"

export interface PageRequest {
  link: Link
  query: string,
  ranking: number,
  sortAs: SortValues
}
