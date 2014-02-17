/**
 *
 */
Ext.define('Miniatures.view.ShipCardView', {
    extend      : 'Ext.carousel.Carousel',
    alias       : 'widget.shipcardview',

    requires    : [],

    config      : {
        defaults    : {
            styleHtmlContent    : true
        },
        width       : 330,
        height      : 425,
        centered    : true,
        fullscreen  : true
    },

    initialize  : function () {
        var me      = this,
            ships   = Ext.getStore('Ships');

        ships.each(function (ship) {
            me.add({
                html    : Ext.String.format('<div class="ship-card {0}"></div>', ship.get('shipCard'))
            });
        }, me);

        me.callParent(arguments);
    },


    onShow      : function (faction) {

        var me      = this,
            ships   = Ext.getStore('Ships');

        if (me.shipFaction) {
            ships   = ships.getShipsByFaction(me.shipFaction);
        }

        me.suspendEvents();
        me.removeAll();
        me.resumeEvents(true);

        ships.each(function (ship) {
            me.add({
                html    : Ext.String.format('<div class="ship-card {0}"></div>', ship.get('shipCard'))
            });
        }, me);
    }
});