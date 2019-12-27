import React, {useState, useEffect} from 'react';

export default function Home() {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/records")
            .then(res => res.json())
            .then(JSON.parse) // res.json() returns a string -> parse it
            .then(recs => setRecords(recs))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div>
            <ul>
                {records.map(rec => (
                    <li key={rec.id}>
                        {rec.guess} / {rec.actual}
                    </li>
                ))}
            </ul>
        </div>
    )
}