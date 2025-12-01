import { Component, inject, OnInit } from '@angular/core';
import { DataService } from '../../services/data-service';
import { Observable } from 'rxjs';
import { WeaponInterface } from '../../interfaces/weapon-interface';
import { AsyncPipe } from '@angular/common';
import { WeaponsSelect } from "../weapons-select/weapons-select";

@Component({
  selector: 'weapons-view-component',
  standalone: true,
  imports: [WeaponsSelect, AsyncPipe],
  templateUrl: './weapons-view.component.html',

})
export class WeaponsViewComponent implements OnInit {

  private DataService = inject(DataService);
  public weaponsData$!: Observable<WeaponInterface[]>
  public loadImageError: string = 'No se encontro imagen';

    public ngOnInit(): void {
    this.weaponsData$ = this.DataService.getWeapons();
  }


}
