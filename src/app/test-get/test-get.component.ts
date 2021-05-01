import { Component, OnInit, ViewChild} from '@angular/core';
import {BackendApiService} from '../services/backend-api/backend-api.service';
import {Category, Transaction} from '../services/backend-api/interfaces';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-test-get',
  templateUrl: './test-get.component.html',
  styleUrls: ['./test-get.component.sass']
})
export class TestGetComponent implements OnInit {
  apiService: BackendApiService;
  categories: Category[] = [];
  dataSource: MatTableDataSource<Transaction>;
  transactions: Transaction[] = [];
  displayColumns: string[] = ['id', 'category', 'subCategory', 'type', 'value', 'date', 'info'];
  // dataSchema: string[] = ['number', 'string', 'string', 'string', 'number', 'string', 'string'];

  @ViewChild('paginator') paginator: MatPaginator;

  constructor(apiService: BackendApiService) {
    this.apiService = apiService;
  }

  ngOnInit(): void {
    this.apiService.getTransactions()
      .subscribe(
        (data: Transaction[]) => {
          this.transactions = this.formatDate(data);
          this.dataSource = new MatTableDataSource<Transaction>(this.transactions);
          this.dataSource.paginator = this.paginator;
        });
  }

  getCategoryList(): void {
    this.apiService.getCategories().subscribe(data => this.categories = (data as Category[]));
  }

  getTransactionList(): void {
    this.apiService.getTransactions()
      .subscribe(
        (data: Transaction[]) => this.transactions = this.formatDate(data),
      );
  }

  formatDate(data: Transaction[]): Transaction[] {
    const options = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    };
    data.forEach(transaction => {
      transaction.date = new Date(transaction.date).toLocaleDateString('en-US', options);
    });

    return data;
  }

  updateValues(): void {
    this.apiService.updateTransactions(this.dataSource.data);
  }
}
