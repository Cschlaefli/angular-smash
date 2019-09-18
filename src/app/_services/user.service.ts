import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models';
import { APP_BASE_HREF } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${APP_BASE_HREF}/users`);
    }

    getById(id: number) {
        return this.http.get(`${APP_BASE_HREF}/users/${id}`);
    }

    register(user: User) {
        return this.http.post(`${APP_BASE_HREF}/users/register`, user);
    }

    update(user: User) {
        return this.http.put(`${APP_BASE_HREF}/users/${user.id}`, user);
    }

    delete(id: number) {
        return this.http.delete(`${APP_BASE_HREF}/users/${id}`);
    }
}