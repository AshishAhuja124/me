import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private empService:EmpService) { }
  alertMe(val)          //We are calling alert function from home.html//
  {
    alert(val);
  }

  ngOnInit() {
  }

  model=new Employee();
  addEmployee(){
     this.empService.addEmployee(this.model)
     .subscribe()
     console.log(" Employee submitted")
     
  }
}
