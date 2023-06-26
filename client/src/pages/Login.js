import React, { useContext } from 'react';
import { Button, Typography } from '@mui/material'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { AuthContext } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate()
    const auth = getAuth()
    const { user } = useContext(AuthContext)
    const handleLoginWithGoogle = async () => {
        const provider = new GoogleAuthProvider()
        const res = await signInWithPopup(auth, provider)
    }

    if(user?.uid) {
        navigate('/')
        return
    }

    return (
        <>
            <Typography sx={{ marginBottom: '20px' }}>Wellcome to Note App</Typography>
            <Button variant='outlined' onClick={handleLoginWithGoogle}>Login with Google</Button>
        </>
    )
}