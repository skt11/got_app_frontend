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
            <div className="Home_title">
                Game Of Thrones Battles
            </div>
            <div className="Home_desc">
                Type in the location of the battle below and choose from the suggestions
            </div>
            <AutoCompleteSearch options={locationList} />
            <div className="credits">
                Icon by <a href="https://freeicons.io/profile/3117">Mas Dhimas</a> on <a href="https://freeicons.io">freeicons.io, </a>
                Icon by <a href="https://freeicons.io/profile/3">icon king1</a> on <a href="https://freeicons.io">freeicons.io, </a>
                Icon by <a href="https://freeicons.io/profile/2257">www.wishforge.games</a> on <a href="https://freeicons.io">freeicons.io, </a>
                Icon by <a href="https://freeicons.io/profile/722">Fasil</a> on <a href="https://freeicons.io">freeicons.io</a>
            </div>
        </div>
    )
}

export default Home;