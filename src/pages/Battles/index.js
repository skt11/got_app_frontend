import React, { useEffect, useState } from 'react';
import { searchBattle } from '../../api/battle';
import Battle from '../../components/Battle';

const Battles = (props) => {

    const [battles, setBattles] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await searchBattle(props.match.params)
            setBattles(data)
        }
        fetchData()
    }, [props.match.params])

    return (
        <div className="Battles">
            <ul>{battles.map((v, i) => <li key={i}><Battle battle={v} /></li>)}</ul>
        </div>
    )
}

export default Battles;