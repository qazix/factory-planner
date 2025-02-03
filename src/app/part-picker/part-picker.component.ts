import { Component } from '@angular/core';
import { Part } from '../classes/part.component'
import { 
  FormBuilder, 
  FormGroup, 
  FormArray, 
  FormControl, 
  ValidatorFn 
} from '@angular/forms';

@Component({
  selector: 'app-part-picker',
  imports: [],
  templateUrl: './part-picker.component.html',
  styleUrl: './part-picker.component.css'
})
export class PartPickerComponent {
  partPicker: new FormControl();
  parts: new [
      new Part("iron_ore", "Iron Ore"),
      new Part("copper_ore", "Copper Ore")
    ];
}
