import fine_grained_password from '@erichsia7/pwdgen2/src/core/fine-grained-password';

var config_set = {
  font: {
    size: {
      user_interface: 'input',
      placeholder: 'points',
      data_type: 'number'
    },
    family: {
      user_interface: 'input',
      placeholder: 'name',
      data_type: 'string'
    },
    weight: {
      user_interface: 'input',
      placeholder: 'weight',
      data_type: 'number'
    }
  },
  background: {
    mode: {
      user_interface: 'select',
      config: ['auto', 'custom_auto', 'unsplash'],
      data_type: 'string'
    },
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

function generateSelectionConfigHTML(options: string[]) {
  return options.join(',');
}

function generateConfigHTML(object: object) {
  var result = [];
  for (var key in object) {
    var this_obj = object[key];
    var name = key;
    var user_interface = this_obj['user_interface'] || '';
    var tagName = '';
    var innerHTML = '';
    var attribute = {};
    var identity = fine_grained_password.generate(
      [
        {
          type: 'string',
          string: 'o_'
        },
        {
          type: 'regex',
          regex: '/[a-z0-9]/g',
          quantity: 16,
          repeat: true
        }
      ],
      'production'
    );
    if (user_interface === 'input') {
      tagName = 'input';
      innerHTML = '';
      attribute = {
        placeholder: this_obj['placeholder']
      };
    }
    if (user_interface === 'select') {
      tagName = 'select';
      innerHTML = generateSelectionConfigHTML(this_obj['config']);
    }
    if (user_interface === 'shift') {
      tagName = 'div';
      innerHTML = 'Unavailable';
    }
    var element = document.createElement(tagName);
    element.innerHTML = innerHTML;
    element.id = identity;
    for (var attr in attribute) {
      element.setAttribute(attr, attribute[attr]);
    }
    result.push(element.outerHTML);
  }
  return result.join('');
}

window.configuration = {
  config_set,
  default_config,
  generateConfigHTML
};

export default window.configuration;
