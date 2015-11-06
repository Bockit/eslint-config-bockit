module.exports = {
    "parser": "babel-eslint",
    "plugins": [
        "react"
    ],
    "ecmaFeatures": {
        "jsx": true
    },
    "rules": {
        // Prevent missing displayName in a React component definition
        "display-name": 0,
        // Forbid certain propTypes
        "forbid-prop-types": 0,
        // Enforce boolean attributes notation in JSX
        "jsx-boolean-value": 0,
        // Validate closing bracket location in JSX
        "jsx-closing-bracket-location": 0,
        // Enforce or disallow spaces inside of curly braces in JSX attributes
        "jsx-curly-spacing": 0,
        // Validate props indentation in JSX
        "jsx-indent-props": 0,
        // Limit maximum of props on a single line in JSX
        "jsx-max-props-per-line": 0,
        // Prevent usage of .bind() and arrow functions in JSX props
        "jsx-no-bind": 0,
        // Prevent duplicate props in JSX
        "jsx-no-duplicate-props": 0,
        // Prevent usage of unwrapped JSX strings
        "jsx-no-literals": 0,
        // Disallow undeclared variables in JSX
        "jsx-no-undef": 0,
        // Enforce quote style for JSX attributes
        "jsx-quotes": 0,
        // Enforce propTypes declarations alphabetical sorting
        "jsx-sort-prop-types": 0,
        // Enforce props alphabetical sorting
        "jsx-sort-props": 0,
        // Prevent React to be incorrectly marked as unused
        "jsx-uses-react": 0,
        // Prevent variables used in JSX to be incorrectly marked as unused
        "jsx-uses-vars": 0,
        // Prevent usage of dangerous JSX properties
        "no-danger": 0,
        // Prevent usage of setState in componentDidMount
        "no-did-mount-set-state": 0,
        // Prevent usage of setState in componentDidUpdate
        "no-did-update-set-state": 0,
        // Prevent direct mutation of this.state
        "no-direct-mutation-state": 0,
        // Prevent multiple component definition per file
        "no-multi-comp": 0,
        // Prevent usage of setState
        "no-set-state": 0,
        // Prevent usage of unknown DOM property
        "no-unknown-property": 0,
        // Prefer es6 class instead of createClass for React Components
        "prefer-es6-class": 0,
        // Prevent missing props validation in a React component definition
        "prop-types": 0,
        // Prevent missing React when using JSX
        "react-in-jsx-scope": 0,
        // Restrict file extensions that may be required
        "require-extension": 0,
        // Prevent extra closing tags for components without children
        "self-closing-comp": 0,
        // Enforce component methods order
        "sort-comp": 0,
        // Prevent missing parentheses around multilines JSX
        "wrap-multilines": 0
    }
}