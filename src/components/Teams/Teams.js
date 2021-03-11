import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import './Teams.css';

const Teams = (props) => {
    console.log(props.team);
    const { strTeamBadge, strTeam, strSport, idTeam } = props.team;

    return (
        <div className="col-sm-3 my-4">
            {/* <h1>Team Length from Home: {idTeam}</h1> */}
            <Card>
                <Card.Img variant="top" className='teams-logo' src={strTeamBadge} />
                <Card.Body>
                    <Card.Title>{strTeam}</Card.Title>
                    <Card.Text>Sports type: {strSport} </Card.Text>
                    <Card.Text>Show details by id: {idTeam} </Card.Text>
                    {/* <Card.Text>Show details of team <Link to={`/team-details/${idTeam}`}>Show details</Link></Card.Text> */}
                    {/* <Button variant="dark"><Link to={`/team-details/${idTeam}`}>Explore </Link><FontAwesomeIcon icon={faLongArrowAltRight} /></Button> */}
                    <Link to={`/team-details/${idTeam}`}>
                        <Button variant="primary">Explore Team <FontAwesomeIcon icon={faLongArrowAltRight} /></Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Teams;