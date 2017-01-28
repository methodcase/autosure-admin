import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: Http) { }

  models = []
  makes = []
  url = 'https://autosure.mybluemix.net/api/makes'
  url2 = 'https://autosure.mybluemix.net/api/models'
  url3 = 'https://autosure.mybluemix.net/api/compute'
  title = 'Autosure.me'
  year: number = 0
  value: number = 0
  computedValue: number = 0

  getMakes(): Observable<any[]> {
    return this.http.get(this.url).map(x => x.json());
  }

  getModels(...args): Observable<any[]> {
    const [make] = args
    const data = {where:{makeId:make}}
    const where: string = (args.length > 0) ? `?filter=${JSON.stringify(data)}` : ''
    return this.http.get(this.url2.concat(where)).map(x => x.json());
  }

  getCompute(...args): Observable<any> {
    const [year, value] = args
    const where: string = `{"year":"${year}","value":"${value}"}`
    return this.http.get(this.url3.concat("?data=").concat(where)).map(x => x.json());
  }

  compute(...args) {
    this.getCompute(this.year, this.value).subscribe(
      items => this.computedValue = items
    )
  }

  selectMake(...args) {
    const [make] = args
    this.getModels(make).subscribe(
      items => {
        this.models = items
      }
    )
  }

  selectModel(...args) {
    const [make] = args
    this.getCompute(this.year, make).subscribe(
      items => {
        this.computedValue = items.value
      }
    )
    
  }

  selectYear(year) {
    this.year = year
  }

  ngOnInit() {
    this.getMakes().subscribe(
      items => {
        this.makes = items
      }
    )

    this.getModels().subscribe(
      items => {
        this.models = items
      }
    )

  }

}
