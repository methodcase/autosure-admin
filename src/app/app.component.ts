import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { DataService } from './data.service'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[DataService]
})
export class AppComponent {
  constructor(private data: DataService) { }

  models = []
  makes = []  
  title = 'Autosure.me'
  year: number = 0
  value: number = 0
  computedValue: number = 0
  
  compute(...args) {
    this.data.getCompute(this.year, this.value).subscribe(
      items => this.computedValue = items
    )
  }

  selectMake = (...args) => {
    const [make] = args
    this.data.getModels(make).subscribe(
      items => {
        this.models = items
      }
    )
  }

  selectModel = (...args) => {
    const [make] = args
    this.data.getCompute(this.year, make).subscribe(
      items => {
        this.computedValue = items.value
      }
    )
    
  }

  selectYear(year) {
    this.year = year
  }

  ngOnInit() {
    this.data.getMakes().subscribe(
      items => {
        this.makes = items
      }
    )

    this.data.getModels().subscribe(
      items => {
        this.models = items
      }
    )

  }

}
