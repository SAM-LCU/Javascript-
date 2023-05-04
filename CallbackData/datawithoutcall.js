let employees = [{id:101, name:"sam",sal:35000,email:"sa@gmail.com"},
{id:102, name:"samson", sal:45000, email:"sam@gmail.com"}]

let createEmployee = (emp) =>{ 
   setTimeout(()=>{
    employees.push(emp)
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
createEmployee({id:103, name:"sanjay", email:"123@gmail.com", sal:55000})
getEmployee()