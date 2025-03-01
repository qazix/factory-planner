import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PartPickerComponent } from './part/part-picker/part-picker.component';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, PartPickerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Statisfactory-Planner';
}
