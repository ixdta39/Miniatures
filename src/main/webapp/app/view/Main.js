Ext.define('Miniatures.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',

        'Ext.dataview.DataView',

        'Miniatures.view.SquadView',
        'Miniatures.view.ShipCardView',
        'Miniatures.view.PilotCardView'
    ],
    config: {
        fullscreen      : true,
        tabBarPosition: 'bottom',
//        tabBar  : {
//            hidden  : true
//        },

        items: [
            {
                title   : 'Squad',
                iconCls : 'home',

                items   : [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Squad Builder'
                    },
                    {
                        xtype       : 'squadview',
                        width       : '100%',
                        height      : '100%'
                    }
                ]
            }
        ]
    }
});
