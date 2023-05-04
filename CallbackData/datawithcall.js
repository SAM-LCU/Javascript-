// creating a programe with call back function
let employees = [{id:101, name:"sam",sal:35000,email:"sa@gmail.com"},
{id:102, name:"samson", sal:45000, email:"sam@gmail.com"}]

let createEmployee = (emp, callback) =>{ 
   setTimeout(()=>{
    employees.push(emp)
    callback()
   },3000)
}
let getEmployee = ( ) => { 
    setTimeout(()=>{
        let rows = ""
        employees.forEach((employees)=>{
            rows += `<tr>
                      <td>${employees.id}</td>  
                      <td>${employees.name}</td>  
                      <td>${employees.email}</td>  
                      <td>${employees.sal}</td> 
                   </tr>`
        })
      document.getElementById('data').innerHTML = rows
    },1000)
}
createEmployee({id:103, name:"sanjay", email:"123@gmail.com", sal:55000}, getEmployee);

// while invoking a function, passing a function as a argument to another function -callback
// Promise -.then(), .catch()
// async & await