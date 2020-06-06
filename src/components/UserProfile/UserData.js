import React, { Component }  from "react"

const PageLoading = () => {
    return <p>Loading user...</p>
}
const UserError = error => {
    return <p>{error}</p>
}
const userProfile = profile =>{
    return (
        <>
            <p>{profile[0].name}</p>
            <p>{profile[0].surname}</p>
        </>
    )
}
export {
    PageLoading,
    UserError,
    userProfile
}