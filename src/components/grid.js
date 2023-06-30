import "../Style/grid.css"
import INTER1 from '../images/INTER1.jpg';
import INTER2 from '../images/INTER2.jpg';
import GREN from '../images/GREN.jpg';
import GUNNER from '../images/GUNNER.jpg';
import SGT from '../images/SGT.jpg';
import SCOPE from '../images/SCOPE.jpg';
import meleeIcon from '../images/weptypeM.png';
import rangedIcon from '../images/weptypeR.png';
import $ from 'jquery';
import { useState } from 'react';

const operativesArray = [
    {
        id: "operative1",
        image: SGT,
        operativeName: "Ulrik Skull Hunter",
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
            },
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
    },
    {
        id: "operative2",
        image: GUNNER,
        operativeName: "Solvar Firestriker",
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
                SR: <div className="headerSR oswald">Blast<div className="SRCircle"></div></div>,
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
            {
                name: "",
                detail: <div className="ability"><b>Auspex Scan (1AP) </b>Select one enemy operative Visible to or within<div className="pentagon"></div>of this operative. Until the end of the Turning Point:<br/><br/>•  That enemy operative is not Obscured.<br/>•  Defence dice cannot be automatically retained as a result of Cover for that enemy operative.<br/><br/>This operative cannot perform this action while within Engagement Range of an enemy operative.</div>
            },
        ],
        KeyWords: ["Keyword 1", "Keyword 2"],
        Notes: ""
    },
    {
        id: "operative3",
        image: SCOPE,
        operativeName: "Gaudvin Blackborn",
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
    },
    {
        id: "operative4",
        image: GREN,
        operativeName: "Haakian Wintertooth",
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
                SR: <div className="headerSR oswald">RNG<div className="SRpentagon"></div></div>,
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

            },
            {
                weaponName: "Frag Grenade",
                weaponIcon: rangedIcon,
                A: 4,
                BS: "3+",
                D: "3/4",
                SR: <div className="headerSR oswald">RNG<div className="SRpentagon"></div>, Blast<div className="SRCircle"></div>, Indirect, Limited</div>,
                Crit: ""
            },
            {
                weaponName: "Krak Grenade",
                weaponIcon: rangedIcon,
                A: 4,
                BS: "3+",
                D: "4/5",
                SR: <div className="headerSR oswald">RNG<div className="SRpentagon"></div>, AP1, Indirect, Limited</div>,
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
    },
    {
        id: "operative5",
        image: INTER1,
        operativeName: "Holmja Fellseeker",
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
    },

    {
        id: "operative6",
        image: INTER2,
        operativeName: "Krugan Sagastone",
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
    },
];

const Card = ({ name, image, wounds, M, APL, GA, DF, SV, Weapons, Notes, id }) => {
    const handleClick = () => {
        $('.operativeCard').addClass("invisible");
        setTimeout(() => $('.operativeCard').addClass("hidden"), 125);
        setTimeout(() => $("#" + id).removeClass("hidden"), 125);
        setTimeout(() => $("#" + id).removeClass("invisible"), 250);
        $('.dashboard').addClass("hidden")
    };

    const [currentMove, setMove] = useState(M);

    const [currentWound, setWound] = useState(wounds);
    const handleDecreaseWound = () => {
        setWound((prevWound) => prevWound - 1);
        if (currentWound - 1 < (wounds / 2)) {
            console.log('slowed');
            $(`[name='${id}']`).addClass("slowed");
            setMove((prevmov) => 2);
            $(`[name='${id}']`).children().eq(2).addClass("grayscale");
            $(`[name='${id}']`).children().eq(0).children().eq(0).addClass("grayscale grayborder");
            $(`[name='${id}']`).children().eq(6).addClass("grayscale");
            $(`[name='${id}']`).children().eq(6).children().eq(0).addClass("grayscale");
        }
        if (currentWound - 1 === 0) {
            $(`[name='${id}']`).addClass("dead");
        }
    };

    const handleIncreaseWound = () => {
        setWound((prevWound) => wounds);
        $(`[name='${id}']`).removeClass("dead");
        $(`[name='${id}']`).removeClass("slowed");
        setMove((prevmov) => M);
        $(`[name='${id}']`).children().eq(2).removeClass("grayscale");
        $(`[name='${id}']`).children().eq(0).children().eq(0).removeClass("grayscale grayborder");
        $(`[name='${id}']`).children().eq(6).removeClass("grayscale");
        $(`[name='${id}']`).children().eq(6).children().eq(0).removeClass("grayscale");
        $(`[name='${id}']`).removeClass("activated");
    };

    return <div name={id} className="operativeCard">
        <div className="imageName">
            <div className="operativeImageHolder">
                <img className="operativeImage" src={image} alt="" onClick={handleIncreaseWound} />
            </div>
            <div className="nameNwounds">
                <h1>{name}</h1>
                <h2 onClick={handleDecreaseWound}>{currentWound}</h2>
            </div>
        </div>
        <div className="woundsBar">
        </div>
        <div className="stats" onClick={handleClick}>
            <div className="statName">M</div>
            <div className="statName">APL</div>
            <div className="statName">GA</div>
            <div className="statName">DF</div>
            <div className="statName">SV</div>
        </div>
        <div className="statValues" onClick={handleClick}>
            <div className="statValue movement">{currentMove}<div className="circle"></div></div>
            <div className="statValue">{APL}</div>
            <div className="statValue">{GA}</div>
            <div className="statValue">{DF}</div>
            <div className="statValue">{SV}</div>
        </div>
        <div className="weaponsList" onClick={handleClick}>
            {Weapons.map(weapon => (
                <div className="weapons">
                    <div className="weaponName"><img className="attackIcon" src={weapon.weaponIcon} alt="" />{weapon.weaponName}</div>
                </div>
            ))}
        </div>
        <div className="notesArea" onClick={handleClick}>
            <p>{Notes[0]}<br /><br />{Notes[1]}</p>
        </div>
        
    </div>;
};

