import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap, map} from 'rxjs/operators';
import {IOccupationResponse} from '../interfaces/IOccupationResponse';;
import { configuration } from '../configs/config';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) { }

  getOccupations(): Observable<IOccupationResponse[]> {
    return this.http.get<IOccupationResponse[]>(configuration.API_URL_BASE + "occupation/getalloccupations").pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        
    );

    
}
}
