import React ,{createContext}from 'react';

export const UserContext=createContext();

export const UserProvider=(props)=>{
    const movie=[
        {
            id:0,
            name:"king"
        },
        {
             id:1,
             name:"queen"
        },{
            id:2,
            name:"lands"
        }
    ]

    return (
        <UserContext.Provider value={movie}>
        {props.children}
        </UserContext.Provider>
    )
}