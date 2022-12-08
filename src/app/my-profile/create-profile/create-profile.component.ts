import { Component, OnInit } from '@angular/core';
import { ProfileData } from '../entity/profileData';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {

  profileData!: ProfileData

  constructor() { }

  ngOnInit(): void {
    this.profileData=new ProfileData();
  }

  check(){
    
  }
}
