import React from 'react'
import PopularRoleBox from './PopularRoleBox'

export default function MovieDetailReviews({personRoles}) {
  return (
    <div className="trailer-container">
      <h1 className="trailer-title">Popular Roles</h1>
      {personRoles.length === 0 && <PopularRoleBox text="No roles found."/>}
      {personRoles.map((role, index) => 
        <PopularRoleBox role={role} key={role.id} index={index}/>
        )}
    </div>
  )
}