import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MonsterInterface } from '../interfaces/monster-interface';
import { ArmorInterface } from '../interfaces/armor-interface';
import { WeaponInterface } from '../interfaces/weapon-interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private readonly DATA_URL = 'https://mhw-db.com';

  constructor(private http: HttpClient) { }

  getWeaponByType(type: string) {

    return this.http.get<WeaponInterface[]>(`${this.DATA_URL}/weapons?q={"type":"${type}"}`);
  }

  getWeapons() {
    return this.http.get<WeaponInterface[]>(`${this.DATA_URL}/weapons`);
  }

  getMonsters() {

    return this.http.get<MonsterInterface[]>(`${this.DATA_URL}/monsters`);

  }

  getArmor() {
    return this.http.get<ArmorInterface[]>(`${this.DATA_URL}/armor`);
  }

}
