let _ = require('lodash')

const mergecat = (target, source) => { // merge objects, concat arrays. based on https://gist.github.com/ahtcx/0cd94e62691f539160b32ecda18af3d6
  // Iterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties
  for (let key of Object.keys(source)) {
    if (source[key] instanceof Object) {
      if(source[key] instanceof Array) Object.assign(source[key],source[key].concat(target[key]))
      else Object.assign(source[key], mergecat(target[key], source[key]))
    }
  }
  // Join `target` and modified `source`
  Object.assign(target || {}, source)
  return target
}
module.exports = {
	viewportToPixel: function(val) {
		let percent = val.match(/[\d.]+/)[0] / 100
		let unit = val.match(/[vwh]+/)[0]
		return (unit == 'vh' ? window.innerHeight : window.innerWidth) * percent
	},
	mergecat: mergecat
}
