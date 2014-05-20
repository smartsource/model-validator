
var should = require('should')
var validator = require('../index')

describe('Validating Objects', function () { 

  it('Should validate required fields', function (done) {
    
    var model = {
      lastName: null,
      email: ''
    }

    var rules = {
      firstName: {
        required: true
      },
      lastName: {
        required: true
      },
      email: {
        required: true
      }
    }

    var errors = validator.validate(model, rules)
    errors.should.have.lengthOf(3)

    done()
  })

})
