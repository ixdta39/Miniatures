/**
 *
 */
Ext.define('Miniatures.form.SquadForm', {

    extend  : 'Ext.form.FieldSet',
    alias       : 'widget.squadform',

    requires    : [
        'Ext.field.Number',
        'Ext.field.Select'
    ],

    config      : {
        title   : 'Build Your Squad',
        instructions: 'Fill out the above to begin building your fleet',

        defaults    : {
            labelWidth  : '40%'
        },

        items   : [
            {
                xtype       : 'numberfield',
                name        : 'squadronSize',
                label       : 'Squad Size',
                required    : true,
                stepValue   : 10
            },
            {
                xtype       : 'selectfield',
                name        : 'factionSelection',
                label       : 'Faction',
                required    : true,
                options     : [
                    {text: 'Rebel Alliance',  value: 'Rebel Alliance'},
                    {text: 'Galactic Empire', value: 'Galactic Empire'}
                ]
            }
        ]
    }


});