import React, { createContext, useState } from 'react';


// Create a Context for user data
export const UserContext = createContext();


export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'vishal',
    email: 'gotharwal',
    profilePicture: ''
  });

  // Update user data
  const updateUser = (newData) => {
    setUser((prev) => ({ ...prev, ...newData }));
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
