import React from 'react'
import {
    SignInButton, UserButton,
    useClerk, useUser } from '@clerk/clerk-react';
    
import { useNavigate } from "react-router-dom";

const UserActions = () => {

    const { openSignIn } = useClerk();
    const { user } = useUser();
    const navigate = useNavigate();

    return (
        <>
            {user
                ?
                    <UserButton>
                        <UserButton.MenuItems>
                            <UserButton.Action label="My booking" labelIcon={<BookIcon />}
                                onClick={() => { navigate('/my-bookings') }}>
                            </UserButton.Action>
                        </UserButton.MenuItems>
                    </UserButton>
                :
                    <button className="bg-black text-white px-6 py-2 rounded-full ml-4 hover:bg-gray-800 transition-all"
                        onClick={() => { openSignIn() }}>
                        Login
                    </button>
            }
        </>
    )
}

export default UserActions