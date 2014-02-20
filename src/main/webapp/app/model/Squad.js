/**
 * Model for maintaining squads
 */
Ext.define('Miniatures.model.Squad', {

    extend      : 'Ext.data.Model',

    requires    : [
        'Ext.data.association.HasMany',

        'Miniatures.model.Pilot'
    ],

    config      : {

        fields          : [
            {
                name            : 'faction',
                type            : 'string'
            },
            {
                name            : 'squadPoints',
                type            : 'int',
                defaultValue    : 100
            }
        ],


        associations    : [
            {
                type            : 'hasMany',
                name            : 'pilots',
                ownerModel      : 'Miniatures.model.Squad',
                associatedModel : 'Miniatures.model.Pilot'
            }
        ]
    }

});