import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Language } from 'src/typings/Language';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private privateLanguages = new BehaviorSubject(0);
  language = this.privateLanguages.asObservable();
  readonly API_URL = 'https://alefesouza.dev/gama/languages.php';

  constructor(private httpClient: HttpClient) {}

  getLanguages(): Observable<Language[]> {
    return this.httpClient.get<Language[]>(this.API_URL);
  }
}
