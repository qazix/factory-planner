import { Component } from '@angular/core';
import { Part } from '../classes/part.component'
import { HttpClient } from '@angular/common/http';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-part-picker',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './part-picker.component.html',
  styleUrl: './part-picker.component.css'
})
export class PartPickerComponent {
  private URL = '/assets/extracted_parts.json';
  parts$!: Observable<any>;

  constructor(private client: HttpClient) {
    this.parts$ = this.client.get(this.URL);
  }

  ngOnInit() {
    console.log('Parts', this.parts$);
  } 
}
