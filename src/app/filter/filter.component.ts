import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  name: string;

  constructor(private dataserviceService: DataserviceService) {}

  ngOnInit() {}

  sendData() {
    this.name = 'prasad';
    this.dataserviceService.sendData(this.name);
  }
}
