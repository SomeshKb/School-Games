import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-view-result',
  templateUrl: './view-result.component.html',
  styleUrls: ['./view-result.component.scss']
})
export class ViewResultComponent implements OnInit {

  dataSource=[];
  displayedColumns: string[] = ['name', 'timeTaken', 'wrongAnswer','createdDate'];

  constructor(private httpService:HttpService) { }

  ngOnInit(): void {
    this.httpService.getPlayersScore().subscribe(res=>{
      console.log(res);
      this.dataSource=res;
    });
  }

}
