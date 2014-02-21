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
            mainView    = Ext.ComponentQuery.query('tabpanel')[0];

        if (pilot && pilot.get('unique')) {
            newPilot    = pilot;
        } else {
            newPilot    = pilot.copy();
        }

        if (newPilot) {
            Ext.getStore('squad.Pilots').add(newPilot);
        }

        if (mainView) {
            mainView.setActiveItem(0);
        }
    }

});