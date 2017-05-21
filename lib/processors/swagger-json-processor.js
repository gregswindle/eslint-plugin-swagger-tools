"use strict";

module.exports = {
    ".json": {
        preprocess: function(text) {
            return [JSON.stringify(text)];
        }
    }
};
