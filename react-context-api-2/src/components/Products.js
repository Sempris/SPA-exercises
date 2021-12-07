import React from 'react'
import { Outlet , Link} from 'react-router-dom';

function Products(props) {
    console.log(props.children);
    return (
        <div className="App">
             
        <h2> Products Page</h2>
    <ul>
       <li> <Link to ="tea" >Tea</Link> </li>
       <li> <Link to ="coffee" >Coffee</Link> </li>
       <li> <Link to ="chocolate" >Chocolate</Link> </li>
    </ul>  
        <div style ={{ padding:25, background:'grey'}}>
          <Outlet />
        </div>
           
        </div>
    )
}

export default Products
