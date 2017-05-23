"use strict";

const { expect } = require("chai");
const PathEvaluator = require("../../../lib/evaluators/path-evaluator");

describe("PathEvaluator provides common API path evaluations, e.g.,", () => {

    const pathEvaluator = new PathEvaluator();

    it("determines whether an ASTNode<Literal> is a path", () => {
        const mockAstLiteralNode = {
            key: {
                value: "/pets/{id}/findByBreed"
            }
        };
        expect(pathEvaluator.isPath(mockAstLiteralNode)).to.equal(true);

        mockAstLiteralNode.key.value = "paths";

        expect(pathEvaluator.isPath(mockAstLiteralNode)).to.equal(false);
    });

    it("determines whether a resource in an API is a parameter", () => {
        expect(pathEvaluator.isParameter("{id}")).to.equal(true);
        expect(pathEvaluator.isParameter("id")).to.equal(false);
    });

});
