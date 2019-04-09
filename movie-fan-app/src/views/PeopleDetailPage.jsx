import React from 'react'
import {useGetPerson, useGetPersonRoles} from '../dummy-api/fetchingHooks'
import PersonDetailJumboTron from '../components/PersonDetailComponents/PersonDetailJumboTron'
import PersonDetailSummary from '../components/PersonDetailComponents/PersonDetailSummary'
import PersonDetailPopularRoles from '../components/PersonDetailComponents/PersonDetailPopularRoles'

// displays people detail page

export default function PeopleDetailPage(props) {
  const id = props.match.params.id
  const person = useGetPerson(id)
  const personRoles = useGetPersonRoles(id)

  return (
    <div>
      <PersonDetailJumboTron person={person} personRoles={personRoles} {...props}/>
      <div className="movie-detail-content-container">
      <PersonDetailSummary person={person}/>
      <PersonDetailPopularRoles personRoles={personRoles}/>
      </div>
    </div>
  )
}
