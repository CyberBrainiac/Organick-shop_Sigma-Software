declare module './sign-up.js' {
  // Define the type of the 'userCredential' parameter
  interface UserCredential {
    username: string;
    password: string;
    email: string;
    // Add more properties if needed
  }

  // Define the function signature for the function in the JavaScript module
  export default function userSignupCredentialHandler(userCredential: UserCredential): void;
}

// Add the export {} statement to indicate that this is a module
export {};