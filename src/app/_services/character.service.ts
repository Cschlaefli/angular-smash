import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Character } from '../_models';
import { environment } from 'src/environments/environment.prod';

@Injectable({ providedIn: 'root' })
export class CharacterService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Character[]>(`${environment.apiUrl}/character`);
    }

    getById(id: number): Observable<Character> {
        return this.http.get<Character>(`${environment.apiUrl}/character/${id}`);
    }

    putCharacter(character : Character)
    {
        return this.http.put<Character>('${enviornment.apiUrl}/character', character);
    }
}
