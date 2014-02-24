/**
 * Collection of Squads
 */
Ext.define('Miniatures.store.Squads', {

    extend      : 'Ext.data.Store',

    requires    : [
        'Miniatures.model.Squad'
    ],


    config      : {
        model   : 'Miniatures.model.Squad'
    }

});