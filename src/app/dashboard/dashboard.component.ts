import { Component, OnInit } from '@angular/core';
import { Machine } from '../DTO/Machine';
import { Recipe } from '../DTO/recipe';
import { MachineService } from '../machine.service';
import { RecipeService } from '../recipe.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Deserialize } from 'cerialize';
import { MachineRecipe } from '../DTO/machine-recipe';
import { RecipeItem } from '../DTO/recipe-item';
import { Dashboard } from '../DTO/dashboard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  myMachines: MachineRecipe[] = [];
  myDashboard: Dashboard[] = [];
  machines: Machine[];
  recipes: Recipe[];
  selectedMachine: Machine;

  constructor(
    private machineService: MachineService,
    private recipeService: RecipeService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.getMachines();
    this.getRecipes();
  }

  addMachine(machine: Machine, recipe: Recipe): void {
    console.log('Add machine', machine, recipe);
    this.myMachines.push(new MachineRecipe(machine, recipe));

    // Ajust the existing items in Dashboard
    // Add the out
    if (this.myDashboard.find(x => x.name === recipe.out.name) === undefined) {
      this.myDashboard.push(
        new Dashboard(recipe.out.name, 0, 0, recipe.out.rank)
      );
    }
    this.myDashboard.find(x => x.name === recipe.out.name).out +=
      recipe.out.howMany;

    // Minus the in
    recipe.in.forEach(el => {
      if (this.myDashboard.find(x => x.name === el.name) === undefined) {
        this.myDashboard.push(new Dashboard(el.name, 0, 0, el.rank));
      }
      this.myDashboard.find(x => x.name === el.name).in +=
        el.howMany;
    });

    // Sort the dashboard for HTML
    this.myDashboard.sort((a, b) => {
      if (a.rank < b.rank) {
        return -1;
      } else if (a.rank < b.rank) {
        return 1;
      } else {
        return 0;
      }
    });

    // Dismiss modal
    this.modalService.dismissAll();
  }

  getMachines(): void {
    this.machineService
      .getMachines()
      .subscribe(machines => (this.machines = machines));
  }

  getRecipes(): void {
    this.recipeService.getRecipes().subscribe(recipes => {
      this.recipes = Deserialize(recipes, Recipe);
    });
  }

  getRecipesByRank(rank: number) {
    return this.recipes.filter(x => x.rank === rank);
  }

  getInTotal(item: RecipeItem[]) {
    return item.reduce((sum, nextItem) => sum + nextItem.howMany, 0);
  }

  open(content: string, selectedMachine: Machine) {
    this.selectedMachine = selectedMachine;
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg'
    });
  }
}
