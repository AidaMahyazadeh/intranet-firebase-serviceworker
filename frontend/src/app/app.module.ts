import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { PagesModule } from './pages/pages.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
<<<<<<< HEAD
// import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
// import { environment } from '../environments/environment';
// import { provideAuth,getAuth } from '@angular/fire/auth';
// import { provideDatabase,getDatabase } from '@angular/fire/database';
// import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
=======
import {MatButtonModule} from '@angular/material/button';
import { SharedModule } from './shared/shared.module';
import { MatTableDataSource } from '@angular/material/table';
>>>>>>> 79d05ba907c8d560ab9403872de3b058181c5c46




@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    CoreModule,
    PagesModule,
<<<<<<< HEAD
    MatButtonToggleModule,
=======
    SharedModule,
    MatButtonModule,
>>>>>>> 79d05ba907c8d560ab9403872de3b058181c5c46
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
       registrationStrategy: 'registerWhenStable:30000'
    }),
    // MatTableDataSource
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
