import { Injectable } from '@angular/core';

export interface ISettingService {
  name: string,
  url: string,
  checked: boolean
}
@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  defaultService: ISettingService[] = [
    {name: "Home", url: "www.home", checked: false},
    {name: "DashBoard", url: "www.dashboard", checked: false},
    {name: "Access", url: "www.access", checked: false},
    {name: "Requests", url: "www.requests", checked: false},
  ];
  getSettings() {
    return this.defaultService;
  }

  constructor() { }
}
