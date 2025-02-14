package tree_sitter_sofia_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_sofia "github.com/tree-sitter/tree-sitter-sofia/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_sofia.Language())
	if language == nil {
		t.Errorf("Error loading Sofia grammar")
	}
}
