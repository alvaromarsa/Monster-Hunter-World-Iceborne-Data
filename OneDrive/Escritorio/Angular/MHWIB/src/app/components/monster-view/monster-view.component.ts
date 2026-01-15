import { AfterViewInit, ChangeDetectionStrategy, Component, inject, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';


import { MonsterInterface } from '../../interfaces/monster-interface';
import { DataService } from '../../services/data-service';


@Component({
  selector: 'monster-view-component',
  standalone: true,
  imports: [AsyncPipe, CommonModule, MatTableModule, MatPaginatorModule],
  templateUrl: './monster-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MonsterViewComponent implements OnInit, AfterViewInit {

  public monsterData$!: Observable<MonsterInterface[]>;
  private DataService = inject(DataService);

  public dataSource = new MatTableDataSource<MonsterInterface>([]);

    currentPage = 1;
    pageSize = 10;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  public ngOnInit(): void {
    this.monsterData$ = this.DataService.getMonsters();
  }

  public ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}
