import { Component, OnInit } from '@angular/core';
import { QueryService } from './query.service';
import { TableItem } from './table-item';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [QueryService]
})
export class TableComponent implements OnInit {
  topicTilte: string = "队列名称";
  numTitle: string = "剩余消息数";
  topics: Array<TableItem> = [];

  constructor(private query: QueryService) { }

  ngOnInit() {
    this.refresh();
  }

  public refresh(): void {
    this.query
      .getQueueLocal()
      .subscribe(
        (data: TableItem[]) => this.topics = data,
        error => console.log(error),
        () => console.log("Refresh queue table completed"));
  }
}


