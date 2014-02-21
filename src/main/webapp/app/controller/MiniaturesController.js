/**
 * Base controller for Miniatures app
 */
Ext.define('Miniatures.controller.MiniaturesController', {

    extend  : 'Ext.app.Controller',

    requires    : [
        'Miniatures.data.Miniatures'
    ],

    config      : {
        stores      : [
            'Ships',
            'Pilots',
            'Upgrades'
        ]
    },


    init        : function () {
        var me  = this;

        Ext.create('Miniatures.store.Pilots', {
            storeId : 'squad.Pilots'
        });

        Ext.getStore('Pilots').add(Miniatures.data.Miniatures.pilotData);

        me.control({
            'squadview' : {
                itemtap     : me.onSquadViewItemTap
            },
            'squadview button[name=addShips]': {
                tap : me.switchToPilotCardView
            }
        });
    },


    onSquadViewItemTap: function (squadView, index, target, pilot) {
        console.log('Pilot ' + pilot.get('pilotName') + ' has been tapped...');
        pilotWindow = Ext.create('Ext.Panel', {
            modal       : true,
            centered    : true,
            floating    : true,
            html        : Ext.String.format('<div class="pilot-card {0}"></div>', pilot.get('cardImage')),

            hideOnMaskTap   : true
        });
        pilotWindow.show();
    },


    switchToPilotCardView: function () {
        var main = Ext.ComponentQuery.query('tabpanel')[0];

        if (main) {
            main.setActiveItem(1);
        }
    }

});