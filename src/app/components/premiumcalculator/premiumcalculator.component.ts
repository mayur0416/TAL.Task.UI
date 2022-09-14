import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,NgForm } from '@angular/forms'; 
import {DataService} from '../../services/data.service' 
import {IOccupationResponse} from '../../interfaces/IOccupationResponse';

 
@Component({
  selector: 'app-premiumcalculator',
  templateUrl: './premiumcalculator.component.html',
  styleUrls: ['./premiumcalculator.component.scss']
})
export class PremiumcalculatorComponent implements OnInit {

  //local variables
  
  premiumValue: number = 0;   
  primiumForm: FormGroup;  
  Name:string='';  
  Age:number=0;   
  DateOfBirth:Date=new Date();  
  Occupation:string='';  
  SumInsured:number=0;  
  occupations: IOccupationResponse[] = [];
    
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

   // Executed When Occupation Is Changed      
    
  calculatePremium(){
    if(this.primiumForm.valid){
      const formValue = this.primiumForm.value;
      this.data.calculatePremium(formValue).subscribe(x=>{this.premiumValue=x})     
    } else{
      this.premiumValue = 0;
    }  
  }

}
