module.exports = {
	rules: {
		// enforce spacing inside array brackets (fixable)
		'array-bracket-spacing': [ 2, 'always' ],
		// disallow or enforce spaces inside of single line blocks (fixable)
		'block-spacing': [ 2, 'always' ],
		// enforce one true brace style
		'brace-style': [ 2, 'stroustrup', { allowSingleLine: true } ],
		// require camel case names
		'camelcase': [ 2, { properties: 'always' } ],
		// enforce spacing before and after comma (fixable)
		'comma-spacing': [ 2, { before: false, after: true } ],
		// enforce one true comma style
		'comma-style': [ 2, 'last' ],
		// require or disallow padding inside computed properties (fixable)
		'computed-property-spacing': [ 2, 'never' ],
		// enforce consistent naming when capturing the current execution context
		'consistent-this': 0,
		// enforce newline at the end of file, with no multiple empty lines (fixable)
		'eol-last': 2,
		// require function expressions to have a name
		'func-names': 0,
		// enforce use of function declarations or expressions
		'func-style': [ 2, 'declaration', { allowArrowFunctions: true } ],
		// this option enforces minimum and maximum identifier lengths (variable names, property names etc.)
		'id-length': 0,
		// require identifiers to match the provided regular expression
		'id-match': 0,
		// specify tab or space width for your code (fixable)
		'indent': [ 2, 'tab' ],
		// specify whether double or single quotes should be used in JSX attributes
		'jsx-quotes': [ 2, 'prefer-double' ],
		// enforce spacing between keys and values in object literal properties
		'key-spacing': [ 2, { beforeColon: false, afterColon: true } ],
		// disallow mixed 'LF' and 'CRLF' as linebreaks
		'linebreak-style': 2,
		// enforce empty lines around comments
		'lines-around-comment': 0,
		// specify the maximum depth callbacks can be nested
		'max-nested-callbacks': 0,
		// require a capital letter for constructors
		'new-cap': [ 2, { newIsCap: true, capIsNew: false } ],
		// disallow the omission of parentheses when invoking a constructor with no arguments
		'new-parens': 2,
		// require or disallow an empty newline after variable declarations
		'newline-after-var': 0,
		// disallow use of the Array constructor
		'no-array-constructor': 0,
		// disallow use of the continue statement
		'no-continue': 0,
		// disallow comments inline after code
		'no-inline-comments': 0,
		// disallow if as the only statement in an else block
		'no-lonely-if': 2,
		// disallow mixed spaces and tabs for indentation (recommended)
		'no-mixed-spaces-and-tabs': [ 2, 'smart-tabs' ],
		// disallow multiple empty lines
		'no-multiple-empty-lines': [ 2, { max: 2 } ],
		// disallow negated conditions
		'no-negated-condition': 0,
		// disallow nested ternary expressions
		'no-nested-ternary': 2,
		// disallow the use of the Object constructor
		'no-new-object': 2,
		// disallow use of certain syntax in code
		'no-restricted-syntax': 0,
		// disallow space between function identifier and application (fixable)
		'no-spaced-func': 2,
		// disallow the use of ternary operators
		'no-ternary': 0,
		// disallow trailing whitespace at the end of lines (fixable)
		'no-trailing-spaces': 2,
		// disallow dangling underscores in identifiers
		'no-underscore-dangle': 0,
		// disallow the use of ternary operators when a simpler alternative exists
		'no-unneeded-ternary': 2,
		// require or disallow padding inside curly braces (fixable)
		'object-curly-spacing': [ 2, 'always' ],
		// require or disallow one variable declaration per function
		'one-var': [ 2, 'never' ],
		// require assignment operator shorthand where possible or prohibit it entirely
		'operator-assignment': 0,
		// enforce operators to be placed before or after line breaks
		'operator-linebreak': [ 2, 'after', { overrides: { '?': 'before' } } ],
		// enforce padding within blocks
		'padded-blocks': [ 2, 'never' ],
		// require quotes around object literal property names
		'quote-props': [ 2, 'consistent-as-needed' ],
		// specify whether backticks, double or single quotes should be used (fixable)
		'quotes': [ 2, 'single', 'avoid-escape' ],
		// Require JSDoc comment
		'require-jsdoc': 0,
		// enforce spacing before and after semicolons
		'semi-spacing': [ 2, { before: false, after: true } ],
		// require or disallow use of semicolons instead of ASI (fixable)
		'semi': [ 2, 'never' ],
		// sort variables within the same declaration block
		'sort-vars': 0,
		// require a space after certain keywords (fixable)
		'space-after-keywords': [ 2, 'always' ],
		// require or disallow a space before blocks (fixable)
		'space-before-blocks': 2,
		// require or disallow a space before function opening parenthesis (fixable)
		'space-before-function-paren': [ 2, 'always' ],
		// require a space before certain keywords (fixable)
		'space-before-keywords': 0,
		// require or disallow spaces inside parentheses
		'space-in-parens': [ 2, 'never' ],
		// require spaces around operators (fixable)
		'space-infix-ops': 2,
		// require a space after return, throw, and case (fixable)
		'space-return-throw-case': 2,
		// require or disallow spaces before/after unary operators (fixable)
		'space-unary-ops': [ 2, { words: true, nonwords: false } ],
		// require or disallow a space immediately following the // or /* in a comment
		'spaced-comment': [ 2, 'always' ],
		// require regex literals to be wrapped in parentheses
		'wrap-regex': 0,
	},
}
