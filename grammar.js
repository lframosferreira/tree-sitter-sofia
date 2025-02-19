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
    source_file: ($) => repeat(choice($._declaration, $._statement)),

    _declaration: ($) => choice($.function_declaration, $.variable_declaration),

    function_declaration: ($) =>
      seq("func", $._type, $._identifier, $._parameter_list, $._block),

    variable_declaration: ($) =>
      seq("let", $._type, $._identifier, "=", $._expression, ";"),

    _parameter_list: ($) =>
      seq("(", seq($._type, $._identifier), ")"),

    _type: (_) => choice("bool", "int", "float", "string", "list"),

    _block: ($) => seq("{", repeat($._statement), "}"),

    _statement: ($) => choice($._return_statement),

    _return_statement: ($) => seq("return", $._expression, ";"),

    _expression: ($) => choice($._identifier, $._literal),

    _identifier: (_) => /[a-zA-Z_][a-zA-Z0-9_]*/,

    _literal: ($) => choice(/\d+/, /\d+\.\d+/, alias("True", $.boolean), alias("False", $.boolean)),
  },
});
