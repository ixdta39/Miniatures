/**
 * Base model for an upgrade card
 */
Ext.define('Miniatures.model.Upgrade', {

    extend      : 'Ext.data.Model',
    requires    : [],


    config      : {
        idProperty  : 'upgradeId',

        fields      : [
            {
                name    : 'upgradeId',
                type    : 'int',
                useNull : true
            },
            {
                name    : 'upgradeName',
                type    : 'string'
            },
            {
                name    : 'upgradeText',
                type    : 'string'
            },
            {
                name    : 'upgradeType',
                type    : 'string'
            },
            {
                name    : 'squadPoints',
                type    : 'int'
            },
            {
                name    : 'cardImage',
                type    : 'string'
            },
            {
                name    : 'faction',
                type    : 'string'
            },
            {
                name    : 'unique',
                type    : 'boolean'
            },
            {
                name    : 'foundIn',
                type    : 'string'
            },
            {
                name    : 'beta',
                type    : 'boolean'
            }
        ]
    }

});