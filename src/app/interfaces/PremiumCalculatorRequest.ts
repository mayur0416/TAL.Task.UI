export class PremiumCalculatorRequest {
    name: string;
    age: number;
    ratingId: number;
    occupationId: number;
    dateOfBirth: Date;
    sumInsured:number;    

    constructor(obj:PremiumCalculatorRequest) {
        this.name=obj.name;
        this.age=obj.age;
        this.ratingId = obj.ratingId;
        this.occupationId = obj.occupationId;
        this.dateOfBirth = obj.dateOfBirth;
        this.sumInsured = obj.sumInsured;
    }    
}