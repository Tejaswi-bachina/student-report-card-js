let name = prompt("Enter your name: ");
let rollno = prompt("Enter your roll no: ");
let marks = []
for(let i=0;i<5;i++){
    let x = Number(prompt("Enter marks for Subject "+(i+1)+" : "));
    marks.push(x);
}




let lowest = marks[0];
let highest = marks[0];
let total = 0;
for(let i=0;i<marks.length;i++){
    total+=marks[i]
    if (marks[i]>highest){
        highest = marks[i];
    }
    if (lowest>marks[i]){
        lowest = marks[i];
    }
}

console.log("========================");
console.log("STUDENT REPORT CARD");
console.log("========================");
console.log("Name : "+name);
console.log("Roll No: "+rollno);
console.log("Subject wise marks: ");

for(let i=0;i<marks.length;i++){
    console.log("Subject "+(i+1)+". "+marks[i]);
}

console.log("------------------------");
console.log("Highest marks: "+highest);
console.log("Lowest marks: "+lowest);


let avg = total/marks.length;
console.log("Total : "+total);
console.log("Average : "+avg);
if ((avg>=90) && (lowest>=35)){
    console.log("Grade: A+");
}
else if((avg>=80) && (lowest>=35)){
    console.log("Grade: A");
}
else if((avg>=70) && (lowest>=35)){
    console.log("Grade: B");
}
else if((avg>=60) && (lowest>=35)){
    console.log("Grade: C");
}
else{
    console.log("Grade: F");
}
if (lowest>=35){
    console.log("Congratulations");
}
else{
    console.log("Failed");
}




console.log("========================");
console.log("Report Generated Successfully!");
console.log("========================");