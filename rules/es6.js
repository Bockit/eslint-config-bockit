module.exports = {
    "env": {
        // We want to explicitly enable/disable es6 features
        "es6": false,
    },
    "ecmaFeatures": {
        // enable arrow functions
        "arrowFunctions": false,
        // enable binary literals
        "binaryLiterals": false,
        // enable let and const (aka block bindings)
        "blockBindings": false,
        // enable classes
        "classes": false,
        // enable default function parameters
        "defaultParams": false,
        // enable destructuring
        "destructuring": false,
        // enable for-of loops
        "forOf": false,
        // enable generators
        "generators": false,
        // enable modules and global strict mode
        "modules": false,
        // enable computed object literal property names
        "objectLiteralComputedProperties": false,
        // enable duplicate object literal properties in strict mode
        "objectLiteralDuplicateProperties": false,
        // enable object literal shorthand methods
        "objectLiteralShorthandMethods": false,
        // enable object literal shorthand properties
        "objectLiteralShorthandProperties": false,
        // enable octal literals
        "octalLiterals": false,
        // enable the regular expression u flag
        "regexUFlag": false,
        // enable the regular expression y flag
        "regexYFlag": false,
        // enable the rest parameters
        "restParams": false,
        // enable the spread operator for arrays
        "spread": false,
        // enable super references inside of functions
        "superInFunctions": false,
        // enable template strings
        "templateStrings": false,
        // enable code point escapes
        "unicodeCodePointEscapes": false,
        // allow return statements in the global scope
        "globalReturn": false,
        // enable JSX
        "jsx": false,
    },
    "rules": {
        // require braces in arrow function
        "arrow-body-style": [ 2, "as-needed" ],
        // require parens in arrow function arguments
        "arrow-parens": 2,
        // require space before/after arrow function's arrow
        "arrow-spacing": 2,
        // verify super() callings in constructors
        "constructor-super": 0,
        // enforce the spacing around the * in generator functions
        "generator-star-spacing": 2,
        // disallow arrow functions where a condition is expected
        "no-arrow-condition": 2,
        // disallow modifying variables of class declarations
        "no-class-assign": 2,
        // disallow modifying variables that are declared using const
        "no-const-assign": 2,
        // disallow duplicate name in class members
        "no-dupe-class-members": 2,
        // disallow to use this/super before super() calling in constructors.
        "no-this-before-super": 2,
        // require let or const instead of var
        "no-var": 0,
        // require method and property shorthand syntax for object literals
        "object-shorthand": 2,
        // suggest using arrow functions as callbacks
        "prefer-arrow-callback": 2,
        // suggest using of const declaration for variables that are never modified after declared
        "prefer-const": 2,
        // suggest using the spread operator instead of .apply()
        "prefer-spread": 2,
        // suggest using Reflect methods where applicable
        "prefer-reflect": 0,
        // suggest using template literals instead of strings concatenation
        "prefer-template": 2,
        // disallow generator functions that do not have yield
        "require-yield": 0,
    },
}