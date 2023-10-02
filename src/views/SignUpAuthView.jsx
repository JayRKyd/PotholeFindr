import React from 'react'
import { SignUp } from '@clerk/clerk-react'
import SignUpAuthHeader from '../components/SignUpAuthHeader'

const SignUpAuthView = () => {
  return (
    <>
      <SignUpAuthHeader />
        <div className="centered">
        <SignUp path='/users' afterSignInUrl='/users'/>
        </div>
    </>
  )
}

export default SignUpAuthView