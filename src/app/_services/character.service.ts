import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Character } from '../_models';
import { environment } from 'src/environments/environment.prod';

@Injectable({ providedIn: 'root' })
export class CharacterService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Character[]>(`${environment.apiUrl}/character`);
    }

    getById(id: number) {
        return this.http.get(`${environment.apiUrl}/character/${id}`);
    }
}
