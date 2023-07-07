import "../Style/teamSelect.css"
import INTER1 from '../images/INTER1.jpg';
import INTER2 from '../images/INTER2.jpg';
import INTER3 from '../images/INTER3.jpg';
import AINTER1 from '../images/AINTER1.jpg';
import AINTER2 from '../images/AINTER2.jpg';
import AINTER3 from '../images/AINTER3.jpg';
import GREN from '../images/GREN.jpg';
import GUNNER from '../images/GUNNER.jpg';
import SGT from '../images/SGT.jpg';
import SCOPE from '../images/SCOPE.jpg';
import meleeIcon from '../images/weptypeM.png';
import rangedIcon from '../images/weptypeR.png';
import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import { renderToString } from 'react-dom/server';
import Modal from 'react-modal';

const srElementBlast = renderToString(
    <div className="headerSR oswald">Blast<div className="SRCircle"></div></div>
);

const srElementHBP = renderToString(
    <div className="headerSR oswald">RNG<div className="SRpentagon"></div></div>
);

const srElementFG = renderToString(
    <div className="headerSR oswald">RNG<div className="SRpentagon"></div>, Blast<div className="SRCircle"></div>, Indirect, Limited</div>
);

const srElementKG = renderToString(
    <div className="headerSR oswald">RNG<div className="SRpentagon"></div>, AP1, Indirect, Limited</div>
);

