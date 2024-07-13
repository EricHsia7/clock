var md5 = require('md5');

var config_set = {
  font_size: {
    user_interface: 'input',
    placeholder: 'points',
    data_type: 'number'
  },
  font_family: {
    user_interface: 'input',
    placeholder: 'name',
    data_type: 'string'
  },
  font_weight: {
    user_interface: 'input',
    placeholder: 'weight',
    data_type: 'number'
  },
  background_mode: {
    user_interface: 'select',
    options: ['auto', 'custom_auto', 'unsplash'],
    data_type: 'string',
    advanced_configuration: {
      custom_auto: {
        light: {
          user_interface: 'input',
          data_type: 'string'
        },
        dark: {
          user_interface: 'input',
          data_type: 'string'
        },
        shift: {
          user_interface: 'shift',
          data_type: 'array'
        }
      },
      unsplash: {
        keyword: {
          user_interface: 'input',
          data_type: 'string'
        },
        api_key: {
          user_interface: 'input',
          data_type: 'string'
        }
      }
    }
  }
};

var default_config = {
  font: {
    size: 'auto',
    family: 'Noto Sans',
    weight: '300'
  },
  background: {
    mode: 'auto',
    advanced_configuration: {
      custom_auto: {
        light: {
          type: 'color',
          color: '#ffffff'
        },
        dark: {
          type: 'color',
          color: '#000000'
        },
        shift: [0, 12]
      },
      unsplash: {
        keyword: 'nature',
        api_key: null
      }
    }
  }
};

function generateSelectionConfigHTML(options: string[]): string {
  return options.join(',');
}

function generateConfigHTML(object: object): string {
  var result = [];
  for (var key in object) {
    var this_obj = object[key];
    var name = key;
    var user_interface = this_obj['user_interface'] || '';
    var tagName = 'div';
    var innerHTML = '';
    var attribute = {};
    var identifier = md5(Math.random() * new Date().getTime());
    if (user_interface === 'input') {
      tagName = 'input';
      innerHTML = '';
      attribute = {
        placeholder: this_obj['placeholder']
      };
    }
    if (user_interface === 'select') {
      tagName = 'select';
      innerHTML = configuration.generateSelectionConfigHTML(this_obj['options']);
    }
    if (user_interface === 'shift') {
      tagName = 'div';
      innerHTML = 'Unavailable';
    }
    var element = document.createElement(tagName);
    element.innerHTML = innerHTML;
    element.id = identifier;
    for (var attr in attribute) {
      if (attribute.hasOwnProperty(attr)) {
        if (typeof attribute[attr] === 'string') {
          element.setAttribute(attr, attribute[attr]);
        }
      }
    }
    result.push(element.outerHTML);
  }
  return result.join('');
}

function open(): void {
  var html: string = generateConfigHTML(configuration.config_set);
  var configElement: HTMLElement = document.querySelector('.css_clock .css_config');
  configElement.innerHTML = html;
}

window.configuration = {
  config_set,
  default_config,
  generateConfigHTML,
  generateSelectionConfigHTML,
  open
};

export default window.configuration;
