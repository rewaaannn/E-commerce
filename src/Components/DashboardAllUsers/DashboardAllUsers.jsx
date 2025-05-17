import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function DashboardAllUsers() {


    const[data, setData] = useState([])

    useEffect( () => {
    
        fetchData();
    
    }, [] )

    const fetchData = async() => { 
    
        try {
        
            const response = await axios.get('http://localhost/phpmyadmin/index.php?route=/table/structure/save')
            setData(response.data)
        } catch (error)  {
        
            console.error('Error fetching data:', error)
        
        }
    
    }




    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">name</th>
                    <th scope="col">email</th>
                    <th scope="col">city</th>
                </tr>
            </thead>
            <tbody>
                
                {data.map( (item) => (
                
                    <tr>
                        <th scope="row">{item.id}</th>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.role}</td>
                    </tr>
                
                ) )}
                
            </tbody>
            </table>
    )
}