function TeamSelect({ onClick }) {
    const createKillTeam = () => {
        $('.mainContent').removeClass('hidden');
        $('.TEAMgrid').addClass('hidden');
    }

    const [operativesArray, setOperativesArray] = useState([]);



    useEffect(() => {
        localStorage.setItem('operativesArray', JSON.stringify(operativesArray));
    }, [operativesArray]);

    const [teamCounter, setTeamCounter] = useState(0);
    const [isTeamFullModalOpen, setIsTeamFullModalOpen] = useState(false);

    const handleCloseModal = () => {
        setIsTeamFullModalOpen(false);
    };

    const operative1Click = () => {

        if (teamCounter >= 6) {
            setIsTeamFullModalOpen(true);
            return;
        }

        $('.operative1').addClass('operativeSelected');
        $('.operative1').addClass('noClick');
        const newOperative = {
            id: "operative1",
            image: SGT,
            operativeName: "Skulljaeger",
            type: "Marksman, Scout",
            M: 3,
            APL: 3,
            GA: 1,
            DF: 3,
            SV: "3+",
            W: 15,
            Weapons: [
                {
                    weaponName: "Auto Bolt Rifle (RBB)",
                    weaponIcon: rangedIcon,
                    A: 4,
                    BS: "2+",
                    D: "3/4",
                    SR: "Ceaseless",
                    Crit: "-"
                },
                {
                    weaponName: "Power Weapon",
                    weaponIcon: meleeIcon,
                    A: 4,
                    BS: "3+",
                    D: "4/6",
                    SR: "Lethal 5+",
                    Crit: "-"
                }
            ],
            Abilities: [
                {
                    name: "Bolter Discipline",
                    detail: "This operative can perform two Shoot actions during its activation if a bolt weapon is selected for at least one of those shooting attacks."
                }
            ],
            UniqueActions: [],
            KeyWords: ["Keyword 1", "Keyword 2"],
            Notes: [""]
        };
        setOperativesArray(prevArray => [...prevArray, newOperative]);
        setTeamCounter(teamCounter + 1);
    };

    const operative2Click = () => {

        if (teamCounter >= 6) {
            setIsTeamFullModalOpen(true);
            return;
        }

        $('.operative2').addClass('operativeSelected');
        $('.operative2').addClass('noClick');
        const newOperative = {
            id: "operative2",
            image: GUNNER,
            operativeName: "Firestriker",
            type: "Staunch, Scout",
            M: 3,
            APL: 3,
            GA: 1,
            DF: 3,
            SV: "3+",
            W: 14,
            Weapons: [
                {
                    weaponName: "Auto Bolt Rifle",
                    weaponIcon: rangedIcon,
                    A: 4,
                    BS: "3+",
                    D: "3/4",
                    SR: "Ceaseless",
                    Crit: "-"
                },
                {
                    weaponName: "Auxiliary Grenade Launcher",
                    weaponIcon: rangedIcon,
                    A: 4,
                    BS: "3+",
                    D: "4/3",
                    SR: "",
                    Crit: ""
                },
                {
                    weaponName: "            -Frag",
                    A: 4,
                    BS: "3+",
                    D: "2/4",
                    SR: srElementBlast,
                    Crit: "-"
                },
                {
                    weaponName: "            -Krak",
                    A: 4,
                    BS: "3+",
                    D: "4/5",
                    SR: "AP1",
                    Crit: "-"
                },
            ],
            Abilities: [
                {
                    name: "Bolter Discipline",
                    detail: "This operative can perform two Shoot actions during its activation if a bolt weapon is selected for at least one of those shooting attacks."
                }
            ],
            UniqueActions: [],
            KeyWords: ["Keyword 1", "Keyword 2"],
            Notes: [""]
        };
        setOperativesArray(prevArray => [...prevArray, newOperative]);
        setTeamCounter(teamCounter + 1);
    };

    const operative3Click = () => {

        if (teamCounter >= 6) {
            setIsTeamFullModalOpen(true);
            return;
        }

        $('.operative3').addClass('operativeSelected');
        $('.operative3').addClass('noClick');
        const newOperative = {
            id: "operative3",
            image: SCOPE,
            operativeName: "Skygge",
            type: "Type 1",
            M: 3,
            APL: 3,
            GA: 1,
            DF: 3,
            SV: "3+",
            W: 14,
            Weapons: [
                {
                    weaponName: "Bolt Rifle (VSC)",
                    weaponIcon: rangedIcon,
                    A: 4,
                    BS: "3+",
                    D: "3/4",
                    SR: "Lethal 5+",
                    Crit: "P1"
                },
                {
                    weaponName: "Combat Blade",
                    weaponIcon: meleeIcon,
                    A: 4,
                    BS: "3+",
                    D: "3/5",
                    SR: "-",
                    Crit: "-"
                }
            ],
            Abilities: [
                {
                    name: "Bolter Discipline ",
                    detail: "This operative can perform two Shoot actions during its activation if a bolt weapon is selected for at least one of those shooting attacks."
                },
            ],
            UniqueActions: [
            ],
            KeyWords: ["Keyword 1", "Keyword 2"],
            Notes: [""]
        };
        setOperativesArray(prevArray => [...prevArray, newOperative]);
        setTeamCounter(teamCounter + 1);
    };

    const operative4Click = () => {

        if (teamCounter >= 6) {
            setIsTeamFullModalOpen(true);
            return;
        }

        $('.operative4').addClass('operativeSelected');
        $('.operative4').addClass('noClick');
        const newOperative = {
            id: "operative4",
            image: GREN,
            operativeName: "Thunderborn",
            type: "Type 1",
            M: 3,
            APL: 3,
            GA: 1,
            DF: 3,
            SV: "3+",
            W: 14,
            Weapons: [
                {
                    weaponName: "Heavy Bolt Pistol",
                    weaponIcon: rangedIcon,
                    A: 4,
                    BS: "3+",
                    D: "3/4",
                    SR: srElementHBP,
                    Crit: "P1"
                },
                {
                    weaponName: "Chainsword",
                    weaponIcon: meleeIcon,
                    A: 5,
                    BS: "3+",
                    D: "4/5",
                    SR: "-",
                    Crit: "-"
                },
                {
                    weaponName: "Frag Grenade [1]",
                    weaponIcon: rangedIcon,
                    A: 4,
                    BS: "3+",
                    D: "3/4",
                    SR: srElementFG,
                    Crit: ""
                },
                {
                    weaponName: "Krak Grenade [1]",
                    weaponIcon: rangedIcon,
                    A: 4,
                    BS: "3+",
                    D: "4/5",
                    SR: srElementKG,
                    Crit: ""
                },
            ],
            Abilities: [
                {
                    name: "Shock Assault ",
                    detail: "This operative can perform two Fight actions during its activation."
                },
                {
                    name: "Grenadier ",
                    detail: "This operative is equipped with frag and krak grenades and they do not cost any equipment points."
                },
            ],
            UniqueActions: [

            ],
            KeyWords: ["Keyword 1", "Keyword 2"],
            Notes: ["Grenades are once each"]
        };
        setOperativesArray(prevArray => [...prevArray, newOperative]);
        setTeamCounter(teamCounter + 1);
    };

    const operative5Click = () => {

        if (teamCounter >= 6) {
            setIsTeamFullModalOpen(true);
            return;
        }

        $('.operative5').addClass('operativeSelected');
        $('.operative5').addClass('noClick');
        const newOperative = {
            id: "operative5",
            image: AINTER1,
            operativeName: "Skulder",
            type: "Type 1",
            M: 3,
            APL: 3,
            GA: 1,
            DF: 3,
            SV: "3+",
            W: 14,
            Weapons: [
                {
                    weaponName: "Heavy Bolt Pistol",
                    weaponIcon: rangedIcon,
                    A: 4,
                    BS: "3+",
                    D: "3/4",
                    SR: srElementHBP,
                    Crit: "P1"
                },
                {
                    weaponName: "Chainsword",
                    weaponIcon: meleeIcon,
                    A: 5,
                    BS: "3+",
                    D: "4/5",
                    SR: "-",
                    Crit: "-"
                },
            ],
            Abilities: [
                {
                    name: "Shock Assault ",
                    detail: "This operative can perform two Fight actions during its activation."
                }
            ],
            UniqueActions: [

            ],
            KeyWords: ["Keyword 1", "Keyword 2"],
            Notes: [""]
        };
        setOperativesArray(prevArray => [...prevArray, newOperative]);
        setTeamCounter(teamCounter + 1);
    };

    const operative6Click = () => {

        if (teamCounter >= 6) {
            setIsTeamFullModalOpen(true);
            return;
        }

        $('.operative6').addClass('operativeSelected');
        $('.operative6').addClass('noClick');
        const newOperative = {
            id: "operative6",
            image: INTER2,
            operativeName: "Krugan",
            type: "Type 1",
            M: 3,
            APL: 3,
            GA: 1,
            DF: 3,
            SV: "3+",
            W: 14,
            Weapons: [
                {
                    weaponName: "Auto Bolt Rifle",
                    weaponIcon: rangedIcon,
                    A: 4,
                    BS: "3+",
                    D: "3/4",
                    SR: "Ceaseless",
                    Crit: "-"
                },
                {
                    weaponName: "Fists",
                    weaponIcon: meleeIcon,
                    A: 4,
                    BS: "3+",
                    D: "3/4",
                    SR: "-",
                    Crit: "-"
                },
            ],
            Abilities: [
                {
                    name: "Bolter Discipline ",
                    detail: "This operative can perform two Shoot actions during its activation if a bolt weapon is selected for at least one of those shooting attacks."
                }
            ],
            UniqueActions: [

            ],
            KeyWords: ["Keyword 1", "Keyword 2"],
            Notes: [""]
        };
        setOperativesArray(prevArray => [...prevArray, newOperative]);
        setTeamCounter(teamCounter + 1);
    };

    const operative7Click = () => {

        if (teamCounter >= 6) {
            setIsTeamFullModalOpen(true);
            return;
        }

        $('.operative7').addClass('operativeSelected');
        $('.operative7').addClass('noClick');
        const newOperative = {
            id: "operative7",
            image: INTER1,
            operativeName: "Fellseeker",
            type: "Type 1",
            M: 3,
            APL: 3,
            GA: 1,
            DF: 3,
            SV: "3+",
            W: 14,
            Weapons: [
                {
                    weaponName: "Auto Bolt Rifle",
                    weaponIcon: rangedIcon,
                    A: 4,
                    BS: "3+",
                    D: "3/4",
                    SR: "Ceaseless",
                    Crit: "-"
                },
                {
                    weaponName: "Fists",
                    weaponIcon: meleeIcon,
                    A: 4,
                    BS: "3+",
                    D: "3/4",
                    SR: "-",
                    Crit: "-"
                },
            ],
            Abilities: [
                {
                    name: "Bolter Discipline ",
                    detail: "This operative can perform two Shoot actions during its activation if a bolt weapon is selected for at least one of those shooting attacks."
                }
            ],
            UniqueActions: [

            ],
            KeyWords: ["Keyword 1", "Keyword 2"],
            Notes: [""]
        };
        setOperativesArray(prevArray => [...prevArray, newOperative]);
        setTeamCounter(teamCounter + 1);
    };

    const operative8Click = () => {

        if (teamCounter >= 6) {
            setIsTeamFullModalOpen(true);
            return;
        }

        $('.operative8').addClass('operativeSelected');
        $('.operative8').addClass('noClick');
        const newOperative = {
            id: "operative8",
            image: INTER3,
            operativeName: "Halfhammer",
            type: "Type 1",
            M: 3,
            APL: 3,
            GA: 1,
            DF: 3,
            SV: "3+",
            W: 14,
            Weapons: [
                {
                    weaponName: "Bolt Rifle (VSC)",
                    weaponIcon: rangedIcon,
                    A: 4,
                    BS: "3+",
                    D: "3/4",
                    SR: "Lethal 5+",
                    Crit: "P1"
                },
                {
                    weaponName: "Fists",
                    weaponIcon: meleeIcon,
                    A: 4,
                    BS: "3+",
                    D: "3/4",
                    SR: "-",
                    Crit: "-"
                }
            ],
            Abilities: [
                {
                    name: "Bolter Discipline ",
                    detail: "This operative can perform two Shoot actions during its activation if a bolt weapon is selected for at least one of those shooting attacks."
                },
            ],
            UniqueActions: [
            ],
            KeyWords: ["Keyword 1", "Keyword 2"],
            Notes: [""]
        };
        setOperativesArray(prevArray => [...prevArray, newOperative]);
        setTeamCounter(teamCounter + 1);
    };

    const operative9Click = () => {

        if (teamCounter >= 6) {
            setIsTeamFullModalOpen(true);
            return;
        }

        $('.operative9').addClass('operativeSelected');
        $('.operative9').addClass('noClick');
        const newOperative = {
            id: "operative9",
            image: AINTER2,
            operativeName: "Sikrend",
            type: "Type 1",
            M: 3,
            APL: 3,
            GA: 1,
            DF: 3,
            SV: "3+",
            W: 14,
            Weapons: [
                {
                    weaponName: "Heavy Bolt Pistol",
                    weaponIcon: rangedIcon,
                    A: 4,
                    BS: "3+",
                    D: "3/4",
                    SR: srElementHBP,
                    Crit: "P1"
                },
                {
                    weaponName: "Chainsword",
                    weaponIcon: meleeIcon,
                    A: 5,
                    BS: "3+",
                    D: "4/5",
                    SR: "-",
                    Crit: "-"
                },
            ],
            Abilities: [
                {
                    name: "Shock Assault ",
                    detail: "This operative can perform two Fight actions during its activation."
                }
            ],
            UniqueActions: [

            ],
            KeyWords: ["Keyword 1", "Keyword 2"],
            Notes: [""]
        };
        setOperativesArray(prevArray => [...prevArray, newOperative]);
        setTeamCounter(teamCounter + 1);
    };

    const operative10Click = () => {

        if (teamCounter >= 6) {
            setIsTeamFullModalOpen(true);
            return;
        }

        $('.operative10').addClass('operativeSelected');
        $('.operative10').addClass('noClick');
        const newOperative = {
            id: "operative10",
            image: AINTER3,
            operativeName: "Boldtooth",
            type: "Type 1",
            M: 3,
            APL: 3,
            GA: 1,
            DF: 3,
            SV: "3+",
            W: 14,
            Weapons: [
                {
                    weaponName: "Heavy Bolt Pistol",
                    weaponIcon: rangedIcon,
                    A: 4,
                    BS: "3+",
                    D: "3/4",
                    SR: srElementHBP,
                    Crit: "P1"
                },
                {
                    weaponName: "Chainsword",
                    weaponIcon: meleeIcon,
                    A: 5,
                    BS: "3+",
                    D: "4/5",
                    SR: "-",
                    Crit: "-"
                },
            ],
            Abilities: [
                {
                    name: "Shock Assault ",
                    detail: "This operative can perform two Fight actions during its activation."
                }
            ],
            UniqueActions: [

            ],
            KeyWords: ["Keyword 1", "Keyword 2"],
            Notes: [""]
        };
        setOperativesArray(prevArray => [...prevArray, newOperative]);
        setTeamCounter(teamCounter + 1);
    };






    const handleChildClick = () => {
        // Invoke the callback function passed from the parent component
        onClick();
    };




    return (
        <div className="TEAMgrid">
            <div className="TEAMrow">
                <div className="TEAMchoice operative1" onClick={operative1Click}>
                    <div className="TEAMoperativeImageHolder">
                        <img className="TEAMoperativeImage" src={SGT} alt="" />
                    </div>
                    <h3>Skulljaeger</h3>
                    <p>RECLUSIAM-BLESSED BOLTS <b>(3EP)</b></p>
                </div>

                <div className="TEAMchoice operative2" onClick={operative2Click}>
                    <div className="TEAMoperativeImageHolder">
                        <img className="TEAMoperativeImage" src={GUNNER} alt="" />
                    </div>
                    <h3>Firestriker</h3>
                    <p>AUSPEX <b>(2EP)</b></p>
                    <p>COMBAT BLADE <b>(1EP)</b></p>
                </div>

                <div className="TEAMchoice operative3" onClick={operative3Click}>
                    <div className="TEAMoperativeImageHolder">
                        <img className="TEAMoperativeImage" src={SCOPE} alt="" />
                    </div>
                    <h3>Skygge</h3>
                    <p>VENGEANCE-CLASS SCOPE <b>(3EP)</b></p>
                    <p>COMBAT BLADE <b>(1EP)</b></p>
                </div>

                <div className="TEAMchoice operative4" onClick={operative4Click}>
                    <div className="TEAMoperativeImageHolder">
                        <img className="TEAMoperativeImage" src={GREN} alt="" />
                    </div>
                    <h3>Thunderborn</h3>
                    <p>FRAG/KRAK GRENADES <b>(FREE)</b></p>
                </div>

                <div className="TEAMchoice operative5" onClick={operative5Click}>
                    <div className="TEAMoperativeImageHolder">
                        <img className="TEAMoperativeImage" src={AINTER1} alt="" />
                    </div>
                    <h3>Skulder</h3>
                    <p>TILTING SHIELD <b>(3EP)</b></p>
                </div>

            </div>
            <div className="TEAMrow">
                <div className="TEAMchoice operative6" onClick={operative6Click}>
                    <div className="TEAMoperativeImageHolder">
                        <img className="TEAMoperativeImage" src={INTER2} alt="" />
                    </div>
                    <h3>Krugan</h3>
                </div>

                <div className="TEAMchoice operative7" onClick={operative7Click}>
                    <div className="TEAMoperativeImageHolder">
                        <img className="TEAMoperativeImage" src={INTER1} alt="" />
                    </div>
                    <h3>Fellseeker</h3>
                </div>

                <div className="TEAMchoice operative8" onClick={operative8Click}>
                    <div className="TEAMoperativeImageHolder">
                        <img className="TEAMoperativeImage" src={INTER3} alt="" />
                    </div>
                    <h3>Halfhammer</h3>
                </div>

                <div className="TEAMchoice operative9" onClick={operative9Click}>
                    <div className="TEAMoperativeImageHolder">
                        <img className="TEAMoperativeImage" src={AINTER2} alt="" />
                    </div>
                    <h3>Sikrend</h3>
                </div>

                <div className="TEAMchoice operative10" onClick={operative10Click}>
                    <div className="TEAMoperativeImageHolder">
                        <img className="TEAMoperativeImage" src={AINTER3} alt="" />
                    </div>
                    <h3>Boldtooth</h3>
                </div>

            </div>
            <div id="createTeamButton" onMouseUp={createKillTeam} onClick={handleChildClick}>CREATE KILL TEAM</div>
            <Modal
                isOpen={isTeamFullModalOpen}
                onRequestClose={handleCloseModal}
                className="fullTeamModal"
                overlayClassName="custom-modal-overlay"
                portalClassName="modal-portal" // Add a portal class name
                contentLabel="Confirmation">
                <p className="modalText">Your team is full</p>
                <button className="modalClick" onClick={handleCloseModal}>OK</button>
            </Modal>
        </div>
    );
};

export default TeamSelect;