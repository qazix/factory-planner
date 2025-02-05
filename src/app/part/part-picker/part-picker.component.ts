import { Component } from '@angular/core';
import { Part } from '../classes/part.component'
import { PartService } from '../part.service'
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
  private URL = '/assets/manufactured_parts.json';
  parts$!: Observable<Part[]>;

  constructor(private partService: PartService, 
    private client: HttpClient) {
    this.parts$ = this.partService.getParts(this.URL);
  }

  ngOnInit() {
    console.log('Parts', this.parts$);
  } 
}
