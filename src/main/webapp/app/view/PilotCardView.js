/**
 * {@link Ext.dataview.DataView} of {@link Miniatures.model.Pilot pilots}
 */
Ext.define('Miniatures.view.PilotCardView', {
    extend          : 'Ext.carousel.Carousel',
    alias           : 'widget.pilotcardview',


    config          : {
        defaults    : {
            styleHtmlContent    : true
        },
        width       : 335,
        height      : 443,
        centered    : true,
        fullscreen  : true,
        emptyText   : 'Nothing to see here'
    },

    initialize: function () {
        var me      = this,
            pilots  = Ext.getStore('Pilots');

        if (me.shipId) {
            pilots  = pilots.getPilotsByShipId(me.shipId);
        }

        if (pilots && pilots.getCount() > 0) {
            pilots.each(function (pilot) {
                me.add({
                    html    : Ext.String.format('<div class="pilot-card {0}" style="top: -5px;"></div>', pilot.get('cardImage'))
                });
            }, me);
        }

        me.callParent(arguments);
    }

});