const CardLarge = ({ name, image, wounds, M, APL, GA, DF, SV, Weapons, Abilities, UniqueActions, id }) => {
    const handleClickLarge = () => {
        setTimeout(() => $('.operativeCard').removeClass("invisible"), 250);
        setTimeout(() => $('.operativeCard').removeClass("hidden"), 125);
        $('.operativeCardLarge').addClass("invisible");
        setTimeout(() => $('.operativeCardLarge').addClass("hidden"), 125);
        setTimeout(() => $('.dashboard').removeClass("hidden"), 250);
    };

    const operativeActivated = () => {
        $(`[name='${id}']`).addClass("activated");
    }

    return <div id={id} className="operativeCardLarge hidden invisible" onClick={handleClickLarge}>
        <div className="largeCardSections">
            <div className="nameSection">{name}</div>
            <div className="imageSection"><img className="operativeImageLarge" src={image} alt="" /></div>
            <div className="statsSection">
                <div className="statsLarge orange">
                    <div className="statNameLarge">M</div>
                    <div className="statNameLarge">APL</div>
                    <div className="statNameLarge">GA</div>
                </div>
                <div className="statsLarge">
                    <div className="statNameLarge movement">{M}<div className="circle"></div></div>
                    <div className="statNameLarge">{APL}</div>
                    <div className="statNameLarge">{GA}</div>
                </div>
                <div className="statsLarge orange">
                    <div className="statNameLarge">DF</div>
                    <div className="statNameLarge">SV</div>
                    <div className="statNameLarge">W</div>
                </div>
                <div className="statsLarge">
                    <div className="statNameLarge">{DF}</div>
                    <div className="statNameLarge">{SV}</div>
                    <div className="statNameLarge">{wounds}</div>
                </div>
            </div>
        </div>
        <div className="headerBar">
            <div className="headerWeapon">Weapon</div>
            <div className="headerSkill">A</div>
            <div className="headerSkill">BS/WS</div>
            <div className="headerD">D</div>
            <div className="headerSR">SR</div>
            <div className="headerCrit">!</div>
        </div>

        <div className="weaponsList">
            {Weapons.map(weapon => (
                <div className="weaponsLarge">
                    <div className="weaponNameLarge headerWeapon"><img className="attackIconLarge" src={weapon.weaponIcon} alt="" />{weapon.weaponName}</div>
                    <div className="headerSkill oswald">{weapon.A}</div>
                    <div className="headerSkill oswald">{weapon.BS}</div>
                    <div className="headerD oswald">{weapon.D}</div>
                    <div className="headerSR oswald">{weapon.SR}</div>
                    <div className="headerCrit oswald">{weapon.Crit}</div>
                </div>
            ))}
        </div>

        <div className="abilitiesUniqueActions">
            <div className="abilities">
                <div className="AUTitle">ABILITIES</div>
                {Abilities.map(ability => (
                    <div className="ability"><b>{ability.name}</b>{ability.detail}</div>
                ))}
            </div>
            <div className="abilities">
                <div className="AUTitle">UNIQUE ACTIONS</div>
                {UniqueActions.map(UniqueActions => (
                    <div className="ability"><b>{UniqueActions.name}</b>{UniqueActions.detail}</div>
                ))}
            </div>
        </div>
        <div className="activateButton" onClick={operativeActivated}>ACTIVATE</div>
    </div>;
};

function Grid() {

    return (
        <div>
            <div id="operativesGrid">
                {operativesArray.map((card) => (
                    <Card id={card.id} name={card.operativeName} type={card.type} image={card.image} wounds={card.W} M={card.M} APL={card.APL} GA={card.GA} DF={card.DF} SV={card.SV} Weapons={card.Weapons} Notes={card.Notes} />
                ))}
                {operativesArray.map((cardLarge) => (
                    <CardLarge id={cardLarge.id} name={cardLarge.operativeName} type={cardLarge.type} image={cardLarge.image} wounds={cardLarge.W} M={cardLarge.M} APL={cardLarge.APL} GA={cardLarge.GA} DF={cardLarge.DF} SV={cardLarge.SV} Weapons={cardLarge.Weapons} Notes={cardLarge.Notes} Abilities={cardLarge.Abilities} UniqueActions={cardLarge.UniqueActions} />
                ))}
            </div>

        </div>
    );
}

export default Grid;