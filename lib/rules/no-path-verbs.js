/**
 * @fileoverview prohibit use of verbs in api paths
 * @author Greg Swindle
 */
"use strict";

const PathEvaluator = require("../evaluators/path-evaluator");
const { drop, some, startsWith } = require("lodash");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "prohibit use of verbs in api paths",
            category: "Best Practices",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: []
    },

    create(context) {

        // variables should be defined here
        const pathEvaluator = new PathEvaluator();

        const verbPrefixes = [
            "create",
            "delete",
            "find",
            "get",
            "remove"
        ];
        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        /**
         * Determine wether a resource's value is a verb
         * @private
         * @param {string} resource A resource within an API path
         *
         * @returns {boolean} `true` if a verb; otherwise, `false`
         */
        function isVerb(resource) {
            if (pathEvaluator.isParameter(resource)) {
                return false;
            }
            return some(verbPrefixes, (verb) => {
                return startsWith(resource, verb);
            });
        }

        /**
         * Determines whether any resources within an API path are verbs
         * @private
         * @param {ASTNode} node A "paths" property of a Swagger specification
         *
         * @returns {void}
         */
        function validatePathResources(node) {
            if (pathEvaluator.isPath(node)) {
                const path = node.key.value;
                const resources = drop(path.split("/"));
                if (some(resources, isVerb)) {
                    context.report({
                        node,
                        message: "Best Practices: no verbs in API paths",
                        data: {
                            resources,
                            identifier: path
                        }
                    });
                }
            }
        }

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {

            "Property[key.type=Literal]:exit": (propertyNode) => {
                validatePathResources(propertyNode);
            }

        };
    }
};
