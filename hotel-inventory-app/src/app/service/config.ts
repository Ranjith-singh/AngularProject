import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Config {
  constructor(){
    console.log("Config Initialized");
  }
}
