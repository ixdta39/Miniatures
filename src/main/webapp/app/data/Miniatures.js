/**
 *
 *
 */
Ext.define('Miniatures.data.Miniatures', {
    singleton   : true,

    movementData    : {

        shipId      : 1,
        shipName    : 'b-wing',
        shipFaction : 'Rebel Alliance',
        shipCard    : 'b-wing',
        movements   : [
            {
                direction   : 'forward',
                speed       : 4,
                color       : 'RED'
            },
            {
                direction   : 'forward',
                speed       : 3,
                color       : 'WHITE'
            },
            {
                direction   : 'bank_left',
                speed       : 3,
                color       : 'RED'
            },
            {
                direction   : 'bank_right',
                speed       : 3,
                color       : 'RED'
            },
            {
                direction   : 'turn_left',
                speed       : 2,
                color       : 'WHITE'
            },
            {
                direction   : 'bank_left',
                speed       : 2,
                color       : 'WHITE'
            },
            {
                direction   : 'forward',
                speed       : 2,
                color       : 'GREEN'
            },
            {
                direction   : 'bank_right',
                speed       : 2,
                color       : 'WHITE'
            },
            {
                direction   : 'turn_right',
                speed       : 2,
                color       : 'WHITE'
            },
            {
                direction   : 'koiogran_turn',
                speed       : 2,
                color       : 'RED'
            }
        ]
    },


    shipData    : [
        {
            shipId      : 1,
            shipType    : 'B-Wing',
            attack      : 3,
            agility     : 1,
            hull        : 3,
            shield      : 5,
            shipCard    : 'b-wing',
            shipFaction : 'Rebel Alliance',
            actions     : 'barrel_roll,target_lock,focus',
            upgrades    : 'torpedo,torpedo,systems_upgrade,cannon,modification'
        },
        {
            shipId      : 2,
            shipType    : 'X-Wing',
            attack      : 3,
            agility     : 2,
            hull        : 3,
            shields     : 2,
            shipCard    : 'x-wing',
            shipFaction : 'Rebel Alliance',
            actions     : 'target_lock,focus',
            upgrades    : 'astromech,torpedo,modification'
        },
        {
            shipId      : 3,
            shipType    : 'A-Wing',
            attack      : 2,
            agility     : 3,
            hull        : 2,
            shields     : 2,
            shipCard    : 'a-wing',
            shipFaction : 'Rebel Alliance',
            actions     : 'focus,target_lock,boost,evade',
            upgrades    : 'missile,modification'
        },
        {
            shipId      : 4,
            shipType    : 'Firespray-31',
            attack      : 3,
            agility     : 2,
            hull        : 6,
            shields     : 4,
            shipCard    : 'firespray-31',
            shipFaction : 'Galactic Empire',
            actions     : 'focus,target_lock,evade',
            upgrades    : ''
        },
        {
            shipId      : 5,
            shipType    : 'Hwk-290',
            attack      : 1,
            agility     : 2,
            hull        : 4,
            shields     : 1,
            shipCard    : 'hwk-290',
            shipFaction : 'Rebel Alliance',
            actions     : 'focus,target_lock',
            upgrades    : 'crew_member,crew_member,turret'
        },
        {
            shipId      : 6,
            shipType    : 'TIE-Advanced',
            attack      : 2,
            agility     : 3,
            hull        : 3,
            shields     : 2,
            shipCard    : 'tie-advanced',
            shipFaction : 'Galactic Empire',
            actions     : 'focus,target_lock,barrel_roll,evade',
            upgrades    : 'missile'
        },
        {
            shipId      : 7,
            shipType    : 'TIE-Bomber',
            attack      : 2,
            agility     : 2,
            hull        : 6,
            shields     : 0,
            shipCard    : 'tie-bomber',
            shipFaction : 'Galactic Empire',
            actions     : 'focus,target_lock,barrel_roll',
            upgrades    : 'missile,torpedo,bomb'
        },
        {
            shipId      : 8,
            shipType    : 'TIE-Fighter',
            attack      : 2,
            agility     : 3,
            hull        : 3,
            shields     : 0,
            shipCard    : 'tie-fighter',
            shipFaction : 'Galactic Empire',
            actions     : 'focus,barrel_roll,evade',
            upgrades    : ''
        },
        {
            shipId      : 9,
            shipType    : 'TIE-Interceptor',
            attack      : 3,
            agility     : 3,
            hull        : 3,
            shields     : 0,
            shipCard    : 'tie-interceptor',
            shipFaction : 'Galactic Empire',
            actions     : 'focus,barrel_roll,boost,evade',
            upgrades    : ''
        },
        {
            shipId      : 10,
            shipType    : 'Y-Wing',
            attack      : 2,
            agility     : 1,
            hull        : 5,
            shields     : 3,
            shipCard    : 'y-wing',
            shipFaction : 'Rebel Alliance',
            actions     : 'focus,target_lock',
            upgrades    : 'torpedo,turret'
        },
        {
            shipId      : 11,
            shipType    : 'YT-1300',
            attack      : 3,
            agility     : 1,
            hull        : 8,
            shields     : 5,
            shipCard    : 'yt-2100',
            shipFaction : 'Rebel Alliance',
            actions     : 'focus,target_lock',
            upgrades    : 'missile,crew_member,crew_member'
        }
    ],


    pilotData   : [
        {
            pilotId     : 10,
            pilotName   : 'Ten Numb',
            pilotText   : 'When attacking, 1 of your critical hit results cannot be canceled by defense dice. (Note: This ability only applies to dice, tokens/abilities etc. are not affected)',
            pilotSkill  : 8,

            shipId      : 1,
            faction     : 'Rebel Alliance',

            upgrades    : 'elite_talent',
            squadPoints : 31,

            cardImage   : 'pilot-ten-numb'
        },
        {
            pilotId     : 11,
            pilotName   : 'Ibtisam',
            pilotText   : 'When attacking or defending, if you have at least one stress token, you may reroll 1 of your dice.',
            pilotSkill  : 6,

            shipId      : 1,
            faction     : 'Rebel Alliance',

            upgrades    : 'elite_talent',
            squadPoints : 28,

            cardImage   : 'pilot-ibtisam'
        },
        {
            pilotId     : 20,
            pilotName   : 'Wedge Antilles',
            pilotText   : 'When attacking, reduce the defender\'s agility value by 1 (to a minimum of "0").',
            pilotSkill  : 9,

            shipId      : 2,
            faction     : 'Rebel Alliance',

            upgrades    : 'elite_talent',
            squadPoints : 29,

            cardImage   : 'pilot-wedge-antilles'
        },
        {
            pilotId     : 21,
            pilotName   : 'Luke Skywalker',
            pilotText   : 'When Defending, you may change 1 of your Focus results to an Evade result.',
            pilotSkill  : 8,

            shipId      : 2,
            faction     : 'Rebel Alliance',

            upgrades    : 'elite_talent',
            squadPoints : 28,

            cardImage   : 'pilot-luke-skywalker'
        },
        {
            pilotId     : 22,
            pilotName   : 'Garven Dreis',
            pilotText   : 'After spending a focus token, you may place that token on any other friendly ship at Range 1-2 (instead of discarding it).',
            pilotSkill  : 6,

            shipId      : 2,
            faction     : 'Rebel Alliance',

            upgrades    : '',
            squadPoints : 26,

            cardImage   : 'pilot-garven-dreis'
        },
        {
            pilotId     : 23,
            pilotName   : 'Biggs Darklighter',
            pilotText   : 'Other friendly ships at Range 1 cannot be targeted by attacks if the attacker could target you instead.',
            pilotSkill  : 5,

            shipId      : 2,
            faction     : 'Rebel Alliance',

            upgrades    : 'torpedo',
            squadPoints : 25,

            cardImage   : 'pilot-biggs-darklighter'
        },
        {
            pilotId     : 30,
            pilotName   : 'Tycho Celchu',
            pilotText   : 'You may perform actions even while you have stress tokens.',
            pilotSkill  : 8,

            shipId      : 3,
            faction     : 'Rebel Alliance',

            upgrades    : 'elite_talent,missiles,modification',
            squadPoints : 26,

            cardImage   : 'pilot-tycho-celchu'
        },
        {
            pilotId     : 31,
            pilotName   : 'Tycho Celchu',
            pilotText   : 'You may declare an enemy ship inside your firing arc that you are touching as the target of your attack.',
            pilotSkill  : 6,

            shipId      : 3,
            faction     : 'Rebel Alliance',

            upgrades    : 'missiles,modification',
            squadPoints : 23,

            cardImage   : 'pilot-arvel-crynyd'
        },
        {
            pilotId     : 32,
            pilotName   : 'Green Squadron Pilot',
            pilotText   : 'Conceived by General Dodonna, the RZ-1 A-wing interceptor proved its worth by crippling Star Destroyers during the Battle of Endor.',
            pilotSkill  : 3,

            shipId      : 3,
            faction     : 'Rebel Alliance',

            upgrades    : 'elite_talent,missiles,modification',
            squadPoints : 19,

            cardImage   : 'pilot-green-squadron'
        },
        {
            pilotId     : 33,
            pilotName   : 'Prototype Pilot',
            pilotText   : 'Due to its sensitive controls and high maneuverability, only the most talented pilots belong in an A-wing cockpit.',
            pilotSkill  : 1,

            shipId      : 3,
            faction     : 'Rebel Alliance',

            upgrades    : 'missiles,modification',
            squadPoints : 17,

            cardImage   : 'pilot-awing-prototype'
        },
        {
            pilotId     : 110,
            pilotName   : 'Han Solo',
            pilotText   : 'When attacking, you may reroll all of your dice. If you choose to do so, you must reroll as many of your dice as possible.',
            pilotSkill  : 9,

            shipId      : 11,
            faction     : 'Rebel Alliance',

            upgrades    : 'elite_talent,missile,crew_member,crew_member,modification',
            squadPoints : 46,

            cardImage   : 'pilot-han-solo'
        },
        {
            pilotId     : 111,
            pilotName   : 'Lando Calrissian',
            pilotText   : 'After you execute a green maneuver, choose 1 other friendly ship at Range 1. That ship may perform 1 free action shown in its action bar.',
            pilotSkill  : 7,

            shipId      : 11,
            faction     : 'Rebel Alliance',

            upgrades    : 'elite_talent,missile,crew_member,crew_member,modification',
            squadPoints : 44,

            cardImage   : 'pilot-lando'
        },
        {
            pilotId     : 112,
            pilotName   : 'Chewbacca',
            pilotText   : 'When you are dealt a faceup Damage card, immediately flip it facedown (without resolving its ability).',
            pilotSkill  : 5,

            shipId      : 11,
            faction     : 'Rebel Alliance',

            upgrades    : 'elite_talent,missile,crew_member,crew_member,modification',
            squadPoints : 42,

            cardImage   : 'pilot-chewbacca'

        }
    ],


    cardData    : [
        {
            cardType    : 'torpedo',
            cardName    : 'Proton Torpedoes',
            cardText    : '',
            cardImage   : 'torpedo-proton-torpedoes',
            squadPoints : 4
        },
        {
            cardType    : 'torpedo',
            cardName    : 'Advanced Proton Torpedoes',
            cardText    : '',
            cardImage   : 'torpedo-advanced-proton-torpedoes',
            squadPoints : 6
        }
    ]

});