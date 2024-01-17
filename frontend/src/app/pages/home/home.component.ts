import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStorageService } from 'src/app/core/services/auth/auth-storage.service';


// const fadeInOut = trigger('fadeInOut',[
//   state('show',
//   style({
//     opacity:1,
//     textAlign :'center',
//     color :'red',
//     fontSize:'30px'
//   })
//   ),
//   state('hide',
//   style({
//     opacity :0
//   })
//   ),
//   transition('show=>hide',[
//     style({
//       fontSize :'60px',
//       color :'blue'
//     }),animate('1s ease-out')
// ]),
// transition ('hide=>show', [animate('1s')])  
// ])

// const fadeIn = trigger('fadeIn', [
//   state('void', style({
//     opacity: 0,
//     transform: 'scale(0)',
//     borderRadius: '100%',
//     width: '0%',
//     height: '0%'
//   })),
//   transition('void =>*', animate('3s ease-in-out',
//     keyframes([
//       style({
//         opacity: 0.25,
//         transform: 'scale(0.25)',
//         borderRadius: '50%',
//         width: '25vh',
//         height: '10vh'
//       }),
//       style({
//         opacity: 0.5,
//         transform: 'scale(0.5)',
//         borderRadius: '50%',
//         width: '50vh',
//         height: '30vh'
//       }),
//       style({
//         opacity: 0.75,
//         transform: 'scale(0.75)',
//         borderRadius: '50%',
//         width: '75vh',
//         height:'50vh'
//       }),
//       style({
//         opacity: 1,
//         transform: 'scale(1)',
//         borderRadius: '0%',
//         width: '100vh',
//         height: '80vh'
//       })
//     ]))

//   )
// ])

const fadeIn = trigger('fadein',[
  transition('enter',[
    style({
      opacity :0
    }),
    animate(300,keyframes([
      style({
        opacity:0.25,
        borderRadius:'50%'
      }),
      style({
        opacity:0.5,
        borderRadius:'50%'
      }),
      style({
        opacity:0.75,
        borderRadius:'50%'
      })
    ]))
  ])
])

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // animations :[fadeInOut]
  //  animations: [fadeIn]
})


export class HomeComponent implements OnInit {
  userName !: string;
  isShowMap = false

  constructor(
    private authStorageService: AuthStorageService,
    private router: Router
  ) { }

  ngOnInit() {
    return this.userName = this.authStorageService.getUserName()!
  }

  onCourses() {
    this.router.navigate(['courses']
    )
  }

  // showMap(){
  //   this.isShowMap = !this.isShowMap
  // }
}

