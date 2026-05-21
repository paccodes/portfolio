import type { Line } from "../../types";

import { alphabet } from "./alphabet";
import { arch } from "./arch";
import { block } from "./block";
import { colorview } from "./colorview";
import { crunch } from "./crunch";
import { crunchbang } from "./crunchbang";
import { darthvader } from "./darthvader";
import { dna } from "./dna";
import { face } from "./face";
import { fade } from "./fade";
import { ghost } from "./ghost";
import { jangofett } from "./jangofett";
import { monster } from "./monster";
import { mouseface } from "./mouseface";
import { pacman } from "./pacman";
import { pane } from "./pane";
import { spaceinvaders } from "./spaceinvaders";
import { square } from "./square";
import { tank } from "./tank";
import { thebat } from "./thebat";
import { tiefighter } from "./tiefighter";
import { tiefighterinversed } from "./tiefighterinversed";

export const colorscripts: Record<string, Line[]> = {
  alphabet,
  arch,
  block,
  colorview,
  crunch,
  crunchbang,
  darthvader,
  dna,
  face,
  fade,
  ghost,
  jangofett,
  monster,
  mouseface,
  pacman,
  pane,
  spaceinvaders,
  square,
  tank,
  thebat,
  tiefighter,
  tiefighterinversed,
};
