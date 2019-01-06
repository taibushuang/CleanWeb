
var register = function(Handlebars) {
  var helpers = {
    // put all of your helpers inside this object
    var: function(name, value, context){
      return this[name] = value;
    },
    section: function(name, options){
      if (!this._sections) this._sections = {};
      this._sections[name] = options.fn(this);
      return null;
    },
    loop: function(first, last, options) {
      var ret = '';

      for(var i=first; i<last; i++) {
        ret = ret + options.fn(i);
      }

      return ret;
    },
    selectImage:function(src, isMobile) {
      if (isMobile) {
        return src + "@!l";
      }

      return src + "@!xl";
    },
    pageSize:function(totalItems, itemsPerRow, maxRowsPerPage) {
      let rows = Math.min(maxRowsPerPage, Math.ceil(totalItems/itemsPerRow));
      return rows * itemsPerRow;
    },
    ifCond:function (v1, operator, v2, options) {

      switch (operator) {
        case '==':
          return (v1 == v2) ? options.fn(this) : options.inverse(this);
        case '===':
          return (v1 === v2) ? options.fn(this) : options.inverse(this);
        case '<':
          return (v1 < v2) ? options.fn(this) : options.inverse(this);
        case '<=':
          return (v1 <= v2) ? options.fn(this) : options.inverse(this);
        case '>':
          return (v1 > v2) ? options.fn(this) : options.inverse(this);
        case '>=':
          return (v1 >= v2) ? options.fn(this) : options.inverse(this);
        case '&&':
          return (v1 && v2) ? options.fn(this) : options.inverse(this);
        case '||':
          return (v1 || v2) ? options.fn(this) : options.inverse(this);
        default:
          return options.inverse(this);
      }
    }
  };

  if (Handlebars && typeof Handlebars.registerHelper === "function") {
    // register helpers
    for (var prop in helpers) {
      Handlebars.registerHelper(prop, helpers[prop]);
    }
  } else {
    // just return helpers object if we can't register helpers here
    return helpers;
  }

};

module.exports.register = register;
module.exports.helpers = register(null);
