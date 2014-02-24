/**
 * {@link Ext.app.Controller} responsible for managing Pilot based actions
 */
Ext.define('Miniatures.controller.PilotController', {

    extend      : 'Miniatures.controller.MiniaturesController',

    requires    : [
        'Miniatures.data.Miniatures'
    ],

    init: function () {
        var me      = this;

        me.control({

            'pilotcardview dataview': {
                itemtap : me.onAddPilotRequest
            }

        });
    },


    onAddPilotRequest: function (dataView, index, target, pilot) {
        var me          = this,
            newPilot,
            pilotView   = dataView.up('pilotcardview');

//        if (pilot && pilot.get('unique')) {
//            newPilot    = pilot;
//            Ext.getStore('Pilots').remove(pilot);
//        } else {
            newPilot    = pilot.copy();
//        }

        if (newPilot) {
            Ext.getStore('squad.Pilots').add(newPilot);
        }

        if (pilotView && pilotView.config.modal) {
            pilotView.destroy();
        }
    }

});