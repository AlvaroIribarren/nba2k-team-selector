import React from 'react'
import { Team } from '../interfaces/Team'
import { MdOutlineDeleteOutline } from "react-icons/md";

interface Props {
  setAllTeams: React.Dispatch<React.SetStateAction<Team[]>>
  team: Team[]
  setTeam: React.Dispatch<React.SetStateAction<Team[]>>
}

export default function TeamColumn({ setAllTeams, team, setTeam }: Props) {
  const handleRemoveTeam = (teamToRemove: Team) => {
    setTeam(team.filter(team => team.nickname !== teamToRemove.nickname))
    setAllTeams((prev: Team[]) => [...prev, teamToRemove])
  }

  return (
    <ul>
      {team.map((teamToRemove) => {
        const { nickname, name } = teamToRemove
        return (
        
        <li key={nickname} className='justify-center flex mt-3'>
          <div className='text-center'> {name} - {nickname}  </div>
          <button 
            onClick={ () => { handleRemoveTeam(teamToRemove) }}
            className='rounded-2xl ml-5 bg-red-200 hover:bg-red-200'>
            <MdOutlineDeleteOutline color='red' className='self-center justify-center'/>
          </button>
        </li>
      )})}
    </ul>
  )
}
