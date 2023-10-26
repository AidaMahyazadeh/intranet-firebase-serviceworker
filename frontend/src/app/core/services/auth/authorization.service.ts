import { Injectable } from '@angular/core';
import { AuthStorageService } from './auth-storage.service';



@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

 constructor(private authStorageService :AuthStorageService) { }
   
 
  isLoggedIn(){
  return  (!!this.authStorageService.getToken())
  }

  isAdmin(){
    let role=this.authStorageService.getRole()
    return role ==='admin'?true : false
  }
}
