function calculateCoffeeSupply(age, cups_Per_Day) {
    let MAX_AGE = 70;
    let  noof_yearsLeft = MAX_AGE - age;
    const totalCups = noof_yearsLeft * 365 * cups_Per_Day;  
    console.log(`You will need ${totalCups} cups of coffee to keep you until the age of ${MAX_AGE}.`);
}
calculateCoffeeSupply(15, 1);
calculateCoffeeSupply(35, 2);
calculateCoffeeSupply(20, 4);
