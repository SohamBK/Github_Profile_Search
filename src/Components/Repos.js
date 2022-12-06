import React, {useState, useEffect} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import Axios from 'axios';

const Repos = ({reposUrl}) => {
    const [repos, setRepos] = useState([]);

    const fetchRepos = async () => {
        const {data} = await Axios.get(reposUrl);
        setRepos(data)
    }

    // whenever new reposUrl get to the Repos component it will going to fetch data
    useEffect(() => {
        fetchRepos()
    }, [reposUrl])

    return (
        <ListGroup>
            {
                repos.map(repo => (
                    <ListGroupItem key={repo.id}>
                        <div className='text-primary'>{repo.name}</div>
                        <div className='text-secondary'>{repo.language}</div>
                        <div className='text-info'>{repo.description}</div>

                    </ListGroupItem>
                ))
            }
        </ListGroup>
    )
}

export default Repos;