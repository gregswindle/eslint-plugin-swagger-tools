/**
 * @fileoverview each API path should be unique
 * @author Greg Swindle
 */
"use strict";

const LintError = require("../errors/lint-error");
const PathEvaluator = require("../evaluators/path-evaluator");
const { filter, includes } = require("lodash");
//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "each API path should be unique",
            category: "Best Practices",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create(context) {

        // variables should be defined here
        const pathEvaluator = new PathEvaluator();
        const duplicatePaths = [];
        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        function replaceParamWithGeneric(node) {
            const path = pathEvaluator.getPathValue(node);
            const paramPtn = /(\{\w+\})/gi;
            return path.replace(paramPtn, "{X}");
        }

        function collectPaths(node) {
            if (pathEvaluator.isPath(node)) {
                const genericPath = replaceParamWithGeneric(node);
                duplicatePaths.push({
                    genericPath,
                    node,
                    path: pathEvaluator.getPathValue(node)
                });
            }
        }

        function isDuplicatePath(node) {
            const paths = filter(duplicatePaths, (comparatorObj) => {
                const genericPath = replaceParamWithGeneric(node);
                return includes(comparatorObj.genericPath, genericPath);
            });
            return paths.length > 1;
        }
        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {

            "Property[key.type=Literal]": (propertyNode) => {
                collectPaths(propertyNode);
            },

            "Property[key.type=Literal]:exit": (propertyNode) => {
                if (isDuplicatePath(propertyNode)) {
                    context.report({
                        node: propertyNode,
                        message: LintError.getContextMessage(this),
                        data: {
                            identifier: pathEvaluator.getPathValue(propertyNode)
                        }
                    });
                }
            }

        };
    }
};
