import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Teams from '../Teams/Teams';
import './Home.css';

const Home = () => {
    const [teams, setTeams] = useState([]);
    console.log(teams)
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain')
        .then(res => res.json())
        .then(data => setTeams(data.teams.slice(15, 31)))
    }, [])

    return (
        <div>
            <h1>La Liga Team</h1>
            <div className="container">
            <div className="row">
                {
                    teams.map(team => <Teams team={team} key={team.idTeam}></Teams>)
                }   
            </div> 
            </div>
        </div>
    );
};

export default Home;