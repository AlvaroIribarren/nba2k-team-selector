import React from 'react'
import { MdArrowRight, MdArrowLeft } from "react-icons/md";
import { Team } from '../interfaces/Team';
import { MdDeleteOutline } from "react-icons/md";

interface Props {
  allTeams: Team[],
  setAllTeams: React.Dispatch<React.SetStateAction<Team[]>>,
  teamLeft: Team[],
  setTeamLeft: React.Dispatch<React.SetStateAction<Team[]>>,
  teamRight: Team[]
  setTeamRight: React.Dispatch<React.SetStateAction<Team[]>>
}

export default function AllTeams({ allTeams, setAllTeams, teamLeft, setTeamLeft, teamRight, setTeamRight }: Props) {

  const handleMoveTeamLeft = (teamToMove: Team) => {
    setTeamLeft((prev: Team[]) => [...prev, teamToMove])
    setAllTeams(allTeams.filter(team => team.nickname !== teamToMove.nickname))
  }


  const handleMoveTeamRight = (teamToMove: Team) => {
    setTeamRight((prev: Team[]) => [...prev, teamToMove])
    setAllTeams(allTeams.filter(team => team.nickname !== teamToMove.nickname))
  }

  const handleBanTeam = (teamToBan: Team) => {
    setAllTeams(allTeams.filter(team => team.nickname !== teamToBan.nickname))
  }

  return (
    <div>
      <div className='flex flex-row items-center justify-between'>
        <div className='text-5xl flex-grow flex justify-center'>All Teams</div>

      </div>
      <div className="border-t-2 border-white"></div>
      <div className='mt-5'>
        <ul>
          {allTeams.sort((a, b) => a.nickname.localeCompare(b.nickname)).map((actualTeam) => {
            const { nickname, name } = actualTeam
            return (
              <li key={nickname} className='justify-center flex mt-3'>
                <button
                  onClick={() => { handleMoveTeamLeft(actualTeam) }}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0.5 px-2 rounded mr-10">
                  <MdArrowLeft />
                </button>
                <div className='text-center'> {name} - {nickname}  </div>
                <button onClick={ () => {handleBanTeam(actualTeam)}}>
                  <MdDeleteOutline color='red' />
                </button>
                <button
                  onClick={() => { handleMoveTeamRight(actualTeam) }}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0.5 px-2 rounded ml-5">
                  <MdArrowRight />
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
