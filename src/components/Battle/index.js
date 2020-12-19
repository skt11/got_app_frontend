import React from 'react';
import JonSnowIcon from '../../assets/game-of-thrones/svg/jon-snow-785801.svg';

import "./index.css";

const Battle = ({ battle }) => {
    return (
        <div className="Battle">
            <div className="Battle_Tonights_text">TONIGHT'S</div>
            <div className="Battle_Title">BATTLE OF THE BASTERDS</div>
            <div className="Battle_Card">
                {/* <img src={background_img}></img> */}
                <div className="Battle_Card_details">
                    <div className="Battle_Card_details_Attacker">
                        <img className="Battle_Card_details_Attacker_icon icon" src={JonSnowIcon} alt="Icon"></img>
                        <div className="Battle_Card_details_Attacker_name name">SNOW</div>
                        <div className="divider" />
                        <div className="Battle_Card_details_Attacker_desc desc">LORD OF WINTERFELL</div>
                    </div>
                    <div className="Battle_Card_details_VS_text">VS</div>
                    <div className="Battle_Card_details_Defender">
                        <img className="Battle_Card_details_Defender_icon icon" src={JonSnowIcon} alt="Icon"></img>
                        <div className="Battle_Card_details_Defender_name name">SNOW</div>
                        <div className="divider" />
                        <div className="Battle_Card_details_Defender_desc desc">LORD OF WINTERFELL</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Battle;