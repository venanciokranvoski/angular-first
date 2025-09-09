import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Users } from './user.model';
import { SharedCardComponent } from "../shared-card/shared-card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [SharedCardComponent]
})     
export class UserComponent {     
  @Input({required: true}) user!: Users;   
  @Input({required: true}) selected!: boolean;          
  @Output() select = new EventEmitter();

          
  //+++++++++++ Signals===============
  //avatar = input.required<string>();
  //name =  input.required<string>();

  //imagePath = computed(() => {
  //  return 'assets/users/' + this.avatar; // Dsssa forma o angular so vai chamar quando a imagem atualizar!
  //})

  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }

  onSelectedUser(){
    this.select.emit(this.user.id) 
  }

  
}
