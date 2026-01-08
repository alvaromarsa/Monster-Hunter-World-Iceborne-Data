import { Component, inject, OnInit, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

import { DataService } from '../../services/data-service';
import { WeaponInterface, WeaponTypeFilter } from '../../interfaces/weapon-interface';
import { WeaponsSelect } from "../weapons-select/weapons-select";
import { WeaponGrid } from '../weapon-grid/weapon-grid';
import { WeaponDescription } from '../weaponDescription/weaponDescription';

@Component({
  selector: 'weapons-view-component',
  standalone: true,
  imports: [WeaponsSelect, WeaponGrid, WeaponDescription, AsyncPipe],
  templateUrl: './weapons-view.component.html',

})
export class WeaponsViewComponent implements OnInit {

  private DataService = inject(DataService);

  public weaponsData$!: Observable<WeaponInterface[]>
  public weaponsIcons$!: Observable<WeaponTypeFilter[]>;

  public loadImageError: string = 'No se encontro imagen';
  public hasSelectedType: boolean = false;
  public hasSelectedId: boolean = false;

  public selectedWeapon$ = signal<WeaponInterface | null>(null);
  public weaponType$ = new BehaviorSubject<string>('');//usaremos este observable para poder volver atras en el componente weaponDescription

  ngOnInit(): void {
    this.obtenerArmas();
    this.obtenerIconos();
  }

  public obtenerArmas(): void {
    this.weaponsData$ = this.DataService.getWeapons();
  }

  public obtenerIconos(): void {
    this.weaponsIcons$ = this.DataService.getWeaponsIcons();
  }

  public onTypeSelected(type: string): void {
  if (!type) {
    // mostrar todas las armas si el filtro se limpia
    this.obtenerArmas();
    return;
  }
  // usa el servicio para pedir armas por tipo
  this.weaponsData$ = this.DataService.getWeaponByType(type);
  this.weaponType$.next(type);
  this.hasSelectedType = true;
  }

public onWeaponSelected(weapon: WeaponInterface): void {

  this.selectedWeapon$.set(weapon);
  this.hasSelectedId = true;
  // ejemplo: abrir detalles o guardar selección
  console.log('arma seleccionada:', weapon);
}

public volverAlGrid(): void {
    this.hasSelectedId = false;
    this.selectedWeapon$.set(null);
  }

}
