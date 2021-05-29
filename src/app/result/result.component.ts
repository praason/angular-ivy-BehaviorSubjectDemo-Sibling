import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  resultData: any;

  constructor(private dataserviceService: DataserviceService) {}

  ngOnInit() {
    this.dataserviceService.getData().subscribe(data => {
      this.resultData = data;
      console.log(this.resultData);
    });
  }
}
