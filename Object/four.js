//WAP to print all the object values using for in loop
let emp = { id:101,
            first_name:"Sanjay",
            last_name:"Samson",
            email:"streetstory2000@gmail.com",
            loc:["bangalore","tamilnadu"],
            sal:45000,
            job_role:"Full Stack Developer"
}
for(key in emp){
    console.log(emp[key]);
}