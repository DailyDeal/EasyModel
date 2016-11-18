const EasyModel = (function() {
  const data = {};
  const rules = {};

  class EasyModel {
    constructor(definition) {
      Object.keys(definition).forEach((key) => data[key] = definition[key]);
    }

    static get Type() {
      return EasyType;
    }

    set definition(definition) {
      Object.keys(definition).forEach((prop) => {
        rules[prop] = definition[prop];
        Object.defineProperty(this, prop, {
          set: function (value) {
            data[prop] = value;
          },
          get: function () {
            return data[prop];
          }
        })
      });
    }
  }

  return EasyModel;
}());

// Usage example
// class User extends EasyModel {
//   definition = {
//      _id: EasyModel.Type.string.required,
//      age: EasyModel.Type.number
//   }
// }
//
// const me = new User({ _id: 'someId', age: 24 });
