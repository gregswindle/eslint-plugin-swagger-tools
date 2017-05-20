"use strict";

const semanticValidations = require('./semantic-validations');
const { map, reduce, sortBy, truncate } = require("lodash");
const { bugs } = require("../../package");

function sortRulesByName (defs) {
    return sortBy(defs, ["name"]);
}

function createNewIssueLink(def) {
    const desc = truncate(`${def.description}`, 35);
    const title = escape(`feat(${def.name}): ${desc}`);
    const labels = [
        "ESLint: Rule",
        "Status: Review Needed",
        "Type: Feature"
    ];
    const qslabels = reduce(labels, (result, val) => {
        result = result + `&labels\[\]=${escape(val)}`;
        return result;
    }, "");
    return `[\`${def.name}\`](${bugs}/new?title=${title}${qslabels})`;
}

function defsToTableMd(defs) {
    const rules = sortRulesByName(defs);
    let trs = map(rules, (def) => {
        const link = createNewIssueLink(def);
        return `|  | ${link} | ${def.description} |`;
    });
    const header = [
      "| `options`        | Rule | Description|",
      "|:----------------:|:-----|:-----------|\n"
    ];
    return header.join("\n") + trs.join("\n");
}

const tableMd = defsToTableMd(semanticValidations);

console.log(
  tableMd
);
