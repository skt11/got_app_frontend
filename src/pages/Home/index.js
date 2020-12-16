import React, { useEffect, useState } from "react";
import { getLocationList } from "../../api/battle";
import AutoCompleteSearch from "../../components/AutoCompleteSearch";

import './index.css'

const Home = () => {
    const [locationList, setLocationList] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await getLocationList()
            setLocationList(data)
        }
        fetchData()
    }, [])

    return (
        <div className="Home">
            Home
            <AutoCompleteSearch options={locationList} />
        </div>
    )
}

export default Home;