/**
 * Home page for building a squadron
 *
 *
 * Users will have to:
 *  1) choose a squad size
 *  2) choose a faction
 *  3) Add a ship
 *  4) Select eligible Pilot
 *  5) Select possible upgrades
 */
Ext.define('Miniatures.view.SquadronListView', {
    extend      : 'Ext.Panel',
    alias       : 'widget.squadronlistview',

    requires    : [
        'Ext.form.Panel',

        'Ext.field.Number',
        'Ext.field.Select',

        'Ext.form.FieldSet'
    ],


    config      : {

        layout  : 'card',

        fullscreen  : true,
        items   : [
            {
                xtype   : 'fieldset',
                title   : 'Build Your Squad',
                instructions: 'Fill out the above to begin building your fleet',

                items   : [
                    {
                        xtype       : 'numberfield',
                        name        : 'squadronSize',
                        label       : 'Squad Size',
                        stepValue   : 10
                    },
                    {
                        xtype       : 'selectfield',
                        name        : 'factionSelection',
                        label       : 'Choose Your Faction',
                        options: [
                            {text: 'Rebel Alliance',  value: 'Rebel Alliance'},
                            {text: 'Galactic Empire', value: 'Galactic Empire'}
                        ]
                    }
                ]
            },
            {
                html    : 'Add Ships',
                fullscreen: true
            },
            {
                html    : 'Select Pilot'
            },
            {
                html    : 'Select Upgrades'
            }
        ]
    }

});