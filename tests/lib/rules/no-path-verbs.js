/**
 * @fileoverview prohibit use of verbs in api paths
 * @author Greg Swindle
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const { RuleTester } = require("eslint");
const rule = require("../../../lib/rules/no-path-verbs");
const ruleTester = new RuleTester();

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

ruleTester.run("no-path-verbs", rule, {

    valid: [{
        code: "var spec = {\"swagger\":\"2.0\",\"paths\":{\"/pets\":null}}"
    }, {
        code: "var spec = {\"swagger\":\"2.0\",\"paths\":{\"/users/{id}/sessions\":{\"get\":{\"operationId\":\"logoutUser\"}}}}"
    }],

    invalid: [
        {
            code: "var spec = {\"swagger\":\"2.0\",\"paths\":{\"/users/{id}/logout\":{\"get\":{\"operationId\":\"logoutUser\"}}}}",
            errors: [{
                message: "Best Practices: prohibit use of verbs in api paths."
            }]
        },
        {
            code: "var spec = {\"swagger\":\"2.0\",\"paths\":{\"/pets/addPet\":null}}",
            errors: [{
                message: "Best Practices: prohibit use of verbs in api paths."
            }]
        }
    ]
});
