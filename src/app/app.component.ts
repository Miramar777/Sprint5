import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component'; // Import HomeComponent

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [HomeComponent] // Import necessary components
})
export class AppComponent {
  title = 'onBoarding';
}
