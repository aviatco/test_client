import {baseUrl} from '../config'
import axios from 'axios'

export const getAllUsers = async () => {
    const url = `${baseUrl}/users`
    // const response = await axios(url)
    // console.log('get users', response)
    return Promise.resolve(
        {users: 
            [{
                first_name: "aa",  
                last_name: 		'aa',  
                gender: 		'f',  
                avatar: 		'djdjd',  
                job: 			'ddd',  
                contacts: 		'343434',  
                location: 		'dfdfd'
            },{
                first_name: "bb",  
                last_name: 		'aa',  
                gender: 		'f',  
                avatar: 		'djdjd',  
                job: 			'ddd',  
                contacts: 		'343434',  
                location: 		'dfdfd'

            }]})
}

export const addNewUser = async (user) => {
    const url = `${baseUrl}/users`
    try{
        const response = await axios({
            method: 'post',
            url,
            data: JSON.stringify(user)
          })  
          console.log('user Added')
    }catch(e){
        console.error('cant create user', e)
    }
   
}

export const deleteUser = async (userId) => {
    
}

export const updateUser = (user) => {
    
}
export const getUserById = (userId) => {
    
}
