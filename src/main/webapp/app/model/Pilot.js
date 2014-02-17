/**
 * Pilot Model
 */
Ext.define('Miniatures.model.Pilot', {

    extend      : 'Ext.data.Model',

    requires    : [],

    config      : {

        idProperty  : 'pilotId',

        fields      : [
            {
                name    : 'pilotId',
                type    : 'int',
                useNull : true
            },
            {
                name    : 'pilotName',
                type    : 'string'
            },
            {
                name    : 'pilotText',
                type    : 'text'
            },
            {
                name    : 'shipId',
                type    : 'int'
            },
            {
                name    : 'faction',
                type    : 'string'
            },
            {
                name    : 'upgrades',
                type    : 'string'
            },
            {
                name    : 'cardImage',
                type    : 'string'
            }
        ]


    }

});