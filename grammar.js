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
    // TODO: add the actual grammar rules
    source_file: $ => "hello"
  }
});
