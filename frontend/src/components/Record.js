import React from 'react';
import {keyName} from "../piano";

export default function Record({id, guess, actual, time}) {
    return (
        <li key={id}>
            {Math.abs(guess - actual) / 2} &nbsp;
            ({keyName(guess)} / {keyName(actual)})
            {time}
        </li>
    )
}
