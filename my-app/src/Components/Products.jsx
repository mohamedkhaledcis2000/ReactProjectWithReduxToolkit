import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Redux-toolkit/slices/products-slice';
import { addToCard } from '../Redux-toolkit/slices/card-slice';

export default function Products() {
  const products = useSelector((state)=>state.products)
  const dispatch = useDispatch();

  console.log(products);



  useEffect(()=>{
    dispatch(fetchProducts());


  },[])
  return (
<Container>
    <h1 className='py-5'>products</h1>
<Container>
    <Row>
      {
        products.map((product)=>(
          <Col key={product.id}>
          <Card style={{ width: '18rem',margin:'15artpx'}}>
            <Card.Img style={{height:'300px'}} variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
                {product.price}
              </Card.Text>
              <Card.Text>
                {product.description}
              </Card.Text>
              <Button variant="primary" onClick={()=>dispatch(addToCard(product))}>Add to card</Button>
            </Card.Body>
          </Card>
          </Col>

        ))
      }
    </Row>
    </Container>
    </Container>  )
}
