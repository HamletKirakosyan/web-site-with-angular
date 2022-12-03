import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';
import { ISettingService } from 'src/app/services/settings.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public settings: ISettingService[] = [];
  constructor(private _settingService: SettingsService) { }

  
  ngOnInit(): void {
    this.settings = this._settingService.getSettings();
  }

}
