/**
 * Model for a Ship
 *
 */
Ext.define('Miniatures.model.Ship', {
    extend      : 'Ext.data.Model',

    requires    : [],


    config      : {
        idProperty  : 'shipId',

        fields      : [
            {
                name    : 'shipId',
                type    : 'int',
                useNull : true,
            },
            {
                name    : 'shipType',
                type    : 'string'
            },
            {
                name    : 'shipCard',
                type    : 'string'
            },
            {
                name    : 'shipFaction',
                type    : 'string'
            },
            {
                name    : 'attack',
                type    : 'int'
            },
            {
                name    : 'agility',
                type    : 'int'
            },
            {
                name    : 'hull',
                type    : 'int'
            },
            {
                name    : 'shields',
                type    : 'int'
            },
            {
                name    : 'actions',
                type    : 'string'
            }
        ]
    }
});