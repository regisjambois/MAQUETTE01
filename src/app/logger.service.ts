import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
/**
 * MAC OS
 */
export class LoggerService {

  logs: Array<string> = [];

  level: number= 2;  //debug:2, info:1, error:0

  debug(message: string) {
    this.logs.push(message);
    if(this.level == 2) console.log('[DEBUG]',message);
  }

  error(message: string){
    this.logs.push(message);
    if(this.level >= 0)console.error('[ERROR]',message);
  }

  info(message: string){
    this.logs.push(message);
    if(this.level >= 1) console.info('[INFO]',message);
  }

}
