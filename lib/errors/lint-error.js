"use strict";

const { capitalize } = require("lodash");

class LintError extends Error {

    constructor(message, fileName, lineNumber) {
        super(message, fileName, lineNumber);
        this.name = "LintError";
    }

}

LintError.getContextMessage = (rule) => {
    return `${rule.meta.docs.category}: ${capitalize(rule.meta.docs.description)}.`;
};

module.exports = LintError;
