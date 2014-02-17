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
            'Pilots'
        ]
    }

});