module.exports = (function() {
    'use strict';
    var Backbone = require('backbone');

    return Backbone.Model.extend({
        defaults: {
            text: null,
            details: null
        },
        edit: function(data) {
            var text = String(data.text).trim(),
                details = String(data.details).trim();

            this.set({
                text: text,
                details: details
            });
        }
    });
}());