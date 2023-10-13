import fine_grained_password from '@erichsia7/pwdgen2/src/core/fine-grained-password';
import utilities from '../core/utilities';
import clock2 from '../core/clock';
import options from './core/options'


var FontFaceObserver = require('fontfaceobserver');

window.lazyCSS = {
  loaded: {
    googleFontsNotoSans: false,
    googleFontsMaterialSymbols: false
  }
};

function loadCSS(url: string, identity: string) {
  if (!window.lazyCSS.loaded[identity]) {
    var link = document.createElement('link');
    link.setAttribute('href', url);
    link.setAttribute('rel', 'stylesheet');
    document.head.appendChild(link);
    window.lazyCSS.loaded[identity] = true;
  }
}

function loadFont(url: string, fontName: string, identity: string, loadedCallback: Function) {
  loadCSS(url, identity);
  if (typeof loadedCallback === 'function') {
    var font = new FontFaceObserver(fontName);
    font.load().then(function () {
      loadedCallback();
    });
  }
}

type showDisplay = 'none' | 'flex' | 'inline' | 'block' | 'inline-flex' | 'inline-block';
function show(element: HTMLElement, display: showDisplay, callback: Function | void) {
  var class_str = element.getAttribute('class');
  var style_str = element.getAttribute('style');
  element.setAttribute('class', class_str.replaceAll(/show-display-[a-z-]*[^\s]/gm, ''));
  element.setAttribute('style', String(style_str).replaceAll(/display[\s]*:{1,1}[\sa-z-]*;{1,1}[^\s]*/gm, ''));
  element.classList.add(`show-display-${display}`);
  if (typeof callback === 'function') {
    callback();
  }
}

function prompt_message(message, duration) {
  if (isNaN(duration)) {
    duration = 1200;
  }
  message = String(message);
  var all_prompt = utilities.qeAll('.prompt');
  if (!(all_prompt === null)) {
    var all_prompt_len = all_prompt.length;
    for (var e = 0; e < all_prompt_len; e++) {
      all_prompt[e].remove();
    }
  }
  var duration_base: number = 180;
  var translateY: number = -25;
  var prompt_id: string = fine_grained_password.generate(
    [
      {
        type: 'string',
        string: 'p_'
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
  var prompt_element = document.createElement('div');
  prompt_element.id = prompt_id;
  prompt_element.classList.add('prompt');
  prompt_element.classList.add('prompt_animation_' + prompt_id);
  var prompt_center_element = document.createElement('div');
  prompt_center_element.classList.add('prompt_content');
  prompt_center_element.innerText = message;
  prompt_element.appendChild(prompt_center_element);
  var prompt_css = `.prompt_animation_${prompt_id}{animation-timing-function:cubic-bezier(.21,.75,.1,.96);animation-name:prompt${prompt_id};animation-duration:${duration + duration_base * 2}ms;animation-fill-mode:forwards;animation-timing-function:ease-in-out}@keyframes prompt${prompt_id}{0%{opacity:0;transform:translateX(-50%) translateY(${translateY}px) scale(0.8);}${Math.floor((duration_base / (duration + duration_base + 150)) * 100)}%{opacity:1;transform:translateX(-50%) translateY(calc(${translateY}px)) scale(1);}${Math.floor(((duration_base + duration) / (duration + duration_base + 150)) * 100)}%{opacity:1;transform:translateX(-50%) translateY(calc(${translateY}px)) scale(1);}100%{opacity:0;transform:translateX(-50%) translateY(${translateY}px) scale(1);}}`;
  var prompt_css_element = document.createElement('style');
  prompt_css_element.innerHTML = prompt_css;
  prompt_element.appendChild(prompt_css_element);
  document.body.appendChild(prompt_element);
  document.getElementById(prompt_id).addEventListener(
    'animationend',
    function () {
      if (!(document.getElementById(prompt_id) === null)) {
        document.getElementById(prompt_id).remove();
      }
    },
    { once: true }
  );
}

function viewOnGithub() {
  window.open('https://github.com/EricHsia7/clock');
}

function refreshPage(event) {
  if (navigator.onLine) {
    var p = [
      {
        type: 'regex',
        regex: '/[a-zA-Z0-9]/g',
        quantity: 16,
        repeat: true
      }
    ];

    // Get the current URL and parse parameters
    var url = new URL(window.location.href);
    var searchParams = new URLSearchParams(url.search);

    // Add parameter
    searchParams.set('v', fine_grained_password.generate(p, 'production'));

    // Update the URL with the modified parameters
    url.search = searchParams.toString();

    location.replace(url);
  } else {
    const offline_message: string = 'You’re offline, and updates are unavailable.';
    interaction.prompt.prompt_message(offline_message, 3000);
    interaction.options.closeOptions(event);
  }
}

function updateTime() {
  var text = clock2.getCurrentTime()
  utilities.qe('.clock .time').innerText = text
  window.requestAnimationFrame(updateTime)
}

window.interaction = {
  prompt: {
    prompt_message
  },
  show,
  loadCSS,
  loadFont,
  options: {
    viewOnGithub,
    refreshPage
  },
  clock:{
    updateTime
  }
};

export default window.interaction;
