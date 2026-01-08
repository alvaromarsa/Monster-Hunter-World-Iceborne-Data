import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import { AsyncPipe, SlicePipe} from '@angular/common';
import { Observable } from 'rxjs';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

import { ArmorInterface } from '../../interfaces/armor-interface';
import { DataService } from '../../services/data-service';
import { TranslateArmorPipe } from '../translations/translate-armor.pipe';

@Component({
  selector: 'armor-view-component',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, SlicePipe, AsyncPipe, TranslateArmorPipe],
  templateUrl: './armor-view.component.html',
})
export class ArmorViewComponent implements OnInit, AfterViewInit {

  private dataService = inject(DataService);
  public armorData$!: Observable<ArmorInterface[]>;
  public loadImageError: string = 'No se encontro imagen';
  // 1. El "Mostrador" donde pondremos las armaduras
  public dataSource = new MatTableDataSource<ArmorInterface>([]);

  currentPage = 1;
  pageSize = 10;

  // 2. El "Mando" para conectar con el HTML
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  public ngOnInit(): void {
    this.armorData$ = this.dataService.getArmor();
    // 3. Llamamos a la API y cuando lleguen las armaduras, las ponemos en el mostrador
    this.armorData$.subscribe((armaduras) => {
      this.dataSource.data = armaduras;
      });
    //console.log(this.dataSource.data);
  }

  public ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}
