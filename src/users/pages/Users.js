import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
    const ALL_USERS =  [
        {
            id: "u1",
            name: "abc",
            pic: "https://picsum.photos/200 ", 
            numberoflocations:5,
        },
        {
            id:"u2",
            name: "xyz", 
            pic:"https://picsum.photos/200", 
            numberoflocations:1,
        },
    ];
    return <UsersList items={ALL_USERS} />; 
};

export default Users;