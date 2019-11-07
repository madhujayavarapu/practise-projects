const routes = {
  CALCULATOR_DEFAULT_LINK: ['', 'beginner', 'calculator'],
  CALCULATOR_DEMO_LINK: ['', 'beginner', 'calculator', 'demo'],
  CALCULATOR_DOCS_LINK: ['', 'beginner', 'calculator', 'docs'],
  BORDER_RADIUS_PREVIEWER_DEFAULT_LINK: ['', 'beginner', 'border-radius-previewer'],
  BORDER_RADIUS_PREVIEWER_DEMO_LINK: ['', 'beginner', 'border-radius-previewer', 'demo'],
  BORDER_RADIUS_PREVIEWER_DOCS_LINK: ['', 'beginner', 'border-radius-previewer', 'docs'],
  CAUSE_EFFECT_DEFAULT_LINK: ['', 'beginner', 'cause-effect'],
  CAUSE_EFFECT_DEMO_LINK: ['', 'beginner', 'cause-effect', 'demo'],
  CAUSE_EFFECT_DOCS_LINK: ['', 'beginner', 'cause-effect', 'docs'],

  COLOR_CYCLE_DEFAULT_LINK: ['', 'beginner', 'color-cycle'],
  COLOR_CYCLE_DEMO_LINK: ['', 'beginner', 'color-cycle', 'demo'],
  COLOR_CYCLE_DOCS_LINK: ['', 'beginner', 'color-cycle', 'docs'],

  COUNT_DOWN_TIMER_DEFAULT_LINK: ['', 'beginner', 'count-down-timer'],
  COUNT_DOWN_TIMER_DEMO_LINK: ['', 'beginner', 'count-down-timer', 'demo'],
  COUNT_DOWN_TIMER_DOCS_LINK: ['', 'beginner', 'count-down-timer', 'docs'],

  /** Dynamic CSS Variables Routing */
  DYNAMIC_CSS_VARIABLES_DEFAULT_LINK: ['', 'beginner', 'dynamic-css-variables'],
  DYNAMIC_CSS_VARIABLES_DEMO_LINK: ['', 'beginner', 'dynamic-css-variables', 'demo'],
  DYNAMIC_CSS_VARIABLES_DOCS_LINK: ['', 'beginner', 'dynamic-css-variables', 'docs'],

  /** Flip Image Routing */
  FLIP_IMAGE_DEFAULT_LINK: ['', 'beginner', 'flip-image'],
  FLIP_IMAGE_DEMO_LINK: ['', 'beginner', 'flip-image', 'demo'],
  FLIP_IMAGE_DOCS_LINK: ['', 'beginner', 'flip-image', 'docs']
}

const navOptions = {
  "beginner": [{
      "name": "Border Radius Previewer",
      "link": routes.BORDER_RADIUS_PREVIEWER_DEFAULT_LINK
    },
    {
      'name': "Calculator",
      "link": routes.CALCULATOR_DEFAULT_LINK
    },
    {
      'name': "Cause Effect",
      "link": routes.CAUSE_EFFECT_DEFAULT_LINK
    },
    {
      'name': 'Color Cycle',
      'link': routes.COLOR_CYCLE_DEFAULT_LINK
    },
    {
      "name": "Count Down Timer",
      "link": routes.COUNT_DOWN_TIMER_DEFAULT_LINK
    },
    {
      "name": "Dynamic CSS Variables",
      "link": routes.DYNAMIC_CSS_VARIABLES_DEFAULT_LINK
    },
    {
      "name": "Flip Image",
      "link": routes.FLIP_IMAGE_DEFAULT_LINK
    }
  ],
  "intermediate": [{
      "name": "Bit Masks",
      "link": ['', 'intermediate', 'bit-mask']
    },
    {
      "name": "Book Finder",
      "link": ['', 'intermediate', 'book-finder']
    },
    {
      'name': "Card Memory Game",
      "link": ['', 'intermediate', 'card-memory-game']
    }
  ]
}

const toastrOptions = {
  closeButton : true,
  timeOut : 3000,
  extendedTimeOut : 2000
}


export const PROJ_CONSTANTS = {
  NAV_OPTIONS: navOptions,
  ROUTES: routes,
  TOASTR_CNST: toastrOptions
}
