import { Component } from '@angular/core';

@Component({
  selector: 'afford-calc',
    templateUrl: './affordability.component.html',
})
export class AffordabilityComponent  { 
    savings = 0;
    monthlyIncome = 0;
    monthlyExpenses = 0;
    itemCost = 0;


    onKey(event: any) { // without type info
        if(event.target.id == "incomeInput")
            this.monthlyIncome = event.target.value;
        else if(event.target.id == "inputSavings")
            this.savings = event.target.value;
        else if(event.target.id == "expenseInput")
            this.monthlyExpenses = event.target.value;
        else if(event.target.id == "affordInput")
            this.itemCost = event.target.value;
    }
    canAfford(event: any) {
        event.preventDefault();
        var netIncome = this.monthlyIncome - this.monthlyExpenses;
        if((netIncome - this.itemCost) > 0) {
            alert("yes");
        } else if ((netIncome - this.itemCost + this.savings) > 0) {
            alert("yes but consider waiting");
        } else {
            alert("no, consider waiting");
        }
    }
    printValues(): void {
        console.log("Savings: " + this.savings);
        console.log("monthlyIncome: " + this.monthlyIncome);
        console.log("monthlyExpenses: " + this.monthlyExpenses);
        console.log("itemCost: " + this.itemCost);
    }
}
