
var validationFunctions = require('./standard-validators');

var validateProperty = function(object, propertyName, rules) {

  for (ruleName in rules) {
    var validationFunction = validationFunctions[ruleName]

    if (typeof(validationFunction) !== 'function') {
      throw new Error('There is no validator function for ' + ruleName)
    }
    
    var propertyValue = object[propertyName]

    var ruleValue = rules[ruleName]

    if (ruleValue === false || ruleValue === null || ruleValue === undefined) {
      return
    }
    
    var errorMessage = validationFunction(propertyName, propertyValue, ruleValue)
    
    if (errorMessage) {
      return {
        property:propertyName, 
        error: errorMessage
      }
    }

  }

}

exports.validate = function(object, rules) {
  var errors = []
  
  for (propertyName in rules) {
    var propertyRules = rules[propertyName]

    var error = validateProperty(object, propertyName, propertyRules)
    if (error) {
      errors.push(error)
    }
  }
  return errors
}

exports.addValidator = function(name, fn) {
  validationFunctions[name] = fn
}

