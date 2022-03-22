function insideFlex (decl) {
    return decl.parent.some(node => {
      return node.prop === 'display' && /(inline-)?flex/.test(node.value)
    })
  }
  
  // fix: https://github.com/mozilla/addons-frontend/issues/7312
  module.exports = function (opts) {
    return {
      postcssPlugin: 'postcss-flex-value',
      Once: function (css, postcss) {
        css.walkDecls(function (decl) {
          const { value, prop } = decl
  
          if (/^(align|justify|place)-(items|content)$/.test(prop) && insideFlex(decl)) {
            if (value === 'start' || value === 'end') {
              decl.value = `flex-${value}`
            }
          }
        })
      }
    }
  }
  
  module.exports.postcss = true
  