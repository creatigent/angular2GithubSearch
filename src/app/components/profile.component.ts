import { Component } from '@angular/core';
import {GithubService} from '../services/github.service';

@Component({
    moduleId:module.id,
    selector: 'profile',
    templateUrl: `profile.component.html`
})

export class ProfileComponent  {  
    user:any;
    repos:any[];
    username: string;

    constructor(private _gethubService: GithubService){
        this.user = false;
    }

    searchUser(){
        this._gethubService.updateUser(this.username);

        this._gethubService.getUser().subscribe(user => {
            this.user = user;
        });

        this._gethubService.getRepos().subscribe(repos => {
            this.repos = repos;
        });
    }
}
