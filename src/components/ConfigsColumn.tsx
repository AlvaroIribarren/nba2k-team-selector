import React, { useState } from 'react'
import { Team } from '../interfaces/Team'
import teamsJson from '../data/teams.json'
import { Matchup } from '../interfaces/Matchup'

interface Props {
  numberOfTeams: number
  setNumberOfTeams: React.Dispatch<React.SetStateAction<number>>
  allTeams: Team[]
  setAllTeams: React.Dispatch<React.SetStateAction<Team[]>>
  teamLeft: Team[]
  teamRight: Team[]
}

export default function ConfigsColumn({ numberOfTeams, setNumberOfTeams, setAllTeams, teamLeft, teamRight }: Props) {
  const [matchups, setMatchups] = useState<Matchup[]>([])

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumberOfTeams(Number(event.target.value))
  }

  const handleRandomTeams = () => {
    setAllTeams((prev: Team[]) => {
      // Shuffle array
      const shuffled = prev.sort(() => 0.5 - Math.random());

      // Get sub-array of first n elements after shuffled
      let selected = shuffled.slice(0, numberOfTeams);
      return selected
    })
  }

  const handleResetTeams = () => {
    setAllTeams(Object.entries(teamsJson).map(([nickname, name]) => { return { nickname, name } }))
  }

  const handleGenerateMatchups = () => {
    if (teamLeft.length === 0 || teamRight.length === 0) alert('No matchups to shuffle')
    else if (teamLeft.length !== teamRight.length) alert('Not equal amount of teams')
    else {
      const shuffledLeft = teamLeft.sort(() => 0.5 - Math.random());
      const shuffledRight = teamRight.sort(() => 0.5 - Math.random());
  
      for (let i = 0; i < shuffledLeft.length; i++) {
        const matchup: Matchup = {
          teamLeft: shuffledLeft[i],
          teamRight: shuffledRight[i]
        }
        setMatchups((prev: Matchup[]) => [...prev, matchup])
      }
    }
  }

  const handleClearMatchups = () => {
    setMatchups([])
  }

  return (
    <div className='flex flex-col w-[30%]'>
      <div className=''>
        <div className='bg-gray-400 text-center border-black border-solid border-2'> Actions </div>
        <div className='border-black border-solid border-2 inline-flex w-full'>
          <div className='self-center mr-4 my-5 flex-grow ml-3'> Amount of teams </div>
          <div className='flex self-center'>
            <input className='w-10 border-solid border-black border-2 rounded-lg h-10' type="number" onChange={handleNumberChange} value={numberOfTeams} />
            <button
              onClick={handleRandomTeams}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ml-5 h-10 mr-3">
              Random {numberOfTeams}
            </button>
          </div>
        </div>
        <div className='border-black border-solid border-2 inline-flex w-full'>
          <div className='self-center mr-4 my-5 flex-grow ml-3'>Reset teams</div>
          <div className='flex self-center'>
            <button
              onClick={handleResetTeams}
              className="bg-red-500 hover:bg-red-200 text-white font-bold py-1 px-2 rounded h-10 mr-3">
              Reset teams
            </button>
          </div>
        </div>
        <div>
          <div className='border-black border-solid border-2 inline-flex w-full justify-center h-14'>
            <div className='flex self-center'>
              <button
                onClick={handleGenerateMatchups}
                className="bg-green-500 hover:bg-green-200 text-white font-bold py-1 px-2 rounded mr-3 h-[80%]">
                Generate matchups
              </button>
            </div>
            <div className='flex self-center'>
              <button
                onClick={handleClearMatchups}
                className="bg-red-500 hover:bg-red-200 text-white font-bold py-1 px-2 rounded h-[80%] mr-3">
               Clear matchups
              </button>
            </div>
          </div>
          {
            matchups.length === 0 ? null :
            <ul className='mt-5'>
              {matchups.map((matchup) => {
                const { teamLeft, teamRight } = matchup
                return (
                  <li key={teamLeft.nickname} className='justify-center flex mt-3'>
                    <div className='text-center mr-5'> {teamLeft.name} - {teamLeft.nickname}  </div>
                    <div> VS </div>
                    <div className='text-center ml-5'> {teamRight.name} - {teamRight.nickname}  </div>
                  </li>
                )
              })}
            </ul>

          }

        </div>

      </div>
      <div className='bg-gray-400 text-center border-black border-solid border-2'> Matchups </div>
      <div className='bg-gray-400 text-center border-black border-solid border-2'> Three </div>
    </div>
  )
}
