import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-names-list',
  templateUrl: './names-list.component.html',
  styleUrls: ['./names-list.component.css'],
})
export class NamesListComponent implements OnInit {
  names: string[];
  chosenNames: string[];
  qname: string;
  constructor(
    private route: ActivatedRoute,
    private dataService: DataServiceService
  ) {
    this.names = dataService.names;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((qParams: Params) => {
      this.qname = qParams['name'];
    });
    this.chosenNames = this.dataService.findName(this.qname);
  }
}
