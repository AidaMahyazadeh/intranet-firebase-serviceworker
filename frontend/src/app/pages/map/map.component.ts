import { Component, OnInit } from '@angular/core';
import * as Leaflet from 'leaflet';
import {  ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit { 

 
 constructor(private toast :ToastrService,){}

 ngOnInit(){
 if(!navigator.geolocation){
      this.toast.warning('Location is not supported.')
    }
    
    navigator.geolocation.getCurrentPosition(this.success,this.error)
 }

 // 41.9384452 12.4724649
  success(position:any){
   const coords = position.coords;
   const {longitude,latitude} =coords;
   
   const  myMap = Leaflet.map('map').setView([latitude,longitude],13)
  
   console.log(latitude,longitude)
   Leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{
    maxZoom: 19
  }).addTo(myMap);
   
   const marker = Leaflet.marker([latitude,longitude]).addTo(myMap);
   marker.bindPopup(`You are here`).openPopup();
  
  }

  error(err:any){
    if(err.code===1){
      this.toast.info('please allow geolocation access.')
    }
    else{
      this.toast.error('connot get current location.')
    }
 }
}
// myMap !:Leaflet.Map; 
//  center!: Leaflet.LatLngExpression;
//  zoom = 13;
// ngOnInit(){
//  if(!navigator.geolocation){
//       this.toast.warning('Location is not supported.')
//     }
    
//     navigator.geolocation.getCurrentPosition(this.initMap)
//  }
//  initMap(position :any){
//   const {latitude,longitude}=position.coords;
//   this.center =[latitude,longitude];
//   this.myMap = Leaflet.map('map').setView(this.center,this.zoom);
//     Leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{
//     maxZoom: 19
//   }).addTo(this.myMap);
//  }