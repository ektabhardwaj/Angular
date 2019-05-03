import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {DataService} from '../data.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  aboutgoal:string;
  constructor(private routes:ActivatedRoute,
    private router:Router,public _service :DataService) {
    this.routes.params.subscribe(res=>console.log(res.id))   }

  ngOnInit() {
 this._service.goal.subscribe(res=>this.aboutgoal=res);
  console.log(this.aboutgoal);
  }
BackToHome(){
  this.router.navigate(['']);
}
}
