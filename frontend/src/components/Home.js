import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Record from './Record';
import styled from 'styled-components';
import NeuButton from './NeuButton';

const PlainUl = styled.ul`
    list-style-type: none;
    padding: 0;
`;

const CTAContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 300px;
`;

const RecordsWrapper = styled.div`
    border-radius: 15px 15px 0 0;
    background-color:#e0e5ec;
    box-shadow: 9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px  rgba(255,255,255, 0.5);
`;

const RecordsContainer = styled.div`
    margin: 0 2em;
    padding-top: 4px;
`;

const GuessButton = styled(NeuButton)`
    background-color: #4caf50;
    color: white;
    text-shadow: 0 1px 2px rgba(76, 175, 80, 0.4);
    margin-bottom: 50px;
`;

const HomeTitle = styled.h1`
    margin-top: 100px;
`;

export default function Home() {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        fetch('/api/records')
            .then(res => res.json())
            .then(JSON.parse) // res.json() returns a string -> parse it
            .then(recs => setRecords(recs))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div>
            <CTAContainer>
                <HomeTitle>Pitch recorder</HomeTitle>
                <Link to='/guess'>
                    <GuessButton>
                        Add a record
                    </GuessButton>
                </Link>
            </CTAContainer>
            <RecordsWrapper>
                <RecordsContainer>
                    <h2>Records</h2>
                    <PlainUl>
                        {records.reverse().map(rec => (
                            <Record id={rec.id}
                                    guess={rec.guess}
                                    actual={rec.actual}
                                    time={rec.time}/>
                        ))}
                    </PlainUl>
                </RecordsContainer>
            </RecordsWrapper>
        </div>
    )
}
