/**
 * Collection of {@link Miniatures.model.Pilot pilot} models
 */
Ext.define('Miniatures.store.Pilots', {

    extend      : 'Ext.data.Store',


    requires    : [
        'Miniatures.model.Pilot'
    ],

    config      : {

        model   : 'Miniatures.model.Pilot'

//        data    : Miniatures.data.Miniatures.pilotData
    },


    getPilotsByShipId: function (shipId) {
        var me          = this,
            retValue    = new Ext.util.MixedCollection();

        if (shipId) {
            me.each(function (pilot) {
                if (pilot.get('shipId') === shipId) {
                    retValue.add(pilot);
                }
            }, me);
        }

        return retValue;
    }
});