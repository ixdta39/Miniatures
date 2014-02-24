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
            'Squads',
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
            'squadview button[name=showSquadSelection]': {
                tap : me.showSquadSelection
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


    showSquadSelection: function (button) {
        var me          = this,
            squads      = Ext.getStore('Squads'),
            squadView   = Ext.ComponentQuery.query('squadview')[0],
            squadSelect;

        squadSelect     = Ext.create('Ext.Panel', {
            name            : 'squadSelectionPanel',
            modal           : true,
            centered        : true,
            hideOnMaskTap   : true,
            defaults        : {
                handler     : Ext.bind(me.addPilotToSquad, me)
            },
            items           : [
                {
                    xtype       : 'button',
                    title       : 'New Rebel Squad',
                    squad       : Ext.create('Miniatures.model.Squad', {faction: 'Rebel Alliance'}),
                    iconCls     : 'rebel-20'
                },
                {
                    xtype       : 'button',
                    squad       : Ext.create('Miniatures.model.Squad', {faction: 'Galactic Empire'}),
                    iconCls     : 'imperial-20'
                },
                {
                    xtype       : 'button',
                    squad       : squadView.squad,
                    iconCls     : 'compose',
                    disabled    : !squadView.squad
                }
            ]
        });

//        squads.each({}, me);

        squadSelect.show();
    },


    addPilotToSquad: function (button) {
        if (!button || !button.squad) {
            return;
        }

        var me              = this,
            pilots          = Ext.getStore('Pilots'),
            squadView       = Ext.ComponentQuery.query('squadview')[0],
            pilotView,
            squadPanel      = button.up('panel[name=squadSelectionPanel]'),
            eligiblePilots;

        squadPanel.destroy();

        pilotView       = Ext.create('widget.pilotcardview', {
            modal           : true,
            centered        : true,

            hideOnMaskTap   : true
        });

        pilotView.show();

        squadView.setSquad(button.squad);
    }

});