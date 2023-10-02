import React from 'react'
import { useClerk } from '@clerk/clerk-react'

const SignedInHeader = () => {
    const {user, signedIn} = useClerk()
 // If the user is not signed in, you might want to handle this case
 if (!signedIn) {
    // You can redirect the user to the login page or show an error message.
    return <div>User not authenticated. Please sign in.</div>;
  }

  // If the user is signed in, you can display their information or any other content.
  return (
    <div>
      Welcome, {user.fullName}! {/* Assuming fullName is a property of the user object */}
      {/* Add other content for the signed-in user */}
    </div>
  );
};

export default SignedInHeader