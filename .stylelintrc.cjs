module.exports = {
  root: true,
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-config-prettier',
    'stylelint-config-html/vue'
  ],
  defaultSeverity: 'warning',
  plugins: ['stylelint-order'],
  rules: {
    'no-empty-source': null,
    'selector-class-pattern': null
  },
  overrides: [
    {
      files: ['*.vue', '**/*.vue'],
      rules: {
        'selector-pseudo-class-no-unknown': [
          true,
          {
            ignorePseudoClasses: ['deep', 'global']
          }
        ],
        'selector-pseudo-element-no-unknown': [
          true,
          {
            ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted']
          }
        ]
      }
    }
  ]
}