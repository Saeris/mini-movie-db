// Stylelint Configuration
// https://stylelint.io/user-guide/rules/

module.exports = {
  "plugins": [
    "stylelint-scss",
    "stylelint-order",
    "stylelint-no-unsupported-browser-features"
  ],
  "rules": {
    /*--- Possible Errors ---*/
    // Color
    "color-no-invalid-hex"                                : true,

    // Font Family
    "font-family-no-duplicate-names"                      : true,

    // Function
    "function-calc-no-unspaced-operator"                  : true,
    "function-linear-gradient-no-nonstandard-direction"   : true,

    // String
    "string-no-newline"                                   : true,

    // Unit
    "unit-no-unknown"                                     : true,

    // Shorthand Property
    "shorthand-property-no-redundant-values"              : true,

    // Property
    "property-no-unknown"                                 : true,

    // Keyframe Declaration
    "keyframe-declaration-no-important"                   : true,

    // Declaration Block
    "declaration-block-no-duplicate-properties"           : [true, { ignore: ["consecutive-duplicates-with-different-values"] }],
    "declaration-block-no-redundant-longhand-properties"  : true,
    "declaration-block-no-shorthand-property-overrides"   : true,

    // Block
    "block-no-empty"                                      : true,

    // Selector
    "selector-pseudo-class-no-unknown"                    : [true, { ignorePseudoClasses: ["global", "local"] }],
    "selector-pseudo-element-no-unknown"                  : true,
    "selector-type-no-unknown"                            : true,

    // Media Feature
    "media-feature-name-no-unknown"                       : true,

    // At-Rule

    // Comment
    "comment-no-empty"                                    : true,

    // General / Sheet
    "no-empty-source"                                     : true,
    "no-extra-semicolons"                                 : true,
    "no-invalid-double-slash-comments"                    : true,

    /*--- Limit Language Features ---*/
    // Color

    // Function

    // Number

    // Time

    // Unit

    // Value
    "value-no-vendor-prefix"                              : true,

    // Custom Property

    // Property
    "property-no-vendor-prefix"                           : true,

    // Declaration
    "declaration-no-important"                            : true,

    // Declaration Block
    "declaration-block-single-line-max-declarations"      : 5,

    // Selector
    "selector-max-empty-lines"                            : 0,

    // Media Feature

    // Custom Media

    // At-Rule

    // Comment

    /*--- Stylistic Issues ---*/
    // Color
    "color-hex-case"                                      : "lower",
    "color-hex-length"                                    : "short",

    // Font-Family

    // Font Weight
    "font-weight-notation"                                : "named-where-possible",

    // Function
    "function-comma-newline-after"                        : "always-multi-line",
    "function-comma-space-after"                          : "always-single-line",
    "function-comma-space-before"                         : "never",
    "function-max-empty-lines"                            : 0,
    "function-name-case"                                  : "lower",
    "function-parentheses-newline-inside"                 : "always-multi-line",
    "function-parentheses-space-inside"                   : "never-single-line",
    "function-whitespace-after"                           : "always",

    // Number
    "number-leading-zero"                                 : "always",
    "number-no-trailing-zeros"                            : true,

    // String
    "string-quotes"                                       : "double",

    // Length
    "length-zero-no-unit"                                 : true,

    // Unit
    "unit-case"                                           : "lower",

    // Value
    "value-keyword-case"                                  : "lower",

    // Value List
    "value-list-comma-newline-after"                      : "always-multi-line",
    "value-list-comma-space-after"                        : "always-single-line",
    "value-list-comma-space-before"                       : "never",
    "value-list-max-empty-lines"                          : 0,

    // Custom Property
    "custom-property-empty-line-before"                   : ["always", { except: ["after-custom-property", "first-nested"], ignore: ["after-comment", "inside-single-line-block"] }],

    // Property
    "property-case"                                       : "lower",

    // Declaration
    "declaration-bang-space-after"                        : "never",
    "declaration-bang-space-before"                       : "always",
    "declaration-colon-newline-after"                     : "always-multi-line",
    "declaration-colon-space-after"                       : "always-single-line",
    "declaration-colon-space-before"                      : "never",

    // Declaration Block
    "declaration-block-semicolon-newline-after"           : "always-multi-line",
    "declaration-block-semicolon-space-after"             : "always-single-line",
    "declaration-block-semicolon-space-before"            : "never",
    "declaration-block-trailing-semicolon"                : "always",

    // Block
    "block-closing-brace-empty-line-before"               : "never",
    "block-closing-brace-newline-after"                   : ["always", { "ignoreAtRules": [ "if", "else" ] }],
    "block-closing-brace-newline-before"                  : "always-multi-line",
    "block-closing-brace-space-before"                    : "always-single-line",
    "block-opening-brace-newline-after"                   : "always-multi-line",
    "block-opening-brace-space-after"                     : "always-single-line",
    "block-opening-brace-space-before"                    : "always",

    // Selector
    "selector-attribute-brackets-space-inside"            : "never",
    "selector-attribute-operator-space-after"             : "never",
    "selector-attribute-operator-space-before"            : "never",
    "selector-combinator-space-after"                     : "always",
    "selector-combinator-space-before"                    : "always",
    "selector-descendant-combinator-no-non-space"         : true,
    "selector-pseudo-class-case"                          : "lower",
    "selector-pseudo-class-parentheses-space-inside"      : "never",
    "selector-pseudo-element-case"                        : "lower",
    "selector-pseudo-element-colon-notation"              : "double",
    "selector-type-case"                                  : "lower",

    // Selector List
    "selector-list-comma-newline-after"                   : "always",
    "selector-list-comma-space-before"                    : "never",

    // Rule
    "rule-empty-line-before"                              : ["always-multi-line", { except: ["first-nested"], ignore: ["after-comment"] }],

    // Media Feaute
    "media-feature-colon-space-after"                     : "always",
    "media-feature-colon-space-before"                    : "never",
    "media-feature-name-case"                             : "lower",
    "media-feature-parentheses-space-inside"              : "never",
    "media-feature-range-operator-space-after"            : "always",
    "media-feature-range-operator-space-before"           : "always",

    // Media Query List
    "media-query-list-comma-newline-after"                : "always-multi-line",
    "media-query-list-comma-space-after"                  : "always-single-line",
    "media-query-list-comma-space-before"                 : "never",

    // At-Rule
    "at-rule-empty-line-before"                           : ["always", { except: ["blockless-after-same-name-blockless", "first-nested"], ignore: ["after-comment"], "ignoreAtRules": [ "else" ] }],
    "at-rule-name-case"                                   : "lower",
    "at-rule-name-space-after"                            : "always-single-line",
    "at-rule-semicolon-newline-after"                     : "always",

    // Comment
    "comment-empty-line-before"                           : ["always", { except: ["first-nested"], ignore: ["stylelint-commands"] }],
    "comment-whitespace-inside"                           : "always",

    // General / Sheet
    "indentation"                                         : 2,
    "max-empty-lines"                                     : 1,
    "no-eol-whitespace"                                   : true,
    "no-missing-end-of-source-newline"                    : true,

    /*--- Plugin Specific Rules ---*/
    // stylelint-scss
    // https://github.com/kristerkari/stylelint-scss

    // @else
    "scss/at-else-closing-brace-newline-after"            : "always-last-in-chain",
    "scss/at-else-closing-brace-space-after"              : "always-intermediate",
    "scss/at-else-empty-line-before"                      : "never",

    // @extend

    // @function
    "scss/at-function-parentheses-space-before"                : "never",

    // @if
    "scss/at-if-closing-brace-newline-after"              : "always-last-in-chain",
    "scss/at-if-closing-brace-space-after"                : "always-intermediate",

    // @import
    "scss/at-import-no-partial-leading-underscore"        : true,

    // @mixin
    "scss/at-mixin-argumentless-call-parentheses"         : "always",
    "scss/at-mixin-parentheses-space-before"              : "never",

    // At-Rule
    "scss/at-rule-no-unknown"                             : [true, { ignoreAtRules: ["import-normalize"] }],

    // $variable
    "scss/dollar-variable-colon-space-after"              : "always-single-line",
    "scss/dollar-variable-colon-space-before"             : "never",
    "scss/dollar-variable-empty-line-before"              : "never",

    // %placeholder

    // Comment

    // Declaration
    "scss/declaration-nested-properties"                  : ["always", { except: ["only-of-namespace"] }],

    // Media Feature

    // Operator
    "scss/operator-no-newline-after"                      : true,
    "scss/operator-no-newline-before"                     : true,
    "scss/operator-no-unspaced"                           : true,

    // Partial
    "scss/partial-no-import"                              : true,

    // Selector
    "scss/selector-no-redundant-nesting-selector"         : true,

    // stylelint-order
    // https://github.com/hudochenkov/stylelint-order
    "order/properties-order": [[
        // Positioning
      { properties: [
        'position',
        'top',
        'right',
        'bottom',
        'left',
        'z-index'
      ] },
      // Layout
      { properties: [
        'display',
        'flex',
        'flex-basis',
        'flex-direction',
        'flex-flow',
        'flex-grow',
        'flex-shrink',
        'flex-wrap',
        'align-content',
        'align-items',
        'align-self',
        'justify-content',
        'order',
        'float',
        'clear',
        'clip',
        'clip-path'
      ] },
      // Box Model
      { properties: [
        'width',
        'max-width',
        'min-width',
        'height',
        'max-height',
        'min-height',
        'padding',
        'padding-top',
        'padding-right',
        'padding-bottom',
        'padding-left',
        'margin',
        'margin-top',
        'margin-right',
        'margin-bottom',
        'margin-left',
        'margin-collapse',
        'margin-top-collapse',
        'margin-right-collapse',
        'margin-bottom-collapse',
        'margin-left-collapse',
        'border',
        'border-collapse',
        'border-top',
        'border-right',
        'border-bottom',
        'border-left',
        'border-color',
        'border-image',
        'border-top-color',
        'border-right-color',
        'border-bottom-color',
        'border-left-color',
        'border-spacing',
        'border-style',
        'border-top-style',
        'border-right-style',
        'border-bottom-style',
        'border-left-style',
        'border-width',
        'border-top-width',
        'border-right-width',
        'border-bottom-width',
        'border-left-width',
        'border-radius',
        'border-top-right-radius',
        'border-bottom-right-radius',
        'border-bottom-left-radius',
        'border-top-left-radius',
        'border-radius-topright',
        'border-radius-bottomright',
        'border-radius-bottomleft',
        'border-radius-topleft',
        'overflow',
        'overflow-x',
        'overflow-y',
        'box-align',
        'box-flex',
        'box-orient',
        'box-pack',
        'box-shadow',
        'box-sizing',
        'table-layout'
      ] },
      // Text
      { properties: [
        'font',
        'font-family',
        'font-size',
        'font-smoothing',
        'osx-font-smoothing',
        'font-style',
        'font-weight',
        'hyphens',
        'line-height',
        'letter-spacing',
        'word-spacing',
        'color',
        'text',
        'text-align',
        'text-decoration',
        'text-indent',
        'text-overflow',
        'text-rendering',
        'text-size-adjust',
        'text-shadow',
        'text-transform',
        'word-break',
        'word-wrap',
        'white-space',
        'vertical-align'
      ] },
      // Lists
      { properties: [
        'list-style',
        'list-style-type',
        'list-style-position',
        'list-style-image'
      ] },
      // Presentation
      { properties: [
        'background',
        'background-attachment',
        'background-color',
        'background-image',
        'background-position',
        'background-repeat',
        'background-size',
        'outline',
        'outline-color',
        'outline-offset',
        'outline-style',
        'outline-width',
        'opacity',
        'filter',
        'appearance',
        'visibility',
        'size',
        'resize',
        'zoom',
        'transform',
        'background-clip',
        'backface-visibility',
        'pointer-events',
        'cursor'
      ] },
      // Animation
      { properties: [
        'animation',
        'animation-delay',
        'animation-duration',
        'animation-iteration-count',
        'animation-name',
        'animation-play-state',
        'animation-timing-function',
        'animation-fill-mode',
        'transition',
        'transition-delay',
        'transition-duration',
        'transition-property',
        'transition-timing-function',
        'interpolation-mode',
        'direction'
      ] },
      // Misc
      { properties: [
        'content',
        'quotes',
        'user-select',
        'direction',
        'marks',
        'page',
        'set-link-source',
        'unicode-bidi',
        'speak'
      ] }
    ], { unspecified: "bottom" }],

    // stylelint-no-unsupported-browser-features
    // https://github.com/ismay/stylelint-no-unsupported-browser-features
    "plugin/no-unsupported-browser-features": [true, {
      "severity": "warning",
      "browsers": [
        '> 5%',
        'Last 2 versions',
        'not OperaMini all'
      ],
      "ignore": [
        'flexbox',
        'fontface',
        'font-unicode-range',
        'rem',
        'calc',
        'css-masks',
        'css-clip-path',
        'css-gradients',
        'css-textshadow',
        'viewport-units',
        'outline',
        'user-select-none'
      ]
    }]
  }
}
