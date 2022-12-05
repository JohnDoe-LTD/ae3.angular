import { GameDto } from "./game-dto";
import { Link } from "./link";

export interface GamePage {
  data: GameDto[]
  links: Link[]
}
