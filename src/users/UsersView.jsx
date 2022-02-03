import React, { useEffect, useState } from 'react'
import UserRow from './components/UserRow.jsx'
import {UserDetails} from './components/UserDetails'
import {addNewUser, getAllUsers} from '../services/userServices'
import {clearUnderscoreFromKey} from './utils/utils'

import './UsersView.css'

const UsersView = ()=> {

    const [users, setUsers] = useState([])
    const [dynamicFilters, setDynamicFilters] = useState(null)
    const [selectedFilter, setSelectedFilter] = useState('')
    const [showModal, setShowModal] = useState(false)

    useEffect(async ()=> {
        Promise.all([featchUsers()]).then(()=>{})
    },[])

    const changeFilter = (e) => {
        setSelectedFilter(e.target.id)
    }

    useEffect(()=> {
    }, dynamicFilters)
    
    const featchUsers = async () => {
        try{
            const response = await getAllUsers()
            if(response.users){
                setUsers(response.users)
                if(response.users[0]){
                    setDynamicFilters(Object.keys(response.users[0]))
                }
            }
        }catch(e){
            console.error('error while featching users', e)
        }
    }

    const openUserDetails = ()=> {
        setShowModal(true)
    }

    const addUser =async (user)=> {
        const response = await addNewUser()
    }

    const setSelectedFilterValues = ()=> {

    }

    
    return (
        <div className='container'>
            <div className='usersContainer'>
                <div id={'filterWraper'}>
                    <div id='addUser'>
                        <button onClick={openUserDetails}>Add</button>
                    </div>
                    <select id='filters' onChange={changeFilter}>
                    <option id={'placeholder'}>Select...</option>
                    {dynamicFilters && dynamicFilters.map(filter => { return <option key={filter} id={filter} defaultValue={selectedFilter && filter}>
                        {clearUnderscoreFromKey(filter)}</option>})}
                    </select>
                </div>
                <div>
                { users && users.map(user => <UserRow key={user.first_name} user={user}></UserRow>)  }                
                </div>
                
            </div>
            <div  className='userActionView'>
                {showModal && <UserDetails user={{first_name:'', last_name:'', gender:'', avatar:'', job:'', contacts:'', location:''}} 
                btnText='Add user' handleUserAction={addUser} setShow={setShowModal}></UserDetails>}
            </div>
        </div>
    )

}

export default UsersView