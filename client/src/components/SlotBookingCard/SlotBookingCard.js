import React from 'react'


function SlotBookingCard( {_id, user, bookingDate, serviceDate, userAddress,description,createdAt}) {
 console.log("user",user)
  return (
   
    <div>

<h1>Customer Name: {user.name}</h1>
<h2>Customer Mobile No.: {user.mobile}</h2>
<h2>Booking Date: {new Date(bookingDate).toLocaleString()}</h2>
<h3>Service Date: {new Date(serviceDate).toLocaleString()}</h3>
<h4>Customer Address: {userAddress}</h4>
<h5>Service Description: {description}</h5>
{/* <h6>Slot Booking Date: {new Date(createdAt).toLocaleString()}</h6> */}


    </div>
  
  )
}

export default SlotBookingCard