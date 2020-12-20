import React from 'react';
import icon_maping from '../../shared/svg_mapping';
import people_icon from '../../assets/people.svg';
import skull_icon from '../../assets/skull.svg'

import "./index.css";

const Battle = ({ battle }) => {
    console.log(battle)
    return (
        <div className="Battle">
            <div className="Battle_Tonights_text">BATTLE #{battle.battle_number} - YEAR {battle.year}</div>
            <div className="Battle_Title">{battle.name.toUpperCase()}</div>
            <div className="Battle_Card">
                <div className="Battle_Card_details">
                    <div className="Battle_Card_details_Attacker">
                        <img className="Battle_Card_details_Attacker_icon icon"
                            style={{ border: `3px solid ${battle.attacker_outcome === 'win' ? '#0ffc03' : 'red'}` }}
                            src={icon_maping[battle.attacker_king]} alt="Icon"></img>
                        <div className="Battle_Card_details_Attacker_name name">{battle.attacker_king.split(' ')[1].toUpperCase()}</div>
                        <div className="divider" />
                        <div className="Battle_Card_details_Attacker_desc desc">Attacker King</div>
                    </div>
                    <div className="Battle_Card_details_VS_text">VS</div>
                    <div className="Battle_Card_details_Defender">
                        <img className="Battle_Card_details_Defender_icon icon"
                            style={{ border: `3px solid ${battle.attacker_outcome !== 'win' ? '#0ffc03' : 'red'}` }}
                            src={icon_maping[battle.defender_king]} alt="Icon"></img>
                        <div className="Battle_Card_details_Defender_name name">{battle.defender_king.split(' ')[1].toUpperCase()}</div>
                        <div className="divider" />
                        <div className="Battle_Card_details_Defender_desc desc">Defender King</div>
                    </div>
                </div>
            </div>
            <div className="Battle_Stats_bar">
                <div className="Battle_Stats_bar_attacker">
                    <img className="Battle_Stats_bar_attacker_house status_icon"
                        alt="Attacker"
                        src={icon_maping[battle.attacker_1]}></img>
                    <img className="Battle_Stats_bar_attacker_size_icon"
                        alt="Attacker"
                        src={people_icon}></img>
                    <div className="Battle_Stats_bar_attacker_size_num">
                        {battle.attacker_size || "-"}
                    </div>
                    <img className="Battle_Stats_bar_attacker_size_icon"
                        alt="Attacker"
                        src={skull_icon}></img>
                    <div className="Battle_Stats_bar_attacker_size_num">
                        {battle.major_death || "-"}
                    </div>
                </div>
                <div className="Battle_Stats_bar_defender">
                    <div className="Battle_Stats_bar_defender_size_num">{battle.major_capture || "-"}</div>
                    <img className="Battle_Stats_bar_defender_size_icon"
                        alt="Attacker"
                        src={skull_icon}></img>
                    <div className="Battle_Stats_bar_defender_size_num">{battle.defender_size || "-"}</div>
                    <img className="Battle_Stats_bar_defender_size_icon"
                        alt="Attacker"
                        src={people_icon}></img>
                    <img className="Battle_Stats_bar_defender_house status_icon"
                        alt="Defender"
                        src={icon_maping[battle.defender_1]}></img>
                </div>
            </div>
            <div className="Battle_Misc_info">
                <div><span>Battle type: </span>{battle.battle_type}</div>
                <div><span>Location: </span>{battle.location}</div>
                <div><span>Region: </span>{battle.region}</div>
                <div><span>Summer: </span>{battle.summer}</div>
                <div><span>Attacker Commander: </span>{battle.attacker_commander}</div>
                <div><span>Defender Commander: </span>{battle.defender_commander}</div>
                <div><span>Note: </span>{battle.note}</div>
            </div>
        </div>
    )
}

export default Battle;