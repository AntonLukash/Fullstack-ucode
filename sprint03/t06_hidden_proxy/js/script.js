let validator = {
    get: function(target, prop, receiver) {
      console.log(`Trying to access the property '${prop}'...`);
      if (!(prop in target)) {
        return false;
      }
      return Reflect.get(target, prop, receiver);
    },
    set: function(target, prop, value, receiver) {
      
      if (prop === 'age') {
        if (typeof value !== 'number' || !Number.isInteger(value)) {
          throw new TypeError("The age is not an integer");
        }
        if (value < 0 || value > 200) {
          throw new RangeError("The age is invalid");
        }
      }
      console.log(`Setting value '${value}' to '${prop}'`);
      return Reflect.set(target, prop, value, receiver);
    }
  };

  