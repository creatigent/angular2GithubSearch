import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username:string;
    private client_id:string = ''; // github aplication client id 
    private client_secret:string = ''; // github aplication client secret 

    constructor(private _http: Http){
        console.log('GitHub service loading ....');
        this.username = ''   // github user id 
    }

    getUser() {
        return this._http.get('https://api.github.com/users/' 
                    + this.username 
                    + '?client_id=' + this.client_id 
                    + '&client_secret=' + this.client_secret )
                   .map(res => res.json());
    }

    getRepos() {
        return this._http.get('https://api.github.com/users/' 
                + this.username 
                + '/repos?client_id=' + this.client_id 
                + '&client_secret=' + this.client_secret )
                .map(res => res.json());
    }

    updateUser(username:string){
        this.username = username;
    }
}
