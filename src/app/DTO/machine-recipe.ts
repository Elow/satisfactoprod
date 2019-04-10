import { Recipe } from './recipe';
import { Machine } from './Machine';

export class MachineRecipe {
  machine: Machine;
  recipe: Recipe;

  constructor(machine: Machine, recipe: Recipe) {
    this.machine = machine;
    this.recipe = recipe;
  }
}
