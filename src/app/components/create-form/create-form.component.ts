import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UsersService } from './../../services/users.service';


@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {
  form: FormGroup;
  id: string;
  isAddMode: boolean;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UsersService,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
    this.isAddMode = !this.id;

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      cname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
    });

    if (!this.isAddMode) {
      this.userService.getById(this.id)
        .pipe(first())
        .subscribe(x => {
          this.form.patchValue(x)
          console.log(x);
        });
    }
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    if (this.isAddMode) {
      this.createUser();
    } else {
      this.updateUser();
    }
  }

  private createUser() {
    this.userService.addUser(this.form.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.router.navigate(['/details'], { relativeTo: this.route });
        },
        error: error => {
          this.loading = false;
        }
      });
  }

  private updateUser() {
    this.userService.updateUser(this.id, this.form.value)
        .pipe(first())
        .subscribe({
            next: () => {
                this.router.navigate(['/details'], { relativeTo: this.route });
            },
            error: error => {
                this.loading = false;
            }
        });
}

}
