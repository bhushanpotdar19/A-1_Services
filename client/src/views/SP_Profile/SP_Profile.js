import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './SP_Profile.css'
import toast, { Toaster } from 'react-hot-toast'
import SlotBookingCard from '../../components/SlotBookingCard/SlotBookingCard.js'


function SP_Profile() {
    const [user, setUser] = useState({})
    const [slots, setSlots] = useState([])






    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'))
        if (currentUser) {
            setUser(currentUser)
        }

        if (!currentUser) {
            window.location.href = "/splogin"
        }
    }, [])

    const loadSlots = async () => {
        if (!user._id) {
            return
        }
        toast.loading("Loading Slots")
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/v1/getbookedslots?userId=${user._id}`)

        const allSlots = response.data.data


        setSlots(allSlots)

        toast.dismiss()
        toast.success('Book Slots Loaded')
    }

    useEffect(() => {
        loadSlots()
    }, [user])

    return (
        <div>
            <h2>Hello {user.ownername} 👋</h2>

            <button className='logout' onClick={() => {
                localStorage.clear()
                toast.success('Logout Successfully')
                setTimeout(() => {
                    window.location.href = '/splogin'
                }, 2000)
            }} type='button'>Logout</button>


            <h1 className='shop'>Your Profile</h1>
            <div className='owner-main' >
                <h1>Shop Name: {user.shopname}</h1>
                <h2 >Owner Name: {user.ownername}</h2>
                <h3>Category: {user.category}</h3>
                <p className='profile-details'>Description: {user.description}</p>
                <p className='profile-details'>Shop Address: {user.address}</p>
                <p className='profile-details'>Location (Longitude & Latitude): {user.location}</p>
                <p className='profile-details'>Mobile No.: {user.mobile}</p>
                <p className='profile-details'>Shop Opening Time: {user.time}</p>

            </div>
            {
                slots.map((slot,i) => {
                    const { _id, bookingDate, serviceDate, userAddress, description, createdAt,user } = slot;
                    console.log( "parameters",user, bookingDate, serviceDate, userAddress,description,createdAt)
                    return (<SlotBookingCard
                        key={_id}
                        _id={_id}
                        user={user}
                        bookingDate={bookingDate}
                        serviceDate={serviceDate}
                        userAddress={userAddress}
                        description={description}
                        createdAt={createdAt}
                        />)
                }
                )}


            <Toaster />


        </div>
    )
}

export default SP_Profile