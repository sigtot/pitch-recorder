import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Record from './Record';
import styled from 'styled-components';

const PlainUl = styled.ul`
    list-style-type: none;
    padding: 0;
`;

export default function Home() {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/records')
            .then(res => res.json())
            .then(JSON.parse) // res.json() returns a string -> parse it
            .then(recs => setRecords(recs))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div>
            <Link to='/guess'>Guess</Link>
            <PlainUl>
                {records.map(rec => (
                    <Record id={rec.id}
                            guess={rec.guess}
                            actual={rec.actual}
                            time={rec.time}/>
                ))}
            </PlainUl>
        </div>
    )
}
