// src/App.tsx
import React, { useState } from 'react';
import AllTeams from './components/AllTeams';
import teamsJson from './data/teams.json'
import { Team } from './interfaces/Team';
import TeamColumn from './components/TeamColumn';
import ConfigsColumn from './components/ConfigsColumn';

const App: React.FC = () => {
  const [allTeams, setAllTeams] = useState(Object.entries(teamsJson).map(([nickname, name]) => { return { nickname, name }}))
  const [teamLeft, setTeamLeft] = useState<Team[]>([])
  const [teamRight, setTeamRight] = useState<Team[]>([])
  const [numberOfTeams, setNumberOfTeams] = useState(10)

  return (
    <div className='flex flex-row'>
      {/* Left */}
      <ConfigsColumn 
        numberOfTeams={numberOfTeams} 
        setNumberOfTeams={setNumberOfTeams} 
        allTeams={allTeams} 
        setAllTeams={setAllTeams}
        teamLeft={teamLeft}
        teamRight={teamRight}
      />
      {/* All teams */}
      <div className="min-h-screen w-full flex items-center justify-center bg-gray-100">
        <div className="flex space-x-4 h-[100%] w-[100%]">
          <div className={`w-1/3 h-[100vh] bg-mj text-white bg-right-top`}>
            <div className='text-5xl text-center'> Alvi </div>
            <div className="border-t-2 border-white"></div>
            <TeamColumn setAllTeams={setAllTeams} team={teamLeft} setTeam={setTeamLeft}/>
          </div>
          <div className="w-1/3 h-full bg-lebron text-white bg-center">
            <AllTeams 
              allTeams={allTeams}
              setAllTeams={setAllTeams}
              teamLeft={teamLeft}
              setTeamLeft={setTeamLeft}
              teamRight={teamRight}
              setTeamRight={setTeamRight}
            />
          </div>
          <div className="w-1/3 h-[100vh] bg-kobe text-white">
            <div className='text-5xl text-center'> Juli </div>
            <div className="border-t-2 border-white"></div>
            <TeamColumn setAllTeams={setAllTeams} team={teamRight} setTeam={setTeamRight}/>
          </div>
        </div>
      </div>

    </div>
  );
};

export default App;
