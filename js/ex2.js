const day = prompt(("Enter a day of the week"));
console.log("You entered " + day)

switch(day){
    case "mon":
        console.log("The following day is tues");
        break;
    case "tue":
        console.log("The following day is wed");
        break;
    case "wed":
        console.log("The following day is thu");
        break;
    case "thu":
        console.log("The following day is fri");
        break;
    case "fri":
        console.log("The following day is sat");
        break;
    case "sat":
        console.log("The following day is sun");
        break;
    case "sun":
        console.log("The following day is mon");
    
}