var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];

console.log(users[1].age)
console.log(users[0].name)

for(user of users){
    console.log(user.name,"-",user.age)
}
for(user of users){
    if(user.age>17){
        console.log(user.name)
    }
}