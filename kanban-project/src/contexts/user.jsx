import { createContext, useState } from "react";

function getUserFromLocalStorage() {
    try {
        return JSON.parse(localStorage.getItem("user"));
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const UserConext = createContext(null);
export const UserProvider = ({children}) => {
    const [user, setUser] = useState(getUserFromLocalStorage());
    function login(newUser) {
        setUser(newUser);
        localStorage.setItem("user", JSON.stringify(newUser));
    }

    function logout() {
        setUser(null);
        localStorage.removeItem("user");
    }

    return (
        <UserConext.Provider value={{user, login, logout}}>
            {children}
        </UserConext.Provider>
    )
};