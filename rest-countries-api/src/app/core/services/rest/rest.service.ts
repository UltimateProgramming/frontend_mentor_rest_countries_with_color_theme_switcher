import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from '../../../../environments/environment'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor(private httpClient: HttpClient) {}

  public get<T>(route: string, options: object = {}): Observable<T> {
    return this.httpClient.get<T>(
      environment.apiUrl + '/' + environment.apiVersion + '/' + route,
      options
    )
  }
}
