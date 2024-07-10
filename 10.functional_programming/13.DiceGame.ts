import { logger } from "."
import { TEXT } from "../utils/colors"

logger(__filename, "   Dice Game Intro")

console.log("Check 13.DiceGame folder, drag n drop .html file into your browser to see the results")

const partial =
  (f, ...fixedArgs) =>
    (...args) =>
      f(...fixedArgs, ...args);

const compose = (...fns) =>
  fns.reduceRight(
    (a, b) =>
      (...args) =>
        a(b(...args))
  );

// DICE GAME CODE:
const getRandomRoll = () => Math.floor(Math.random() * 6) + 1;
const checkWin = (roll: number) => roll === 6;




