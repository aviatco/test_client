import React, { useState } from "react"
import {UserDetails} from './UserDetails'

import './UserRow.css'

const UserRow = ({user}) => {
    const [showMore, setShowMore] = useState(false)

    const showHideDetails = (e)=>{
        console.log('click')
        e.preventDefault()
        setShowMore(!showMore)
    }

    return (
        <>
            <div class='userRawWrapper'>
                <div class='userRow' onClick ={showHideDetails} >
                    <div>{user['first_name']}</div>
                    <div class='userActions'>
                        <button>Edit</button>
                        <button>Remove</button>
                    </div>
            </div> 
            {showMore && <div class='moreInfo'>
                <UserDetails user={user} isViewOnly='true'></UserDetails>
                </div>} 
            </div>
        </> 
    )

}

export default UserRow