import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import { UserService, Usuario } from '../../services/users.service';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  users:Usuario[] = [];
  user:Usuario = new Usuario();

  constructor(private _userService : UserService) { }

  ngOnInit(): void {
    this._userService.getUsuarios()
      .subscribe( resp => {
        this.users = resp;
    });
    document.getElementById("addUser").addEventListener("click", function(event){
      event.preventDefault();
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
      document.getElementById("modalAdd").style.display = "flex";
    });

    document.getElementById("closeModal").addEventListener("click", function(event){
      event.preventDefault();
      document.getElementsByTagName("body")[0].style.overflow = "scroll";
      document.getElementById("modalAdd").style.display = "none";
    });
  }
  guardar( form: NgForm ) {

    
    let peticion: Observable<any>;

    peticion = this._userService.crearUsuario( this.user );

    peticion.subscribe( resp => {
      console.log(resp);
    });

  }

}
