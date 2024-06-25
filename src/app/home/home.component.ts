import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EscenaComponent } from '../escena/escena.component';
import { StepsService } from '../steps.service';
import { iStep } from '../iStep';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, EscenaComponent]
})
export class HomeComponent implements OnInit {
  steps: iStep[] = [];



  constructor(private stepsService: StepsService) {}

  ngOnInit(): void {
    this.steps = this.stepsService.getSteps();


    

  }
}
  