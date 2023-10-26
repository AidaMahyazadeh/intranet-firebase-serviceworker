import { Component, OnInit } from '@angular/core';
import { SwPush, SwUpdate, VersionEvent } from '@angular/service-worker';
import { ToastrService } from 'ngx-toastr';
import {PUBLIC_VAPID_KEY_OF_SERVER} from '../app/app.constants'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'intranet-material';

  constructor(
    private swUpdate :SwUpdate,
    private swPush :SwPush,
    private toast:ToastrService){}

  ngOnInit() {
    if(!this.swUpdate.isEnabled){
      this.toast.info('Service worker is not enabled.')
      return
    }
    this.handleUpdate()
    // this.handleNotification()
  }

  handleUpdate(){
    this.swUpdate.versionUpdates.subscribe((event :VersionEvent)=>{
       if (event.type ==='VERSION_READY'&& confirm('There is a new version available, would you like to get it? ')){
        window.location.reload
       }
    })
    const interval =setInterval(async () => {
      const shouldUpdate = await this.swUpdate.checkForUpdate();
      if(shouldUpdate){
        this.toast.info("There is new version for downloading.")
        const result =await this.swUpdate.activateUpdate()
        
        clearInterval(interval)
      }

    },1000)
  }

  async handleNotification(){
   try{
   await this.swPush.requestSubscription({
      serverPublicKey : PUBLIC_VAPID_KEY_OF_SERVER
    })
    
   }catch(err){

   }
   this.swPush.messages.subscribe((message)=>{
    console.log(message)
   })
  }
}
