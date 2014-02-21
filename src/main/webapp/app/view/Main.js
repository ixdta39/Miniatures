Ext.define('Miniatures.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video',

        'Ext.dataview.DataView',

        'Miniatures.view.SquadView',
        'Miniatures.form.SquadForm',
        'Miniatures.view.ShipCardView',
        'Miniatures.view.PilotCardView'
    ],
    config: {
        tabBarPosition: 'bottom',
        tabBar  : {
            hidden  : true
        },

        items: [
            {
                title   : 'Squad',
                iconCls : 'home',
                items   : [
//                    {
//                        docked: 'top',
//                        xtype: 'titlebar',
//                        title: 'Squad Builder'
//                    },
                    {
//                        xtype       : 'squadform'
                        xtype       : 'squadview'
//                    },
//                    {
//                        xtype       : 'button',
//                        margin      : '20 10 0 250',
//                        ui          : 'action',
//                        disabled    : false,
//                        iconCls     : 'arrow_right'
                    }
                ]
            },
//            {
//                title   : 'Ships',
//                iconCls : 'ships-icon',
//
//                items   : [
//                    {
//                        xtype   : 'titlebar',
//                        docked  : 'top',
//                        title   : 'Ships'
//                    },
//                    {
//                        xtype   : 'shipcardview'
//                    }
//                ]
//            },
            {
                title   : 'Pilots',
                iconCls : 'pilots-icon',

                items   : [
                    {
                        xtype   : 'titlebar',
                        docked  : 'top',
                        title   : 'Pilots'
                    },
                    {
                        xtype   : 'pilotcardview'
                    }
                ]
//            },
//            {
//                title: 'Crew Members',
//                iconCls: 'crew-members-icon',
//
//                items   : [
//                    {
//                        xtype   : 'titlebar',
//                        docked  : 'top',
//                        title   : 'Crew Members'
//                    }
//                ],
//                html    : '<div class="pilot-card pilot-luke-skywalker"></div>'
            }
        ]
    }
});
