import { Component, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { iStep } from '../iStep';

@Component({
  selector: 'app-escena',
  standalone: true,
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.scss'],
  imports: [CommonModule]
})
export class EscenaComponent {
  @Input()
  steps: iStep[] = [];

  cardSelected = new EventEmitter<iStep>();

  currentStep: number = 0;

  constructor() { }

  prevStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  nextStep() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    }
  }

  selectStep(index: number) {
    this.currentStep = index;
  }
}
