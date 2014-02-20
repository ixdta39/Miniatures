/**
 *
 */
Ext.define('Miniatures.view.SquadView', {

    extend      : 'Ext.Panel',
    alias       : 'widget.squadview',

    requires    : [],

    config      : {

        layout  : 'fit',

        items   : [
            {
                xtype       : 'title',
                docked      : 'top',
                items       : [
                    {
                        iconCls : 'add'
                    }
                ]
            },
            {
                xtype       : 'dataview',
                scrollable  : {
                    direction   : 'vertical'
                },

                emptyText   : '<div style="padding: 20px;">Add A New Squadron</div>',

                itemTpl     : '<div class="border-bottom-dotted"><div class="pilot-name margin-5">{pilotName} (<span></span>)</div><div class="margin-20">{pilotText}</div></div>',
                store       : 'Pilots'
            }
        ]

    }


});