import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Lead } from '../models/lead';

@Injectable({
  providedIn: 'root'
})
export class LeadService {
  private apiUrl = `${environment.apiUrl}/api/lead`;

  constructor(private http: HttpClient) {}

  getInvited(): Observable<Lead[]> {
    return this.http.get<Lead[]>(`${this.apiUrl}/tab/invited`);
  }

  getAccepted(): Observable<Lead[]> {
    return this.http.get<Lead[]>(`${this.apiUrl}/tab/accepted`);
  }

  acceptLead(id: string): Observable<void> {
    return this.http.patch<void>(`${this.apiUrl}/${id}`, null);
  }

  declineLead(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
