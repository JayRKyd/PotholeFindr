import React from 'react'
import { SignIn } from '@clerk/clerk-react'
import SignInAuthHeader from '../components/SignInAuthHeader'

const SignInAuthView = () => {



  return (
    <>
    <div>
      <SignInAuthHeader />
      <div className='centered'>
        <SignIn 
            path='/users'

            signUpUrl='/signup'
            afterSignInUrl='/users'

        />
      </div>
      </div>
    </>
  )
}

export default SignInAuthView