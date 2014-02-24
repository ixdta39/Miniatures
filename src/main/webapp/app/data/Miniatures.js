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
            shields     : 5,
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
            unique      : true,

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
            unique      : true,

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
            unique      : true,

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
            unique      : true,

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
            unique      : true,

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
            unique      : true,

            upgrades    : 'torpedo,astromech',
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
            unique      : true,

            upgrades    : 'elite_talent,missiles,modification',
            squadPoints : 26,

            cardImage   : 'pilot-tycho-celchu'
        },
        {
            pilotId     : 31,
            pilotName   : 'Arvel Crynyd',
            pilotText   : 'You may declare an enemy ship inside your firing arc that you are touching as the target of your attack.',
            pilotSkill  : 6,

            shipId      : 3,
            faction     : 'Rebel Alliance',
            unique      : true,

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
            unique      : true,

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
            unique      : true,

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
            unique      : true,

            upgrades    : 'elite_talent,missile,crew_member,crew_member,modification',
            squadPoints : 42,

            cardImage   : 'pilot-chewbacca'
        },
        {
            pilotId     : 50,
            pilotName   : 'Jan Ors',
            pilotText   : 'When another friendly ship at Range 1-3 is attacking, if you have no stress tokens, you may receive 1 stress token to allow that ship to roll 1 additional attack die.',
            pilotSkill  : 8,

            shipId      : 5,
            faction     : 'Rebel Alliance',
            foundIn     : 'HWK-290',
            unique      : true,

            upgrades    : 'elite_talent,turret,crew_member,title,modification',
            squadPoints : 25,

            cardImage   : 'pilot-jan-ors'
        },
        {
            pilotId     : 51,
            pilotName   : 'Kyle Katarn',
            pilotText   : 'At the start of the Combat phase, you may assign 1 of your focus tokens to another friendly ship at Range 1-3.',
            pilotSkill  : 6,

            shipId      : 5,
            faction     : 'Rebel Alliance',
            foundIn     : 'HWK-290',
            unique      : true,

            upgrades    : 'elite_talent,turret,crew_member,modification',
            squadPoints : 21,

            cardImage   : 'pilot-kyle-katarn'
        },
        {
            pilotId     : 52,
            pilotName   : 'Roark Garnet',
            pilotText   : 'At the start of the Combat phase, choose 1 other friendly ship at Range 1-3. Until the end of the phase, treat that ship\'s pilot skill value as "12".',
            pilotSkill  : 5,

            shipId      : 5,
            faction     : 'Rebel Alliance',
            foundIn     : 'HWK-290',
            unique      : true,

            upgrades    : 'turret,crew_member,title,modification',
            squadPoints : 19,

            cardImage   : 'pilot-roark-garnet'
        },
        {
            pilotId     : 53,
            pilotName   : 'Rebel Operative',
            pilotText   : 'Designed by Corellian Engineering Corporation to resemble a bird in flight, the “hawk” series excels in its role as a personal transport.',
            pilotSkill  : 2,

            shipId      : 5,
            faction     : 'Rebel Alliance',
            foundIn     : 'HWK-290',
            unique      : false,

            upgrades    : 'turret,crew_member,title,modification',
            squadPoints : 16,

            cardImage   : 'pilot-rebel-operative'
        }
    ],


    upgradeData     : [
        {
            upgradeId   : 1,
            upgradeName : 'Proton Torpedoes',
            upgradeText : 'Attack (target lock): Spend your target lock and discard this card to perform this attack. You may change 1 of your Focus results to a Critical Hit result.',
            upgradeType : 'torpedo',
            attack      : 4,
            range       : '2,3',
            cardImage   : 'torpedo-proton-torpedoes',
            squadPoints : 4
        },
        {
            upgradeId   : 2,
            upgradeName : 'Advanced Proton Torpedoes',
            upgradeText : 'Attack (target lock): Spend your target lock and discard this card to perform this attack. You may change up to 3 of your blank results to Focus results.',
            upgradeType : 'torpedo',
            attack      : 5,
            range       : '1',
            cardImage   : 'torpedo-advanced-proton-torpedoes',
            squadPoints : 6
        },
        {
            upgradeId   : 3,
            upgradeName : 'R2 Astromech',
            upgradeText : 'You may treat all 1- and 2-speed maneuvers as green maneuvers.',
            upgradeType : 'astromech',
            cardImage   : 'astromech-r2',
            squadPoints : 1
        },
        {
            upgradeId   : 4,
            upgradeName : 'R2-D2',
            upgradeText : 'After executing a green maneuver, you may recover 1 shield (up to your shield value).',
            upgradeType : 'astromech',
            cardImage   : 'astromech-r2-d2',
            unique      : true,
            squadPoints : 4
        },
        {
            upgradeId   : 5,
            upgradeName : 'R2-F2',
            upgradeText : 'Action: Increase your agility value by 1 until the end of this game round.',
            upgradeType : 'astromech',
            cardImage   : 'astromech-r2-f2',
            unique      : true,
            squadPoints : 3
        },
        {
            upgradeId   : 6,
            upgradeName : 'R5 Astromech',
            upgradeText : 'During the End phase, you may choose 1 of your faceup Damage cards with the Ship trait and flip it facedown.',
            upgradeType : 'astromech',
            cardImage   : 'astromech-r5',
            squadPoints : 1
        },
        {
            upgradeId   : 7,
            upgradeName : 'R5-D8',
            upgradeText : 'Action: Roll 1 defense die. On an Evade or Focus result, discard 1 of your facedown Damage cards.',
            upgradeType : 'astromech',
            cardImage   : 'astromech-r5-d8',
            squadPoints : 3
        },
        {
            upgradeId   : 8,
            upgradeName : 'R5-K6',
            upgradeText : 'After spending your target lock, roll 1 defense die. On an Evade result, immediately acquire a target lock on that same ship. You cannot spend this target lock during this attack.',
            upgradeType : 'astromech',
            cardImage   : 'astromech-r5-k6',
            squadPoints : 2
        },
        {
            upgradeId   : 9,
            upgradeName : 'Adrenaline Rush',
            upgradeText : 'When you reveal a red maneuver you may discard this card to treat that maneuver as a white maneuver until the end of the Activation phase.',
            upgradeType : 'elite_talent',
            cardImage   : 'elite-adrenaline-rush',
            squadPoints : 1
        },
        {
            upgradeId   : 10,
            upgradeName : 'Daredevil',
            upgradeText : 'Action: Execute a red (Left Turn 1) or (Right Turn 1) maneuver. Then, if you do not have the Boost action icon, roll 2 attack dice. Suffer any damage (Hit) and critical damage (Critical Hit) rolled.',
            upgradeType : 'elite_talent',
            cardImage   : 'elite-daredevil',
            squadPoints : 3
        },
        {
            upgradeId   : 11,
            upgradeName : 'Deadeye',
            upgradeText : 'You may treat the \'Attack (target lock):\' header as \'Attack (focus):\'. When an attack instructs you to spend a target lock, you may spend a focus token instead.',
            upgradeType : 'elite_talent',
            cardImage   : 'elite-deadeye',
            squadPoints : 1
        },
        {
            upgradeId   : 12,
            upgradeName : 'Determination',
            upgradeText : 'When you are dealt a faceup Damage card with the Pilot trait, discard it immediately without resolving its effect.',
            upgradeType : 'elite_talent',
            cardImage   : 'elite-determination',
            squadPoints : 1
        },
        {
            upgradeId   : 13,
            upgradeName : 'Draw Their Fire',
            upgradeText : 'When a friendly ship at Range 1 is hit by an attack, you may suffer 1 of the uncanceled Critical Hit results instead of the target ship.',
            upgradeType : 'elite_talent',
            cardImage   : 'elite-draw-their-fire',
            squadPoints : 1
        },
        {
            upgradeId   : 14,
            upgradeName : 'Elusiveness',
            upgradeText : 'When defending, you may receive 1 stress token to choose 1 attack die. The attacker must reroll that die. If you have at least 1 stress token, you cannot use this ability.',
            upgradeType : 'elite_talent',
            cardImage   : 'elite-elusiveness',
            squadPoints : 2
        },
        {
            upgradeId   : 15,
            upgradeName : 'Expert Handling',
            upgradeText : 'Action: Perform a free barrel roll action. If you do not have the Barrel Roll action icon, receive 1 stress token. You may then remove 1 enemy target lock from your ship.',
            upgradeType : 'elite_talent',
            cardImage   : 'elite-expert-handling',
            squadPoints : 2
        },
        {
            upgradeId   : 16,
            upgradeName : 'Expose',
            upgradeText : 'Action: Until the end of the round, increase your primary weapon value by 1 and decrease your agility value by 1.',
            upgradeType : 'elite_talent',
            cardImage   : 'elite-expose',
            squadPoints : 4
        },
        {
            upgradeId   : 17,
            upgradeName : 'Marksmanship',
            upgradeText : 'Action: When attacking this round, you may change 1 of your Focus results to a Critical Hit result and all your other Focus results to Hit results.',
            upgradeType : 'elite_talent',
            cardImage   : 'elite-marksmanship',
            squadPoints : 3
        },
        {
            upgradeId   : 18,
            upgradeName : 'Opportunist',
            upgradeText : 'When attacking if the defender does not have any Focus or Evade tokens you may receive 1 Stress token to roll 1 additional Attack die. You may not use this ability if you have any Stress tokens.',
            upgradeType : 'elite_talent',
            cardImage   : 'elite-opportunist',
            squadPoints : 4
        },
        {
            upgradeId   : 19,
            upgradeName : 'Push The Limit',
            upgradeText : 'Once per round, after you perform an action, you may perform 1 free action shown in your action bar. Then receive 1 stress token.',
            upgradeType : 'elite_talent',
            cardImage   : 'elite-push-the-limit',
            squadPoints : 3
        },
        {
            upgradeId   : 20,
            upgradeName : 'Squad Leader',
            upgradeText : 'Action: Choose 1 ship at Range 1-2 that has a lower pilot skill than you. The chosen ship may immediately perform 1 free action.',
            upgradeType : 'elite_talent',
            cardImage   : 'elite-squad-leader',
            unique      : true,
            squadPoints : 2
        },
        {
            upgradeId   : 21,
            upgradeName : 'Swarm Tactics',
            upgradeText : 'At the start of the Combat phase, choose 1 friendly ship at Range 1. Until the end of this phase, treat the chosen ship as if its pilot skill were equal to your pilot skill.',
            upgradeType : 'elite_talent',
            cardImage   : 'elite-swarm-tactics',
            squadPoints : 2
        },
        {
            upgradeId   : 22,
            upgradeName : 'Veteran Instincts',
            upgradeText : 'Increase your pilot skill value by 2.',
            upgradeType : 'elite_talent',
            cardImage   : 'elite-veteran-instincts',
            squadPoints : 1
        },
        {
            upgradeId   : 23,
            upgradeName : 'Assault Missiles',
            upgradeText : 'Attack (target lock): Spend your target lock and discard this card to perform this attack. If this attack hits, each other ship at Range 1 of the defender suffers 1 damage.',
            upgradeType : 'missile',
            attack      : 4,
            range       : '2,3',
            cardImage   : 'missile-assault-missiles',
            squadPoints : 5
        },
        {
            upgradeId   : 24,
            upgradeName : 'Cluster Missiles',
            upgradeText : 'Attack (target lock): Spend your target lock and discard this card to perform this attack twice.',
            upgradeType : 'missile',
            attack      : 3,
            range       : '1,2',
            cardImage   : 'missile-cluster-missiles',
            foundIn     : 'A-W,TIE-A',
            squadPoints : 4
        },
        {
            upgradeId   : 25,
            upgradeName : 'Concussion Missiles',
            upgradeText : 'Attack (target lock): Spend your target lock and discard this card to peform this attack. You may change 1 of your blank results to a Hit result.',
            upgradeType : 'missile',
            attack      : 4,
            range       : '2,3',
            cardImage   : 'missile-cluster-missiles',
            foundIn     : 'A-W,TIE-A,MILL-FAL',
            squadPoints : 4
        },
        {
            upgradeId   : 26,
            upgradeName : 'Homing Missiles',
            upgradeText : 'Attack (target lock): Discard this card to peform this attack. The defender cannot spend evade tokens during this attack.',
            upgradeType : 'missile',
            attack      : 4,
            range       : '2,3',
            cardImage   : 'missile-homing-missiles',
            foundIn     : 'A-W,SLV-1',
            squadPoints : 5
        },
        {
            upgradeId   : 27,
            upgradeName : 'Ion Pulse Missiles',
            upgradeText : 'Attack (target lock): Discard this card to peform this attack. If this attack hits, the defender suffers 1 damage and recieves 2 ion tokens. Then cancel all dice results.',
            upgradeType : 'missile',
            attack      : 3,
            range       : '2,3',
            cardImage   : 'missile-ion-pulse-missiles',
            foundIn     : 'Z-95,TIE-D',
            beta        : true,
            squadPoints : 3
        }
    ]

});