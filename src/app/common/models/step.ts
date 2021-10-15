import {Interaction} from "./interaction";

export class Step {

  constructor(public stepNumber: number, public interactions: Interaction[] = []) {}

  public addStep(interaction: Interaction) {
    this.interactions.push(interaction);
  }

}
