import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,NgForm } from '@angular/forms'; 
import {DataService} from '../../services/data.service' 
import {IOccupationResponse} from '../../interfaces/IOccupationResponse';
  
interface Occupation {
  name: string;
    
}
@Component({
  selector: 'app-premiumcalculator',
  templateUrl: './premiumcalculator.component.html',
  styleUrls: ['./premiumcalculator.component.scss']
})
export class PremiumcalculatorComponent implements OnInit {
  occupations: IOccupationResponse[] = [];
   
  primiumForm: FormGroup;  
  Name:string='';  
  Age:number=0;   
  DateOfBirth:Date=new Date();  
  Occupation:string='';  
  SumInsured:number=0;  
    
  constructor(private fb: FormBuilder,private data: DataService) { 
     // To initialize FormGroup  
    this.primiumForm = fb.group({  
      'Name' : [null, Validators.required],  
      'Age' : [null, Validators.compose([Validators.required, Validators.min(18)])],      
      'Occupation':[null, Validators.required], 
      'DateOfBirth' : [null, Validators.required],   
      'SumInsured':[null, Validators.required]  
       
    });  
  }

  ngOnInit(): void {
    // occupation data api call
    this.data.getOccupations().subscribe(x=>{this.occupations=x});
  }

   // Executed When Form Is Submitted  
   onFormSubmit(form:NgForm)  
   {  
     console.log(form);  
   }  
   changeOccupation(value:string){
   console.log(this.primiumForm.valid);
    console.log(value);
  }
}
