import XCTest
import SwiftTreeSitter
import TreeSitterSofia

final class TreeSitterSofiaTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_sofia())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading Sofia grammar")
    }
}
