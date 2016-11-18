const Type = (function() {
  const settings = new WeakMap();

  class Type {
    constructor(type) {
      settings.set(this, {
        type,
        required: false
        // So on
      });
    }

    updateSettings(object) {
      settings.set(this, Object.assign({}, settings.get(this), object));
    }

    get required() {
      this.updateSettings({ required: true });
      return this;
    }

    _getTypeSettings() {
      return settings.get(this);
    }
  }

  class _String extends Type {
    constructor() {
      super('string');
    }
  }

  class _Number extends Type {
    constructor() {
      super('number');
    }
  }

  const types = {
    get custom(typeSettings) {
      return new Type(typeSettings);
    },
    get string() {
      return new _String()
    },
    get number() {
      return new _Number();
    }
  };

  return types;
}());
