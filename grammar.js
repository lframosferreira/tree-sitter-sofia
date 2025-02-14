/**
 * @file Parser for the Sofia programming language
 * @author Luís Felipe Ramos Ferreira <lframos.lf@gmail.com>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "sofia",

  rules: {
    source_file: ($) => repeat($._declaration),

    _declaration: ($) => choice($.function_declaration, $.variable_declaration),

    function_declaration: ($) =>
      seq("func", $._type, $.identifier, $.parameter_list, $.block),

    variable_declaration: ($) =>
      seq("let", $._type, $.identifier, "=", $._expression, ";"),

    parameter_list: ($) =>
      seq(
        "(",
        // TODO: parameters
        ")",
      ),

    _type: ($) => choice("bool", "int", "float", "string", "list"),

    block: ($) => seq("{", repeat($._statement), "}"),

    _statement: ($) => choice($.return_statement),

    return_statement: ($) => seq("return", $._expression, ";"),

    _expression: ($) => choice($.identifier, $.literal),

    identifier: ($) => /[a-zA-Z_][a-zA-Z0-9_]*/,

    literal: ($) => choice(/\d+/, /\d+\.\d+/, "True", "False"),
  },
});
