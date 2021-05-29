import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = true;
  serverCreationStatus = 'NO server was created!';
  serverName = 'test Server'
  constructor() {
    setTimeout(()=>{
      this.allowNewServer = false;
    },2000)
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was Created!';
  }

  onCreatewithServername(){
    this.serverCreationStatus = 'server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event : any){
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
