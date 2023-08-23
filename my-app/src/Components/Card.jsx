import React from 'react'
import { Button, Container,Image } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { clear, deleteFromCard } from '../Redux-toolkit/slices/card-slice';
import { prettyDOM } from '@testing-library/react';

export default function Card() {
  const card = useSelector(state =>state.card)
  console.log(card);
  const dispatch = useDispatch();
  const totalPrice = card.reduce((acc,product)=>{
    acc =acc + parseFloat(product.price)*product.quantity;
    return acc ;
  },0)
  return (
    <Container>
      <h1 className='py-5'>Card</h1>
      <Button className='mb-3' variant='primary' onClick={()=>dispatch(clear())}>Clear Shopping Card</Button>
      <h2>Total Price : {totalPrice} $</h2>
    <Table striped bordered hover>
      <thead>
        
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Image</th>
          <th>Action</th>


        </tr>
      </thead>
      <tbody>

      {card.map((product)=>(
          <tr key={product.id}>
          <td>{product.id}</td>
          <td>{product.title}</td>
          <td>{product.price}</td>
          <td>{product.quantity}</td>
          <td><Image src={product.image} style={{width:"100px",height:"100px"}}></Image></td>
          <td><Button variant='danger' onClick={()=>dispatch(deleteFromCard(product))}>Delete</Button></td>

        </tr>  
          ))}
         
      </tbody>
    </Table>
      </Container>
  )
}
