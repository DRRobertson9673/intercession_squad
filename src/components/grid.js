import "../Style/grid.css"
import $ from 'jquery';
import { useState, useEffect } from 'react';

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
                    <div className="headerSR oswald" dangerouslySetInnerHTML={{ __html: weapon.SR }}></div>
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
    const [operativesArray, setOperativesArray] = useState([]);
  
    useEffect(() => {
      const storedOperativesArray = localStorage.getItem('operativesArray');
      if (storedOperativesArray) {
        setOperativesArray(JSON.parse(storedOperativesArray));
      }
    }, []);
  
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
  
  