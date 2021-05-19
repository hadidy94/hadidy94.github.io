import { Component, OnInit } from '@angular/core';
import { UsersService } from './../../services/users.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from './../../helpers/user';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  users:User

  constructor(private usersservice: UsersService ,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.usersservice.getAllUser().subscribe( data=>{
      this.users = data;
    })
  }
  delete(id){
    this.usersservice.deleteUser(id).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['/details'], { relativeTo: this.route });
      }


    )
  }

}
