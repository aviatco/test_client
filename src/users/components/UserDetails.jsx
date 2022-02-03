import React, { useEffect, useState } from "react"
import {clearUnderscoreFromKey} from '../utils/utils'

export const UserDetails = ({user, isViewOnly = false, btnText ='', handleUserAction, setShow})=> {
    const [userData, setUserData] = useState(user || {})


    useEffect(()=> {
        console.log('userData', userData)

    }, [userData])

    const close = (e)=> {
        e.preventDefault()
        setShow(false)

    }

    const runUserAction = (e) => {
        e.preventDefault()
        handleUserAction(userData)
        setShow(false)
    }

    const setUserDetails = (e)=> {
        e.preventDefault()
        const currInput  = e.target
        const label = document.getElementById(`${currInput.id}_label`)

        label.style({display:'block'})
        userData[currInput.id] = currInput.value
        setUserData(userData)

    }

    return (
            <form class={'form-group'} onChange={setUserDetails}>
                {Object.keys(userData).map(key => {
                    const placehoder = clearUnderscoreFromKey(key)

                    return (
                        <div>
                            <label key={`${key}_label`} id={`${key}_label`}>{placehoder}</label>
                            <input key={key}  id={key} type='text'  disabled={isViewOnly} defaultValue={userData[key]}/>
                        
                    </div>
                    )
                   }
                )}
                <div class='btnGroup'>
                    {btnText && <button onClick={runUserAction}>{btnText}</button>}
                    {<button onClick={close}>{'Close'}</button>}
                </div>
                
            </form>
    )

}

