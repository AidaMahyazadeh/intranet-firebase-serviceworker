import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import ISignUpForm from '../../models/signup.model';
import { ILoginForm } from '../../models/login.model';
import { Observable } from 'rxjs';
import { AuthStorageService } from './auth-storage.service';
import IUser from '../../models/user.model';
import { Firestore,collection,setDoc,doc} from '@angular/fire/firestore';
import { getAuth,createUserWithEmailAndPassword,signOut, getIdToken, signInWithCustomToken} from '@angular/fire/auth';




@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  baseUrl = 'http://localhost:5000/';
  auth=getAuth()
  token !:string;
  
  constructor(
    private http : HttpClient,
    private AuthStorageService :AuthStorageService,
    private firestore :Firestore
    ) { }

  //  async signup ( signUpForm : ISignUpForm) {
  //     const users = collection(this.firestore,'users')
  //     const userCredential=await createUserWithEmailAndPassword(this.auth, signUpForm.email,(signUpForm.password!))
  //     const user=doc(users, userCredential.user.uid)
  //     const uid= userCredential.user.uid
      
  //     setDoc(user,signUpForm)
  //     getIdToken(userCredential.user)
  //            .then(res=>{
  //             this.token=res
  //             // this.logout()    
  //           })
  //      return userCredential 
  //    }  
  signup ( signUpForm : ISignUpForm) {
     return this.http.post (`${this.baseUrl}signup`,signUpForm)
   }


    login (loginForm : ILoginForm): Observable<any>{
    return this.http.post (`${this.baseUrl}login`,loginForm)
   }


   
   logout(){
    this.AuthStorageService.removeUnneccessaryStorage()
   }
    // async login (loginForm:ILoginForm){
    // return await signInWithCustomToken(this.auth,this.token)
    //  }

  //   async logout(){
  //    signOut(this.auth)
  //   // this.AuthStorageService.removeUnneccessaryStorage()
  //  }
  
  getAllUsers () :Observable<IUser[]>  {
    return this.http.get<IUser[]> (`${this.baseUrl}users`)
  }
 
}

// signup ( signUpForm : ISignUpForm) {
  //   // return this.http.post (`${this.baseUrl}signup`,signUpForm)
  //  }
 
  //  login (loginForm : ILoginForm): Observable<any>{
  //   return this.http.post (`${this.baseUrl}login`,loginForm)
  //  }