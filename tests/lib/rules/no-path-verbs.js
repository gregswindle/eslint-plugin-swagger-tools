/**
 * @fileoverview prohibit use of verbs in api paths
 * @author Greg Swindle
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-path-verbs"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-path-verbs", rule, {

    valid: [{
        code: "var spec = {\"swagger\":\"2.0\",\"paths\":{\"/pets\":null}}"
    }],

    invalid: [
        {
            code: "var spec = {\"swagger\":\"2.0\",\"paths\":{\"/pets/{id}/findByStatus\":null}}",
            errors: [{
                message: "Best Practices: no verbs in API paths"
            }]
        }
    ]
});
