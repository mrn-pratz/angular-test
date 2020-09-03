import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';

    @Injectable()
    export class UserService{

        private url = './assets';

        constructor( private http: HttpClient){
            console.log('UserService');
        }

        crearUsuario( user: Usuario ) {
            return this.http.post(`${ this.url }/users.json`, user)
                    .pipe(
                      map( (resp: any) => {
                       console.log(resp);
                      })
                    );
        
        }
        getUsuarios() {
            return this.http.get(`${ this.url }/users.json`)
                    .pipe(
                      map( this.crearArreglo )
                    );
        }

        private crearArreglo( usuarioObject: any ) {
            let { users } = usuarioObject;
            return users;
        }
    }
    export class Usuario{
        picture: string;
        name: string;
        fathersLastName: string;
        mothersLastName: string;
        email: string;
        roleId: string;
        active: Int16Array;
        constructor(){}
    };
