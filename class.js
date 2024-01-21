// class Person{
//     constructor(name){
//         this.name=name;

//     }
//     getName(){
//         return this.name;
//     }
// }
// function display(){ 
//     var name= document.getElementById("name").value;
//     let person = new Person(name);
//     alert(person.getName());
// }
function test(){
let no=5;
usernum=prompt("enter the number:");
if(usernum==null) {
    return;
}
while (usernum!=5) {
    console.log("wrong number RE-try",usernum);
    usernum=prompt("guess the number");
}
if (usernum==5) {

    console.log("The number is correct",usernum);
}
}
test();