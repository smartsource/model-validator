
var validator = require('validator') // Does string validation for email, credit cards, etc
  
exports.required = function(propertyName, propertyValue, ruleValue) {
  if (!propertyValue) {
    return propertyName + " is required"
  }
}

exports.isDate = function(propertyName, propertyValue, ruleValue) {
  if (!validator.isDate(propertyValue)) {
    return "'" + propertyValue + "' is not a valid date"
  }
}

exports.isEmail = function(propertyName, propertyValue, ruleValue) {
  if(!validator.isEmail(propertyValue)) {
    return "'" + propertyValue + "' is not a valid email address"
  }
}

exports.min = function(propertyName, propertyValue, ruleValue) {
 if(!propertyValue || propertyValue < ruleValue) {
    return propertyName + " must have a minimum value of " + ruleValue
  }
}

exports.max = function(propertyName, propertyValue, ruleValue) {
  if(propertyValue > ruleValue) {
    return propertyName + " cannot exceed " + ruleValue
  }
}
