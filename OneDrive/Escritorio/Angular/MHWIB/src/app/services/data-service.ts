import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MonsterInterface } from '../interfaces/monster-interface';
import { ArmorInterface } from '../interfaces/armor-interface';
import { WeaponInterface } from '../interfaces/weapon-interface';
import { map, Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private readonly DATA_URL = 'https://mhw-db.com';

  constructor(private http: HttpClient) { }

  private weaponCache$?: Observable<WeaponInterface[]>;
  private monsterCache$?: Observable<MonsterInterface[]>;
  private armorCache$?: Observable<ArmorInterface[]>;

  getWeaponByType(type: string) : Observable<WeaponInterface[]> {

    return this.http.get<WeaponInterface[]>(`${this.DATA_URL}/weapons?q={"type":"${type}"}`);
  }

  getWeaponById(id: number) : Observable<WeaponInterface> {

    return this.http.get<WeaponInterface[]>(`${this.DATA_URL}/weapons/${id}`).pipe(
    // 🪄 MAGIA: Cogemos el array y devolvemos solo el primer elemento [0]
    map(arrayDeArmas => arrayDeArmas[0])
    );
  }

  getWeaponsIcons(): Observable<{type: string, icon: string}[]> {

    return this.getWeapons().pipe(
      map(weapons => {
        const iconsMap = new Map<string, { type: string; icon: string; }>();

        for (const weapon of weapons) {

          if(!iconsMap.has(weapon.type) && weapon.assets?.icon) {
            iconsMap.set(weapon.type, { type: weapon.type, icon: weapon.assets.icon });
          }
        }

        return Array.from(iconsMap.values());
      })
    )
  }

  getWeapons() {
    //return this.http.get<WeaponInterface[]>(`${this.DATA_URL}/weapons`);
    if (!this.weaponCache$) {

      console.log('Vamos a pedir los datos de armas a la API');
      this.weaponCache$ = this.http.get<WeaponInterface[]>(`${this.DATA_URL}/weapons`).pipe(
        shareReplay(1)
      );
    }else {
      console.log('Recuperando las armas del caché');
    }
     return this.weaponCache$;
  }

  getMonsters() {

     if (!this.monsterCache$) {

      console.log('Vamos a pedir los datos de monstruos a la API');
      this.monsterCache$ = this.http.get<MonsterInterface[]>(`${this.DATA_URL}/monsters`).pipe(
        shareReplay(1)
      );
    }else {
      console.log('Recuperando los monstruos del caché');
    }
     return this.monsterCache$;

  }



  getArmor() {

    if (!this.armorCache$) {

      console.log('Vamos a pedir los datos de armaduras a la API');
      this.armorCache$ = this.http.get<ArmorInterface[]>(`${this.DATA_URL}/armor`).pipe(
        shareReplay(1)
      );
    }else {
      console.log('Recuperando las armaduras del caché');
    }
     return this.armorCache$;

  }

}
