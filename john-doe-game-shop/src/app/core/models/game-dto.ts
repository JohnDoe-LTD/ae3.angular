import { Link } from "./link";

export interface GameDto {
  id: string,
  title: string,
  ranking: number,
  links: Link[]
}
