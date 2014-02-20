/**
 * Collection of {@link Miniatures.model.Upgrade} models
 */
Ext.define('Miniatures.store.Upgrades', {

    extend      : 'Ext.data.Store',

    requires    : [
        'Miniatures.model.Upgrade',
        'Miniatures.data.Miniatures'
    ],


    config      : {
        model   : 'Miniatures.model.Upgrade',
        data    : Miniatures.data.Miniatures.upgradeData
    }

});