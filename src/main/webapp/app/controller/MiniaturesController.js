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

//        me.getPilotsStore();

        me.control({
            'squadview' : {
                itemtap   : me.onSquadViewItemTap
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
    }

});