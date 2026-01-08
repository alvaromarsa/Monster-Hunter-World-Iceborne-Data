import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';

import { MonsterInterface } from '../../interfaces/monster-interface';
import { DataService } from '../../services/data-service';


@Component({
  selector: 'monster-view-component',
  standalone: true,
  imports: [AsyncPipe, CommonModule],
  templateUrl: './monster-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MonsterViewComponent implements OnInit {

  public monsterData$!: Observable<MonsterInterface[]>;
  private DataService = inject(DataService);

  public ngOnInit(): void {
    this.monsterData$ = this.DataService.getMonsters();
  }

}
