import { Component, OnInit } from '@angular/core';
import { ISettingService, SettingsService } from 'src/app/services/settings.service';

interface ITitle {
  title: string,
  description: string
}
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  titlesdescs: ITitle[] = [];
  clicked = true;
  public settings: ISettingService[] = [];

  
  constructor(private _settingService: SettingsService) { }

  onButtonAdd(title: HTMLInputElement, description: HTMLInputElement) {
    
    this.titlesdescs.push({title: title.value, description: description.value});
    title.value = '';
    description.value = '';
  }

 

  ngOnInit(): void {
    this.settings = this._settingService.getSettings();
  }


}
