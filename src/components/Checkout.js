import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { ToastContainer, toast } from "react-toastify";

const Checkout = () => {
    const {title,price,_id} = useLoaderData();
    const {user} = useContext(AuthContext);
    
    const handlePlaceOrder = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = `${form.fname.value} ${form.lname.value}`;
        const phone = form.phone.value;
        const email = user?.email || 'Please Login';
        const masseage =form.masseage.value;

        const order = {
             service: _id,
             serviceName: title,
             price,
             customer: name,
             phone,
             email,
             masseage
        };
//    console.log(order)
        fetch('http://localhost:5000/orders',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                form.reset();
                toast.success("Order Placed Successfully!!", {
                    position: "top-center",
                    theme: "colored",
                  });
            }
        })
        .catch(err => console.log(err))
    }

    return (
        <div className='w-10/12 mx-auto'>
        <h2 className='text-3xl font-semibold text-center my-5'>You are about to Order:  <span className='text-orange-600'>{title}</span></h2>
        <h4 className='text-2xl font-semibold text-center my-5'>Price:  <span className='text-orange-600'>${price}</span></h4>
        <ToastContainer></ToastContainer>
            <form onSubmit={handlePlaceOrder} className='py-10 px-10 border m-3 rounded-md'>
              <h2 className='text-3xl md:text-5xl text-center text-orange-600 font-semibold uppercase'>Please Checkout</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 py-10 gap-4'>
                  <input name='fname' type="text" placeholder="First Name" className="input input-bordered w-full m-3" />
                  <input name='lname' type="text" placeholder="Last Name" className="input input-bordered w-full m-3" />
                  <input name='phone' type="text" placeholder="Phone" className="input input-bordered w-full m-3" required />
                  <input name='email' defaultValue={user?.email || 'Please Sign Up!!'} readOnly type="text" placeholder="Email" className="input input-bordered w-full m-3" />
                </div>
                <textarea name='masseage' className="textarea textarea-bordered w-full" placeholder="Your Masseage"></textarea>
                <input type="submit" value="Place Your Order" className='py-2 font-semibold text-xl text-white rounded-md bg-orange-600 mt-5 outline-none w-full' />
            </form>
        </div>
    );
};

export default Checkout;