import React from 'react'; 
import { Status } from './Status';
import "./App.css";
  export default function  LeadStatus(){
  const api=[
    {
     "name": "Raphael59",
     "email": "Liliana_Denesik@hotmail.com",
     "status": "status 1",
     "id": "1"
    },
    {
     "name": "Yadira10",
     "email": "Marshall.Cormier@hotmail.com",
     "status": "status 2",
     "id": "2"
    },
    {
     "name": "Stewart.Schmidt98",
     "email": "Erling.Goyette@hotmail.com",
     "status": "status 3",
     "id": "3"
    },
    {
     "name": "Nickolas.Cartwright82",
     "email": "Elisabeth10@yahoo.com",
     "status": "status 4",
     "id": "4"
    },
    {
     "name": "Laila_Stark68",
     "email": "Enos_Schulist37@yahoo.com",
     "status": "status 5",
     "id": "5"
    },
    {
     "name": "Kellen46",
     "email": "Trever_Parisian53@yahoo.com",
     "status": "status 6",
     "id": "6"
    },
    {
     "name": "Dorothy75",
     "email": "Ella.Rowe@gmail.com",
     "status": "status 7",
     "id": "7"
    },
    {
     "name": "Ewell98",
     "email": "Humberto.Parker@gmail.com",
     "status": "status 8",
     "id": "8"
    },
    {
     "name": "Fernando.Will97",
     "email": "Bulah.Wunsch@hotmail.com",
     "status": "status 9",
     "id": "9"
    },
    {
     "name": "Amir.Murray87",
     "email": "Aiden41@hotmail.com",
     "status": "status 10",
     "id": "10"
    },
    {
     "name": "Joaquin_Padberg",
     "email": "Roy.Leuschke68@hotmail.com",
     "status": "status 11",
     "id": "11"
    },
    {
     "name": "Earlene.Kiehn80",
     "email": "Jett10@gmail.com",
     "status": "status 12",
     "id": "12"
    },
    {
     "name": "Mohammed_Ruecker",
     "email": "Deanna.Dare@yahoo.com",
     "status": "status 13",
     "id": "13"
    },
    {
     "name": "Lillie_Dare56",
     "email": "Berry60@gmail.com",
     "status": "status 14",
     "id": "14"
    },
    {
     "name": "Kevon.Douglas",
     "email": "Malvina.Mraz79@hotmail.com",
     "status": "status 15",
     "id": "15"
    }
   ]
  return(
    <div>
    <table className="table">
<thead className="thead-dark">
<tr>
  <th>Id</th>
  <th>Name</th>
  <th>Email</th>
  <th>Status</th>
</tr>
</thead>
<tbody>
{api.map((ele)=> (    
<tr >
  <th scope="row">{ele.id}</th>
  <td>{ele.name}</td>
  <td>{ele.email}</td>
  <td><Status /></td>
</tr>
))
}
</tbody>
</table>
</div>
);
}
