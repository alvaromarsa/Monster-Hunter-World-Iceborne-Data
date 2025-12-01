import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

import { ArmorInterface } from '../../interfaces/armor-interface';
import { DataService } from '../../services/data-service';

@Component({
  selector: 'armor-view-component',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './armor-view.component.html',
})
export class ArmorViewComponent implements OnInit {

  private DataService = inject(DataService);
  public armorData$!: Observable<ArmorInterface[]>;
  public loadImageError: string = 'No se encontro imagen';

  public ngOnInit(): void {
    this.armorData$ = this.DataService.getArmor();
  }
}
