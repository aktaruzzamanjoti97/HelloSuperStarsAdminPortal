import { border } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table,Button } from 'react-bootstrap';

const MarketPlaceOrderlist = () => {
    
    const [orderList, setOrderList] = useState([]);

    console.log("Order ", orderList);
    
    useEffect(() => {


          axios.get(`/api/admin/marketplace/order/product-list`).then(res => {

            if(res.data.status === 200)
            {
                setOrderList(res.data.orderList);
            }
          });
    
    }, []);

    return (
        <div>
            <h2 className='text-white'>Marketpalce Order List</h2>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>User Name</th>
                    <th>Order No</th>
                    <th>Image</th>
                    <th>Items</th>
                    <th>Unit Price</th>
                    <th>Total Price</th>
                    <th>Status</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                
                {orderList.map((order, index) => (
                    <tr>
                        <td>{index+1}</td>
                        <td>{order.user.first_name} {order.user.last_name}</td>
                        <td>#{order.order_no}</td>
                        <td>
                            <img src={`http://localhost:8000/${order.marketplace.image}`} alt="" className="img-fluid"  style={{height: "50px", border:"3px solid #fcc106", borderRadius: "10px"}}/>
                        </td>
                        <td>{ order.items }</td>
                        <td>{ order.unit_price }</td>
                        <td>{ order.total_price }</td>
                        <td>
                            { order.status === '0' ?
                                <span className='badge badgeDanger'>Pending</span>
                                : order.status === '1'?
                                <span className='badge badgeInfo'>Received</span>
                                :
                                <span className='badge badgeSuccess'>Delivered</span>
                            }
                            
                            {/* { order.status === '0' ? 'Pending' : order.status === '1'? 'Received' : 'Delivery'} */}
                        </td>
                        <td><Button><i class="fas fa-eye"></i></Button></td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    );
};

export default MarketPlaceOrderlist;