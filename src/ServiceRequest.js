import React from 'react'; 
import "./App.css";
import { Service } from './Service';
  export default function  ServiceRequest(){
  const api1=[
    {
     "name": "Joe.Stark19",
     "email": "Rodger_Jakubowski@hotmail.com",
     "service": "service 1",
     "id": "1"
    },
    {
     "name": "Jessyca78",
     "email": "Blaze93@yahoo.com",
     "service": "service 2",
     "id": "2"
    },
    {
     "name": "Max.Emard6",
     "email": "Marley_Franecki75@hotmail.com",
     "service": "service 3",
     "id": "3"
    },
    {
     "name": "Junior.Dare98",
     "email": "Dannie.Brakus58@gmail.com",
     "service": "service 4",
     "id": "4"
    },
    {
     "name": "Theresia.Marvin",
     "email": "Eleonore_Lockman29@gmail.com",
     "service": "service 5",
     "id": "5"
    },
    {
     "name": "Kailey_Bartoletti62",
     "email": "Wallace.Kilback@yahoo.com",
     "service": "service 6",
     "id": "6"
    },
    {
     "name": "Isom95",
     "email": "Ricardo54@hotmail.com",
     "service": "service 7",
     "id": "7"
    },
    {
     "name": "Kim.Satterfield",
     "email": "Reid_Lebsack@gmail.com",
     "service": "service 8",
     "id": "8"
    },
    {
     "name": "Lisette_Flatley",
     "email": "Orpha94@gmail.com",
     "service": "service 9",
     "id": "9"
    },
    {
     "name": "Myrtie_Harris",
     "email": "Miracle.Effertz@hotmail.com",
     "service": "service 10",
     "id": "10"
    },
    {
     "name": "Hildegard50",
     "email": "Madie_Dare62@gmail.com",
     "service": "service 11",
     "id": "11"
    },
    {
     "name": "Russell_Carter",
     "email": "Zander71@yahoo.com",
     "service": "service 12",
     "id": "12"
    },
    {
     "name": "Turner84",
     "email": "Kellen_McKenzie@hotmail.com",
     "service": "service 13",
     "id": "13"
    },
    {
     "name": "Narciso_Ernser",
     "email": "Waylon7@hotmail.com",
     "service": "service 14",
     "id": "14"
    },
    {
     "name": "Teresa_Gusikowski",
     "email": "Dena14@yahoo.com",
     "service": "service 15",
     "id": "15"
    }
   ]
  return(
    <div className='table'>
    <table className='table'>
<thead className="thead-dark">
<tr>
  <th>Id</th>
  <th>Name</th>
  <th>Email</th>
  <th>Service</th>
</tr>
</thead>
<tbody>
{api1.map((ele)=> (    
<tr >
  <th >{ele.id}</th>
  <td>{ele.name}</td>
  <td>{ele.email}</td>
  <td><Service/></td>
</tr>
))
}
</tbody>
</table>
</div>
)
}

