/**
 * Base model for defining a movement
 */
Ext.define('Miniatures.model.Movement', {
    extend      : 'Ext.data.Model',

    configs     : {
        fields  : [
            {
                name    : 'direction',
                type    : 'string'
            },
            {
                name    : 'speed',
                type    : 'int'
            },
            {
                name    : 'color',
                type    : 'string'
            }
        ]
    },

    causesStress: function () {
        return this.get('color') === 'RED';
    },

    removesStress: function () {
        return this.get('color') === 'GREEN';
    }
});