import React from 'react'
import Header from '../../components/Header'
import { Jumbotron, Row, Col, Container } from 'react-bootstrap';
import Layout from '../../components/Layout'
import MenuHeader from '../../components/MenuHeader'
import authReducer from '../../reducers/auth.reducer'

/**
* @author
* @function HomePage
**/

const HomePage = (props) => {
  return(
    <Layout>
      <div style={{textAlign:'center'}}>
      <Jumbotron style={{margin: '5rem', background: '#fff'}} className="text-center">
            <h1>Welcome to Ecommerce Web Application</h1>
           
        </Jumbotron>
      </div>
    </Layout>
   )

 }

export default HomePage