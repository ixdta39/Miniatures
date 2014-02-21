/**
 * Pilot Model
 */
Ext.define('Miniatures.model.Pilot', {

    extend      : 'Ext.data.Model',

    requires    : [
        'Miniatures.model.Upgrade',
        'Ext.data.association.HasMany'
    ],

    config      : {

        idProperty  : 'pilotId',

        fields      : [
            {
                name    : 'pilotId',
                type    : 'int',
                useNull : true
            },
            {
                name    : 'pilotSkill',
                type    : 'int'
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
                name    : 'squadPoints',
                type    : 'int'
            },
            {
                name    : 'upgrades',
                type    : 'string'
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
        ],


        associations    : [
            {
                type            : 'hasMany',
                name            : 'upgrades',
                ownerModel      : 'Miniatures.model.Pilot',
                associationKey  : 'pilotUpgrades',
                associatedModel : 'Miniatures.model.Upgrade'
            }
        ]
    }

});