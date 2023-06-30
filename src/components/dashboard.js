import "../Style/dashboard.css"
import $ from 'jquery';
import { useState } from 'react';


const dashOpen = () => {
    $('.dashboard').addClass("open");
    $('.dashOpen').addClass("hidden");
    $('.dashboard').addClass("shadow");
    $('.screen').removeClass("hidden");
};

const dashClose = () => {
    $('.dashboard').removeClass("open");
    $('.dashOpen').removeClass("hidden");
    $('.tacPloysArea').addClass('hidden');
    $('.stratPloysArea').addClass('hidden');
    $('.turningPointArea').removeClass('hidden');
    $('.stratPloys').removeClass('headerSelected');
    $('.tacPloys').removeClass('headerSelected');
    $('.turningPointHeader').addClass('headerSelected');
    $('.dashboard').removeClass("shadow");
    $('.screen').addClass("hidden");
};

function Dashboard() {
    const [currentMyCP, setMyCP] = useState(0);
    const handleDecreaseMyCP = () => {
        setMyCP((prevMyCP) => prevMyCP - 1);
    }
    const handleIncreaseMyCP = () => {
        setMyCP((prevMyCP) => prevMyCP + 1);
    }

    const [currentMyVP, setMyVP] = useState(0);
    const handleDecreaseMyVP = () => {
        setMyVP((prevMyVP) => prevMyVP - 1);
    }
    const handleIncreaseMyVP = () => {
        setMyVP((prevMyVP) => prevMyVP + 1);
    }

    const [currentOPCP, setOPCP] = useState(0);
    const handleDecreaseOPCP = () => {
        setOPCP((prevOPCP) => prevOPCP - 1);
    }
    const handleIncreaseOPCP = () => {
        setOPCP((prevOPCP) => prevOPCP + 1);
    }

    const [currentOPVP, setOPVP] = useState(0);
    const handleDecreaseOPVP = () => {
        setOPVP((prevOPVP) => prevOPVP - 1);
    }
    const handleIncreaseOPVP = () => {
        setOPVP((prevOPVP) => prevOPVP + 1);
    }

    const [currentTP, setTP] = useState(1);
    const handleIncreaseTP = () => {
        setTP((prevTP) => prevTP + 1);
        $('.operativeCard').removeClass("activated");
    }



    const stratPloysClick = () => {
        $('.tacPloysArea').addClass('hidden');
        $('.stratPloysArea').removeClass('hidden');
        $('.turningPointArea').addClass('hidden');
        $('.turningPointHeader').removeClass('headerSelected');
        $('.tacPloys').removeClass('headerSelected');
        $('.stratPloys').addClass('headerSelected');
    }

    const tacPloysClick = () => {
        $('.tacPloysArea').removeClass('hidden');
        $('.stratPloysArea').addClass('hidden');
        $('.turningPointArea').addClass('hidden');
        $('.stratPloys').removeClass('headerSelected');
        $('.turningPointHeader').removeClass('headerSelected');
        $('.tacPloys').addClass('headerSelected');
    }

    const turningPointHeaderClick = () => {
        $('.tacPloysArea').addClass('hidden');
        $('.stratPloysArea').addClass('hidden');
        $('.turningPointArea').removeClass('hidden');
        $('.stratPloys').removeClass('headerSelected');
        $('.tacPloys').removeClass('headerSelected');
        $('.turningPointHeader').addClass('headerSelected');
    }

    return (
        <div className="dashboard">
            <div className="dashOpen" onClick={dashOpen}><div className="dot"></div><div className="dot"></div><div className="dot"></div></div>
            <div className="dashClose" onClick={dashClose}><div className="dot"></div><div className="dot"></div><div className="dot"></div></div>
            <div className="dashArea">
                <div className="dashLeft dashOutside">
                    <div className="cpTitle scoreTitle">CP</div>
                    <div className="cpContent scoreContent"><div className="addMinus" onClick={handleDecreaseMyCP}>-</div>{currentMyCP}<div className="addMinus" onClick={handleIncreaseMyCP}>+</div></div>
                    <div className="vpTitle scoreTitle">VP</div>
                    <div className="vpContent scoreContent"><div className="addMinus" onClick={handleDecreaseMyVP}>-</div>{currentMyVP}<div className="addMinus" onClick={handleIncreaseMyVP}>+</div></div>
                </div>


                <div className="dashMiddle">

                    <div className="dashHeaders">
                        <div className="stratTacPloys">
                            <div className="ploysArea stratPloys" onClick={stratPloysClick}>PLOYS</div>
                            <div className="ploysArea turningPointHeader headerSelected" onClick={turningPointHeaderClick}>TURNING POINT</div>
                            <div className="ploysArea tacPloys" onClick={tacPloysClick}>TAC OPS</div>
                        </div>
                        <div className="turningPointArea">
                            <div className="turningPointTitle">TURNING POINT<div className="turningPoint">{currentTP}</div></div>
                            <div className="increaseTurningPoint" onClick={handleIncreaseTP}>NEXT TURNING POINT</div>
                        </div>
                    </div>

                    <div className="scrollable">
                        <div className="stratPloysArea hidden">

                            <div className="stratHeader">
                                <div className="stratName">ASSAULT DOCTRINE <small>(STRAT PLOY)</small></div><div className="stratCost">1CP</div>
                            </div>
                            <div className="stratContent">Until the end of the Turning Point, each time a friendly INTERCESSION SQUAD operative fights in combat in an activation in which it performed a Charge action, in the Roll Attack Dice step of that combat, you can re-roll one of your attack dice. You cannot use another "Doctrine" Strategic Ploy in this Turning Point.</div>

                            <div className="stratHeader">
                                <div className="stratName">AND THEY SHALL KNOW NO FEAR <small>(STRAT PLOY)</small></div><div className="stratCost">1CP</div>
                            </div>
                            <div className="stratContent">Until the end of the Turning Point:
                                <ul>
                                    <li>You can ignore any or all modifiers to the APL of friendly INTERCESSION SQUAD operatives.</li>
                                    <li>Friendly INTERCESSION SQUAD operatives are not injured.</li>
                                </ul>
                            </div>

                            <div className="stratHeader">
                                <div className="stratName">DEVASTATOR DOCTRINE <small>(STRAT PLOY)</small></div><div className="stratCost">1CP</div>
                            </div>
                            <div className="stratContent">Until the end of the Turning Point, each time a friendly INTERCESSION SQUAD operative makes a shooting attack against an enemy operative more than <div className="pentagonPloy"></div> from it, in the Roll Attack Dice step of that shooting attack, you can re-roll one of your attack dice. You cannot use another "Doctrine" Strategic Ploy in this Turning Point.</div>

                            <div className="stratHeader">
                                <div className="stratName">TACTICAL DOCTRINE <small>(STRAT PLOY)</small></div><div className="stratCost">1CP</div>
                            </div>
                            <div className="stratContent">Until the end of the Turning Point, each time a friendly INTERCESSION SQUAD operative makes a shooting attack against an enemy operative within <div className="pentagonPloy"></div> of it, in the Roll Attack Dice step of that shooting attack, you can re-roll one of your attack dice. You cannot use another "Doctrine" Strategic Ploy in this Turning Point.</div>

                            <div className="stratHeader">
                                <div className="stratName">ANGEL OF DEATH <small>(TAC PLOY)</small></div><div className="stratCost">1CP</div>
                            </div>
                            <div className="stratContent">Use this Tactical Ploy at the end of the Firefight phase. Select one friendly INTERCESSION SQUAD operative to perform a free Fight action.</div>

                            <div className="stratHeader">
                                <div className="stratName">ADAPTIVE TACTICS <small>(TAC PLOY)</small></div><div className="stratCost">1CP</div>
                            </div>
                            <div className="stratContent">Use this Tactical Ploy in the Select a Kill Team step, when selecting your kill team. Change one of your Chapter Tactics abilities (pg 3) for the battle to another from the same category. You can only use this Tactical Ploy once per battle.</div>

                            <div className="stratHeader">
                                <div className="stratName">TRANSHUMAN PHYSIOLOGY <small>(TAC PLOY)</small></div><div className="stratCost">1CP</div>
                            </div>
                            <div className="stratContent">Use this Tactical Ploy in the Roll Defence Dice step of a shooting attack, after rolling defence dice for a friendly INTERCESSION SQUAD operative. You can retain one of your successful normal saves as a critical save instead.</div>

                            <div className="stratHeader">
                                <div className="stratName">WRATH OF VENGEANCE <small>(TAC PLOY)</small></div><div className="stratCost">1CP</div>
                            </div>
                            <div className="stratContent">Use this Tactical Ploy when a friendly INTERCESSION SQUAD operative is incapacitated. Before that operative is removed from the killzone, it can perform a free Shoot action. Unless otherwise specified, the operative would be injured for this.</div>
                        </div>


                        <div className="tacPloysArea hidden">

                            <div className="stratHeader">
                                <div className="stratName">SHOCK AND AWE</div><div className="stratCost"></div>
                            </div>
                            <div className="stratContent">You can reveal this Tac Op in the Reveal Tac Ops step of any Turning Point.
                                <ul>
                                    <li>At the end of any Turning Point, if friendly operatives control one or more objective markers that were controlled by enemy operatives at the start of the Turning Point, you score 1VP.</li>
                                    <li>If you achieve the first condition in any subsequent Turning Points, you score 1VP.</li>
                                </ul>
                            </div>

                            <div className="stratHeader">
                                <div className="stratName">CHAMPION OF MANKIND</div><div className="stratCost"></div>
                            </div>
                            <div className="stratContent">You can reveal this Tac Op when a friendly INTERCESSION SQUAD operative incapacitates an enemy operative. At the end of the battle:
                                <ul>
                                    <li>If that friendly operative has incapacitated more enemy operatives than each other friendly INTERCESSION SQUAD operative has during the battle, you score 1VP.</li>
                                    <li>If that friendly operative has incapacitated more enemy operatives than each other enemy operative has during the battle, you score 1VP.</li>
                                </ul>
                            </div>

                            <div className="stratHeader">
                                <div className="stratName">INDOMITABLE SUPERIORITY</div><div className="stratCost"></div>
                            </div>
                            <div className="stratContent">Reveal this Tac Op at the end of the battle:
                                <ul>
                                    <li>If enemy operatives do not control any objective markers but an INTERCESSION SQUAD operative does, you score 1VP.</li>
                                    <li>If there are less enemy operatives in the killzone than there are friendly INTERCESSION SQUAD operatives in the killzone, you score 1VP.</li>
                                </ul>
                                If the mission objective requires operatives to be removed from the killzone to score victory points (but not as a result of being incapacitated), e.g. to ‘escape’, you cannot select this Tac Op.
                            </div>

                            <div className="stratHeader">
                                <div className="stratName">HEADHUNTER</div><div className="stratCost"></div>
                            </div>
                            <div className="stratContent">Reveal this Tac Op when an enemy LEADER operative is incapacitated.
                                <ul>
                                    <li>You score 1 VP.</li>
                                    <li>If it is the first or second Turning Point, you score 1 VP.</li>
                                </ul>
                            </div>

                            <div className="stratHeader">
                                <div className="stratName">ASSASSINATE TARGET</div><div className="stratCost"></div>
                            </div>
                            <div className="stratContent">You must reveal this Tac Op in the Target Reveal step of the first Turning Point.
                                <br />Your opponent selects one of their operatives.
                                <ul>
                                    <li>If that operative is incapacitated, you score 2VPs.</li>
                                    <li>At the end of the battle, if that operative has not been incapacitated but has fewer than half of its wounds remaining, you score 1VP.</li>
                                </ul>
                            </div>

                            <div className="stratHeader">
                                <div className="stratName">ROUT</div><div className="stratCost"></div>
                            </div>
                            <div className="stratContent">You can reveal this Tac Op in the Target Reveal step of any Turning Point.
                                <ul>
                                    <li>If an enemy operative is incapacitated by a friendly operative, and that friendly operative is within pentagon of your opponent's drop zone when it does so, you score 1 VP.</li>
                                    <li>If you achieve the first condition in any subsequent Turning Point, you score 1 VP.</li>
                                </ul>
                            </div>

                            <div className="stratHeader">
                                <div className="stratName">EXECUTIONER</div><div className="stratCost"></div>
                            </div>
                            <div className="stratContent">You can reveal this Tac Op in the Target Reveal step of any Turning Point.
                                When you do so, select one friendly operative to be your executioner. At the end of each Target Reveal step, select one enemy operative to be executed for the Turning Point.
                                <ul>
                                    <li>If the enemy operative you selected to be executed for the Turning Point is incapacitated by your executioner during the same Turning Point, score 1VP.</li>
                                    <li>If you achieve the first condition in any subsequent Turning Points, you score 1VP.</li>
                                </ul>
                            </div>

                            <div className="stratHeader">
                                <div className="stratName">ELIMINATE GUARDS</div><div className="stratCost"></div>
                            </div>
                            <div className="stratContent">You can reveal this Tac Op in the Target Reveal step of any Turning Point.
                                Once you do so, at the end of each Target Reveal step, select an objective marker on the centre line or within your opponent's territory, then select one enemy operative within <div className="circlePloy"></div> of it to be the guard for the Turning Point.
                                <ul>
                                    <li>If the enemy operative you selected to be the guard for the Turning Point is incapacitated during the same Turning Point, you score 1VP.</li>
                                    <li>If you achieve the first condition in any subsequent Turning Points, you score 1VP.</li>
                                </ul>
                            </div>

                            <div className="stratHeader">
                                <div className="stratName">ROB AND RANSACK</div><div className="stratCost"></div>
                            </div>
                            <div className="stratContent">You can reveal this Tac Op when an enemy operative is incapacitated by a friendly operative within its Engagement Range, and that friendly operative is more than <div className="squarePloy"></div> from other enemy operatives
                                <ul>
                                    <li>You score 1 VP</li>
                                    <li>At the end of the battle, if you achieved the first condition and that friendly operative has not been incapacitated, you score 1 VP.</li>
                                </ul>
                            </div>

                            <div className="stratHeader">
                                <div className="stratName">SEIZE GROUND</div><div className="stratCost"></div>
                            </div>
                            <div className="stratContent"><i>Not useable in Close Quarters</i><br />You must reveal this Tac Op in the Target Reveal step of the first turning point.
                                Select one terrain feature that is more than <div className="squarePloy"></div> from your drop zone and includes any parts with the Heavy trait.
                                <ul>
                                    <li>At the end of the battle, if friendly operatives control that terrain feature, you score 1VP.</li>
                                    <li>If you achieve the first condition, there are no enemy operatives within <div className="trianglePloy"></div> of that terrain feature, and the total APL of the friendly operatives that control it is 4 or more, you score 1VP.</li>
                                </ul>
                            </div>


                            <div className="stratHeader">
                                <div className="stratName">HOLD THEM BACK</div><div className="stratCost"></div>
                            </div>
                            <div className="stratContent">You can reveal this Tac Op in the Target Reveal step of any Turning point after the first.
                                <ul>
                                    <li>At the end of any Turning Point, if there are no enemy operatives wholly within your territory, you score 1VP.</li>
                                    <li>If you achieve the first condition at the end of any subsequent Turning Points, you score 1VP.</li>
                                </ul>
                            </div>

                            <div className="stratHeader">
                                <div className="stratName">PROTECT ASSETS</div><div className="stratCost"></div>
                            </div>
                            <div className="stratContent">You can reveal this Tac Op in the Target Reveal step of any Turning point.
                                <ul>
                                    <li>At the end of any Turning Point, if two or more enemy operatives were incapacitated within <div className="circlePloy"></div> of an objective marker during that Turning Point, you score 1 VP.</li>
                                    <li>If you achieve the first condition at the end of any subsequent Turning Point, you score 1 VP.</li>
                                </ul>
                            </div>

                            <div className="stratHeader">
                                <div className="stratName">SECURE CENTRE LINE</div><div className="stratCost"></div>
                            </div>
                            <div className="stratContent">You can reveal this Tac Op in the Target Reveal step of any Turning Point after the first.
                                <ul>
                                    <li>At the end of any Turning Point, if the total APL of friendly operatives on the centre line and not on a Vantage Point is greater than that of the enemy operatives, you score 1VP.</li>
                                    <li>If you achieve the first condition at the end of any subsequent Turning Points, you score 1VP.</li>
                                </ul>
                            </div>

                            <div className="stratHeader">
                                <div className="stratName">ESCORT OPERATIVE</div><div className="stratCost"></div>
                            </div>
                            <div className="stratContent">You can reveal this Tac Op in the Target Reveal step of the first or second Turning Point.
                                <br />Select one friendly operative.
                                <br />At the end of the battle:
                                <ul>
                                    <li>If that friendly operative is wholly within your opponent's territory, you score 1VP.</li>
                                    <li>If that friendly operative is within <div className="pentagonPloy"></div> of your opponent's killzone edge, you score 1VP.</li>
                                </ul>
                            </div>

                            <div className="stratHeader">
                                <div className="stratName">CENTRAL CONTROL</div><div className="stratCost"></div>
                            </div>
                            <div className="stratContent">You can reveal this Tac Ops in the Target Reveal step of any Turning Point after the first.
                                <ul>
                                    <li>At the end of any Turning Point, if the total APL of friendly operatives within <div className="squarePloy"></div> of the center and not on a Vantage Point is greater than that of enemy operatives, you score 1 VP</li>
                                    <li>If you achieve the first condition at the end of any subsequent Turning Point, you score 1 VP</li>
                                </ul>
                            </div>

                            <div className="stratHeader">
                                <div className="stratName">SEIZE ACCESS POINT</div><div className="stratCost"></div>
                            </div>
                            <div className="stratContent"><i>Close Quarters only</i><br />You must reveal this Tac Op in the Target Reveal step of the first Turning Point.<br />
                                Select one access point on the centre line or within your opponent’s territory.
                                <ul>
                                    <li>At the end of the battle, if the total APL of friendly operatives within <div className="circlePloy"></div> of that access point is greater than that of enemy operatives, you score 1VP.</li>
                                    <li>If you achieve the first condition, there are no enemy operatives within <div className="circlePloy"></div> of that access point, and the total APL of friendly operatives within <div className="circlePloy"></div> of it is 4 or more, you score 1VP.</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>






                <div className="dashRight dashOutside">
                    <div className="cpTitle scoreTitle">CP</div>
                    <div className="cpContent scoreContent"><div className="addMinus" onClick={handleDecreaseOPCP}>-</div>{currentOPCP}<div className="addMinus" onClick={handleIncreaseOPCP}>+</div></div>
                    <div className="vpTitle scoreTitle">VP</div>
                    <div className="vpContent scoreContent"><div className="addMinus" onClick={handleDecreaseOPVP}>-</div>{currentOPVP}<div className="addMinus" onClick={handleIncreaseOPVP}>+</div></div>
                </div>

            </div>
        </div>
    );
}

export default Dashboard;