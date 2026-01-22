import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable, shareReplay } from 'rxjs';

import { MonsterInterface } from '../interfaces/monster-interface';
import { ArmorInterface } from '../interfaces/armor-interface';
import { WeaponInterface } from '../interfaces/weapon-interface';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  //private readonly DATA_URL = 'https://mhw-db.com';

  constructor(private http: HttpClient) { }

  private weaponCache$?: Observable<WeaponInterface[]>;
  private monsterCache$?: Observable<MonsterInterface[]>;
  private armorCache$?: Observable<ArmorInterface[]>;


  private readonly weaponProjection = JSON.stringify({
      id: true,
      assets: { icon: true, image: true },
      type: true,
      name: true,
      rarity: true,
      attack: true,
      elements: true,
      attributes: true,
      defense: true
    });


  getWeaponByType(type: string) : Observable<WeaponInterface[]> {

    const filtro = JSON.stringify({ type: type });
    const params = new HttpParams()
    .set('p', this.weaponProjection)
    .set('q', filtro);

    return this.http.get<WeaponInterface[]>(`/weapons`, {params});
  }

  getWeaponById(id: number) : Observable<WeaponInterface> {

    const params = new HttpParams().set('p', this.weaponProjection);

    return this.http.get<WeaponInterface[]>(`/weapons/${id}`, {params}).pipe(
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

    const params = new HttpParams().set('p', this.weaponProjection);

    if (!this.weaponCache$) {

      this.weaponCache$ = this.http.get<WeaponInterface[]>(`/weapons`, {params}).pipe(
        shareReplay(1)
      );
    }
     return this.weaponCache$;
  }

  getMonsters() {

     if (!this.monsterCache$) {

      this.monsterCache$ = this.http.get<MonsterInterface[]>(`/monsters`).pipe(
        shareReplay(1)
      );
    }
     return this.monsterCache$;

  }



  getArmor() {

    const armorProjection = JSON.stringify({
      id: true,
      type: true,
      name: true,
      rarity: true,
      rank: true,
      resistances: true,
      skills: true,
      defense: true,
      assets: true,
    });
    const params = new HttpParams().set('p', armorProjection);

    if (!this.armorCache$) {

      this.armorCache$ = this.http.get<ArmorInterface[]>(`/armor`, {params}).pipe(
        shareReplay(1)
      );
    }
     return this.armorCache$;

  }

  getArmorByRank(rank: string) : Observable<ArmorInterface[]> {

    const filtro = JSON.stringify({ rank: rank });
    const armorProjection = JSON.stringify({
      id: true,
      type: true,
      name: true,
      rarity: true,
      rank: true,
      resistances: true,
      skills: true,
      defense: true,
      assets: true,
    });
    const params = new HttpParams()
    .set('p', armorProjection)
    .set('q', filtro);

    if (!this.armorCache$) {

      this.armorCache$ = this.http.get<ArmorInterface[]>(`/armor`, {params}).pipe(
        shareReplay(1)
      );
    }
     return this.armorCache$;
  }

}
