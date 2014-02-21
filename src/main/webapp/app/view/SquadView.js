/**
 *
 */
Ext.define('Miniatures.view.SquadView', {

    extend      : 'Ext.dataview.DataView',
    alias       : 'widget.squadview',

    requires    : [],

    config      : {
        scrollable  : {
            direction   : 'vertical'
        },

        emptyText   : '<div style="padding: 20px;">Add A New Squadron</div>',

        selectedCls : '',

        itemTpl     : new Ext.XTemplate(
            '<div class="border-bottom-dotted">',
            '   <div class="pilot-name margin-5">{pilotName} (<span>{squadPoints}</span>)</div>',
            '   <tpl if="shipId">',
            '       <div class="stats-container">{[this.getShipAttributes(values)]}</div>',
            '   </tpl>',
            '   <div class="margin-20">{pilotText}</div>',
            '</div>',
            {
                getShipAttributes: function (pilotObject) {
                    var ship        = Ext.getStore('Ships').getById(pilotObject.shipId),
                        retValue    = '<div class="stats">';

                    retValue    += '<div class="pilot">' + pilotObject.pilotSkill + '</div>';
                    if (ship) {
                        retValue    += Ext.String.format('<div class="icon-stat stat-primary">{0}</div><div class="icon-stat stat-agility">{1}</div><div class="icon-stat stat-hull">{2}</div><div class="icon-stat stat-shields">{3}</div>', ship.get('attack'), ship.get('agility'), ship.get('hull'), ship.get('shields'));
                    }
                    retValue    += '</div>';

                    return retValue;
                }
            }
        ),
        store       : 'squad.Pilots',

        items       : [
            {
                xtype       : 'button',
                docked      : 'top',
                iconCls : 'add'
            }
        ]
    }
});