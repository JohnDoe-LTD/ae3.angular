import { Link } from "./link";

export interface Game {
  id: string,
  title: string,
  company: string,
  imageUri: string,
  ranking: number,
  links: Link[]
}
