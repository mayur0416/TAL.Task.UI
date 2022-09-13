import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { IOccupationResponse } from '../interfaces/IOccupationResponse';
import { PremiumCalculatorRequest } from '../interfaces/PremiumCalculatorRequest';
import { configuration } from '../configs/config';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getOccupations(): Observable<IOccupationResponse[]> {
    return this.http.get<IOccupationResponse[]>(configuration.API_URL_BASE + "occupation/getalloccupations").pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
    );
  }

  calculatePremium(premiumCalculatorRequest: PremiumCalculatorRequest): Observable<number> {
    return this.http.post<number>(configuration.API_URL_BASE + "premium/calculate", premiumCalculatorRequest);
  }

}
