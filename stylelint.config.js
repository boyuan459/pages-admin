module.exports = {
  processors: [
    'stylelint-processor-styled-components',
  ],
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-styled-components',
  ],
  plugins: [
    'stylelint-no-unsupported-browser-features',
  ],
  rules: {
    // to prevent the false postive situation
    // https://github.com/styled-components/stylelint-processor-styled-components/issues/215
    'no-descending-specificity': null,
    'property-no-vendor-prefix': [ true, { severity: 'warning' } ],
    'block-no-empty': [ true, { severity: 'warning' } ],
    'no-duplicate-selectors': [ true, { severity: 'warning' } ],
    'selector-type-no-unknown': [ true, { ignoreTypes: [ '$dummyValue', '/-styled-mixin/' ] } ],
    'value-no-vendor-prefix': [ true, { severity: 'warning' } ],
    'plugin/no-unsupported-browser-features': [ true, {
      severity: 'warning',
      // the following properties are partially supported by IE 11.
      // feel free to drop these properties once we drop IE 11 support.
      ignore: [ 'flexbox', 'calc', 'outline' ],
    } ],
  },
}
