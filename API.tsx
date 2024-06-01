import React, { useState } from 'react'
import axios from 'axios'

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category:string;
  image: string;
  rating:any
}

interface Props {
  data: Product[];
}



/* var id=2;
const postapiData=()=>{
  axios.post('https://jsonplaceholder.typicode.com/todos',{
    userId:2,
    title:'ABC',
    completed:true
}).then((res)=>{
    console.log(res.data);
    
}).catch((err)=>{
    console.log(err);
    
})
}
const putapiData=()=>{
    axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`,{
        userId:2,
        title:'ABC',
        completed:true
 
  }).then((res)=>{
      console.log(res.data);
      
  }).catch((err)=>{
      console.log(err);
      
  })
  }
  const deleteapiData=()=>{
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`,{
     
 
  }).then((res)=>{
    console.log(res.data);

      
  }).catch((err)=>{
      console.log(err);
      
  })
  } */

export default function API({data}:Props) {
  return (
    <div className='container d-flex flex-column gap-3'>
        <div className="row">
        {data.map((item: Product) => (


    <div className="col-md-4">

   
    <div className='card'>
        <div className='card-body'>
            <div>

            <img src={item.image} className="w-100" height="270px" alt="" />
            </div>
            <div>

            
         <h5 className='card-title w-100'>{item.title}</h5>
         <h3 className='card-title w-100'>{item.price}</h3>
          <button className='btn btn-primary'>Add to Cart</button>
          
          
</div>
    </div>
    </div>
    </div>
    


            ))}
    </div>
    </div>
        
/* <table className="table table-bordered table-hover">
      <thead className="thead-dark">
        <tr>
          <th className='text-center'>ID</th>
          <th className    ='text-center'>Title</th>
          <th className='text-center'>Price</th>
          <th className='text-center'>Description</th>
          <th className='text-center'>Category</th>
          <th className='text-center'>Image</th>
          <th className='text-center'>Rating</th>

        </tr>
      </thead>
      <tbody>
        {data.map((item: Product) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.price}</td>
            <td>{item.description}</td>
            <td>{item.category}</td>
            <td><img src={item.image} height="100%" width="100%" alt="" /></td>

            <td>{item.rating.rate}/5</td>
          </tr>
        ))}
      </tbody>
    </table>
    <button onClick={()=>postapiData()}>Send</button>
    <button onClick={()=>putapiData()}>Put</button>
    <button onClick={()=>deleteapiData()}>Delete</button> */
  
    )
    }