import fine_grained_password from '@erichsia7/pwdgen2/src/core/fine-grained-password';

const options_set = {
  font: {
    size: {
      interface: 'input',
      placeholder: 'points',
      data_type: 'number'
    },
    family: {
      interface: 'input',
      placeholder: 'name',
      data_type: 'string'
    },
    weight: {
      interface: 'input',
      placeholder: 'weight',
      data_type: 'number'
    }
  },
  background: {
    mode: {
      interface: 'select',
      options: ['auto', 'custom_auto', 'unsplash'],
      data_type: 'string'
    },
    advanced_configuration: {
      custom_auto: {
        light: {
          interface: 'input',
          data_type: 'string'
        },
        dark: {
          interface: 'input',
          data_type: 'string'
        },
        shift: {
          interface: 'shift',
          data_type: 'array'
        }
      },
      unsplash: {
        keyword: {
          interface: 'input',
          data_type: 'string'
        },
        api_key: {
          interface: 'input',
          data_type: 'string'
        }
      }
    }
  }
};

const default_options = {
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

function generateOptionsHTML(object: object) {
  var result = [];
  for (var key in object) {
    var this_obj = object[key];
    var name = key;
    var interface = this_obj['interface'] || '';
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
    if (interface === 'input') {
      tagName = 'input';
      innerHTML = '';
      attribute = {
        placeholder: this_obj['placeholder']
      };
    }
    if (interface === 'select') {
      tagName = 'select';
      innerHTML = generateSelectionOptionsHTML(this_obj['options']);
    }
    if (interface === 'shift') {
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

window.options = {
  options_set,
  default_options,
  generateOptionsHTML
};

export default window.options;
