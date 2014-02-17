/**
 * {@link Ext.data.Store} of {@link Miniatures.model.Ship ship} models
 */
Ext.define('Miniatures.store.Ships', {
    extend      : 'Ext.data.Store',

    requires    : [
        'Miniatures.model.Ship',
        'Miniatures.data.Miniatures'
    ],

    config      : {
        model   : 'Miniatures.model.Ship',

        data    : Miniatures.data.Miniatures.shipData
    },


    /**
     *
     * @param {String} faction
     *
     * @return {Ext.util.MixedCollection}
     */
    getShipsByFaction: function (faction) {
        var me          = this,
            resultSet   = new Ext.util.MixedCollection();
        if (faction) {
            me.each(function (ship) {
                if (me.get('shipFaction') === faction) {
                    resultSet.add(ship);
                }
            }, me);
        }
        return resultSet;
    }
});