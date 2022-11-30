import { Game } from "./game";
import { Link } from "./link";

export interface User {
  id: string,
  username: string,
  games: Game[],
  links: Link[]
}
