"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('costs/adapters/application', ['exports', 'ember-local-storage/adapters/local'], function (exports, _emberLocalStorageAdaptersLocal) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLocalStorageAdaptersLocal['default'];
    }
  });
});
define('costs/app', ['exports', 'ember', 'costs/resolver', 'ember-load-initializers', 'costs/config/environment'], function (exports, _ember, _costsResolver, _emberLoadInitializers, _costsConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _costsConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _costsConfigEnvironment['default'].podModulePrefix,
    Resolver: _costsResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _costsConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('costs/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'costs/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _costsConfigEnvironment) {

  var name = _costsConfigEnvironment['default'].APP.name;
  var version = _costsConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('costs/components/date-panel-button/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'button',
    classNames: ['ui', 'button'],
    classNameBindings: ['active'],
    init: function init() {
      this._super.apply(this, arguments);
      this.set('active', this.get('button.type') === this.get('type'));
    },
    active: false,
    click: function click() {
      this.sendAction('setActiveType', this.get('button.type'));
      this.set('active', this.get('button.type') === this.get('type'));
    }

  });
});
define("costs/components/date-panel-button/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "costs/components/date-panel-button/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "button.name", ["loc", [null, [1, 0], [1, 15]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('costs/components/ember-chart', ['exports', 'ember-cli-chart/components/ember-chart'], function (exports, _emberCliChartComponentsEmberChart) {
  exports['default'] = _emberCliChartComponentsEmberChart['default'];
});
define('costs/components/parents-string/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    parents: [],
    getParents: (function () {
      var category = this.get('category'),
          categories = [];
      while (category.get('parent')) {
        categories.unshift(category);
        if (category.get('id') === this.get('lastId')) {
          break;
        }
        category = category.get('parent');
      }

      this.set('parents', categories);
    }).observes('category').on('init')
  });
});
define("costs/components/parents-string/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.2",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 44
              },
              "end": {
                "line": 2,
                "column": 113
              }
            },
            "moduleName": "costs/components/parents-string/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["content", "category.name", ["loc", [null, [2, 96], [2, 113]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["multiple-nodes", "wrong-type"]
          },
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "costs/components/parents-string/template.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("i");
          dom.setAttribute(el1, "class", "right chevron icon divider");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
          return morphs;
        },
        statements: [["block", "link-to", ["category", ["get", "category.id", ["loc", [null, [2, 67], [2, 78]]]]], ["class", "section"], 0, null, ["loc", [null, [2, 44], [2, 125]]]]],
        locals: ["category"],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "costs/components/parents-string/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "each", [["get", "parents", ["loc", [null, [1, 8], [1, 15]]]]], [], 0, null, ["loc", [null, [1, 0], [3, 9]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('costs/components/ui-accordion-section', ['exports', 'ember-cli-semantic-ui/components/ui-accordion-section'], function (exports, _emberCliSemanticUiComponentsUiAccordionSection) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliSemanticUiComponentsUiAccordionSection['default'];
    }
  });
});
define('costs/components/ui-accordion', ['exports', 'ember-cli-semantic-ui/components/ui-accordion'], function (exports, _emberCliSemanticUiComponentsUiAccordion) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliSemanticUiComponentsUiAccordion['default'];
    }
  });
});
define('costs/components/ui-checkbox', ['exports', 'ember-cli-semantic-ui/components/ui-checkbox'], function (exports, _emberCliSemanticUiComponentsUiCheckbox) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliSemanticUiComponentsUiCheckbox['default'];
    }
  });
});
define('costs/components/ui-dimmable', ['exports', 'ember-cli-semantic-ui/components/ui-dimmable'], function (exports, _emberCliSemanticUiComponentsUiDimmable) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliSemanticUiComponentsUiDimmable['default'];
    }
  });
});
define('costs/components/ui-dropdown', ['exports', 'ember-cli-semantic-ui/components/ui-dropdown'], function (exports, _emberCliSemanticUiComponentsUiDropdown) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliSemanticUiComponentsUiDropdown['default'];
    }
  });
});
define('costs/components/ui-form', ['exports', 'ember-cli-semantic-ui/components/ui-form'], function (exports, _emberCliSemanticUiComponentsUiForm) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliSemanticUiComponentsUiForm['default'];
    }
  });
});
define('costs/components/ui-modal', ['exports', 'ember-cli-semantic-ui/components/ui-modal'], function (exports, _emberCliSemanticUiComponentsUiModal) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliSemanticUiComponentsUiModal['default'];
    }
  });
});
define('costs/components/ui-popup', ['exports', 'ember-cli-semantic-ui/components/ui-popup'], function (exports, _emberCliSemanticUiComponentsUiPopup) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliSemanticUiComponentsUiPopup['default'];
    }
  });
});
define('costs/components/ui-progress', ['exports', 'ember-cli-semantic-ui/components/ui-progress'], function (exports, _emberCliSemanticUiComponentsUiProgress) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliSemanticUiComponentsUiProgress['default'];
    }
  });
});
define('costs/components/ui-radio-button', ['exports', 'ember-cli-semantic-ui/components/ui-radio-button'], function (exports, _emberCliSemanticUiComponentsUiRadioButton) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliSemanticUiComponentsUiRadioButton['default'];
    }
  });
});
define('costs/components/ui-radio-collection', ['exports', 'ember-cli-semantic-ui/components/ui-radio-collection'], function (exports, _emberCliSemanticUiComponentsUiRadioCollection) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliSemanticUiComponentsUiRadioCollection['default'];
    }
  });
});
define('costs/components/ui-shape', ['exports', 'ember-cli-semantic-ui/components/ui-shape'], function (exports, _emberCliSemanticUiComponentsUiShape) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliSemanticUiComponentsUiShape['default'];
    }
  });
});
define('costs/components/ui-sticky', ['exports', 'ember-cli-semantic-ui/components/ui-sticky'], function (exports, _emberCliSemanticUiComponentsUiSticky) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliSemanticUiComponentsUiSticky['default'];
    }
  });
});
define('costs/helpers/is-after', ['exports', 'ember', 'costs/config/environment', 'ember-moment/helpers/is-after'], function (exports, _ember, _costsConfigEnvironment, _emberMomentHelpersIsAfter) {
  exports['default'] = _emberMomentHelpersIsAfter['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_costsConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('costs/helpers/is-before', ['exports', 'ember', 'costs/config/environment', 'ember-moment/helpers/is-before'], function (exports, _ember, _costsConfigEnvironment, _emberMomentHelpersIsBefore) {
  exports['default'] = _emberMomentHelpersIsBefore['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_costsConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('costs/helpers/is-between', ['exports', 'ember', 'costs/config/environment', 'ember-moment/helpers/is-between'], function (exports, _ember, _costsConfigEnvironment, _emberMomentHelpersIsBetween) {
  exports['default'] = _emberMomentHelpersIsBetween['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_costsConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('costs/helpers/is-same-or-after', ['exports', 'ember', 'costs/config/environment', 'ember-moment/helpers/is-same-or-after'], function (exports, _ember, _costsConfigEnvironment, _emberMomentHelpersIsSameOrAfter) {
  exports['default'] = _emberMomentHelpersIsSameOrAfter['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_costsConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('costs/helpers/is-same-or-before', ['exports', 'ember', 'costs/config/environment', 'ember-moment/helpers/is-same-or-before'], function (exports, _ember, _costsConfigEnvironment, _emberMomentHelpersIsSameOrBefore) {
  exports['default'] = _emberMomentHelpersIsSameOrBefore['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_costsConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('costs/helpers/is-same', ['exports', 'ember', 'costs/config/environment', 'ember-moment/helpers/is-same'], function (exports, _ember, _costsConfigEnvironment, _emberMomentHelpersIsSame) {
  exports['default'] = _emberMomentHelpersIsSame['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_costsConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('costs/helpers/moment-calendar', ['exports', 'ember', 'costs/config/environment', 'ember-moment/helpers/moment-calendar'], function (exports, _ember, _costsConfigEnvironment, _emberMomentHelpersMomentCalendar) {
  exports['default'] = _emberMomentHelpersMomentCalendar['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_costsConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('costs/helpers/moment-duration', ['exports', 'ember-moment/helpers/moment-duration'], function (exports, _emberMomentHelpersMomentDuration) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersMomentDuration['default'];
    }
  });
});
define('costs/helpers/moment-format', ['exports', 'ember', 'costs/config/environment', 'ember-moment/helpers/moment-format'], function (exports, _ember, _costsConfigEnvironment, _emberMomentHelpersMomentFormat) {
  exports['default'] = _emberMomentHelpersMomentFormat['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_costsConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('costs/helpers/moment-from-now', ['exports', 'ember', 'costs/config/environment', 'ember-moment/helpers/moment-from-now'], function (exports, _ember, _costsConfigEnvironment, _emberMomentHelpersMomentFromNow) {
  exports['default'] = _emberMomentHelpersMomentFromNow['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_costsConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('costs/helpers/moment-to-now', ['exports', 'ember', 'costs/config/environment', 'ember-moment/helpers/moment-to-now'], function (exports, _ember, _costsConfigEnvironment, _emberMomentHelpersMomentToNow) {
  exports['default'] = _emberMomentHelpersMomentToNow['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_costsConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('costs/helpers/now', ['exports', 'ember-moment/helpers/now'], function (exports, _emberMomentHelpersNow) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersNow['default'];
    }
  });
});
define('costs/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('costs/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('costs/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'costs/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _costsConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_costsConfigEnvironment['default'].APP.name, _costsConfigEnvironment['default'].APP.version)
  };
});
define('costs/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('costs/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('costs/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.ArrayController.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('costs/initializers/export-application-global', ['exports', 'ember', 'costs/config/environment'], function (exports, _ember, _costsConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_costsConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _costsConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_costsConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('costs/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('costs/initializers/local-storage-adapter', ['exports', 'ember-local-storage/initializers/local-storage-adapter'], function (exports, _emberLocalStorageInitializersLocalStorageAdapter) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLocalStorageInitializersLocalStorageAdapter['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberLocalStorageInitializersLocalStorageAdapter.initialize;
    }
  });
});
define('costs/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('costs/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define("costs/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('costs/models/category', ['exports', 'ember-data/model', 'ember-data/attr', 'ember-data/relationships'], function (exports, _emberDataModel, _emberDataAttr, _emberDataRelationships) {
  exports['default'] = _emberDataModel['default'].extend({
    name: (0, _emberDataAttr['default'])('string'),
    children: (0, _emberDataRelationships.hasMany)('category', { inverse: 'parent' }),
    parent: (0, _emberDataRelationships.belongsTo)('category', { inverse: 'children' })
  });
});
define('costs/models/cost', ['exports', 'ember-data/model', 'ember-data/attr', 'ember-data/relationships'], function (exports, _emberDataModel, _emberDataAttr, _emberDataRelationships) {
  exports['default'] = _emberDataModel['default'].extend({
    category: (0, _emberDataRelationships.belongsTo)('category'),
    sum: (0, _emberDataAttr['default'])('string'),
    date: (0, _emberDataAttr['default'])('string'),
    description: (0, _emberDataAttr['default'])('string')
  });
});
define('costs/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('costs/router', ['exports', 'ember', 'costs/config/environment'], function (exports, _ember, _costsConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _costsConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('category', { path: 'category/:category_id' });
  });

  exports['default'] = Router;
});
define('costs/routes/application', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    moment: _ember['default'].inject.service(),
    model: function model() {
      return this.store.query('category', { filter: { parent: '0' } });
    },
    beforeModel: function beforeModel() {
      var _this = this;

      this.get('moment').changeLocale('ru');
      this.store.findRecord('category', 0)['catch'](function () {
        _this.store.recordForId('category', 0).unloadRecord();
        _this.store.createRecord('category', { id: '0', name: 'Все', parent: null }).save().then(function () {
          _this.refresh();
          //this.transitionTo('category', 0);
        });
      });
      this.transitionTo('category', 0);
    },
    actions: {
      reload: function reload() {
        this.refresh();
      },
      importData: function importData() {
        this.store.importData('{"data":[{"id":"t9b6iffg","attributes":{"sum":"54","date":"1468789200","description":"А100"},"relationships":{"category":{"data":{"type":"categories","id":"afa2simt"}}},"type":"costs"},{"id":"a8von05h","attributes":{"sum":"45","date":"1467752400","description":"Лукойл"},"relationships":{"category":{"data":{"type":"categories","id":"afa2simt"}}},"type":"costs"},{"id":"tab4p3ib","attributes":{"sum":"55","date":"1466888400","description":"А100"},"relationships":{"category":{"data":{"type":"categories","id":"afa2simt"}}},"type":"costs"},{"id":"e3tah1bh","attributes":{"sum":"100","date":"1468443600","description":"Подвеска"},"relationships":{"category":{"data":{"type":"categories","id":"c7fupfr3"}}},"type":"costs"},{"id":"fu7sth10","attributes":{"sum":"95","date":"1469480400","description":"Рублевский"},"relationships":{"category":{"data":{"type":"categories","id":"l1bl0j26"}}},"type":"costs"},{"id":"jin82cc3","attributes":{"sum":"10","date":"1466197200","description":"Рубашка"},"relationships":{"category":{"data":{"type":"categories","id":"96k4l7d8"}}},"type":"costs"},{"id":"k7f49hef","attributes":{"sum":"10","date":"1469221200","description":"Соседи"},"relationships":{"category":{"data":{"type":"categories","id":"l1bl0j26"}}},"type":"costs"},{"id":"s6ir88jp","attributes":{"sum":"18","date":"1467666000","description":"Алми"},"relationships":{"category":{"data":{"type":"categories","id":"l1bl0j26"}}},"type":"costs"},{"id":"g1u4mj2j","attributes":{"sum":"30","date":"1467061200","description":""},"relationships":{"category":{"data":{"type":"categories","id":"l1bl0j26"}}},"type":"costs"},{"id":"fef4tcl1","attributes":{"sum":"25","date":"1468616400","description":"хот-дог"},"relationships":{"category":{"data":{"type":"categories","id":"8oicmbkj"}}},"type":"costs"},{"id":"f87puohm","attributes":{"sum":"9","date":"1468098000","description":""},"relationships":{"category":{"data":{"type":"categories","id":"l1bl0j26"}}},"type":"costs"},{"id":"jct9p4g0","attributes":{"sum":"20","date":"1468011600","description":""},"relationships":{"category":{"data":{"type":"categories","id":"l1bl0j26"}}},"type":"costs"},{"id":"ci94audq","attributes":{"sum":"25","date":"1469480400","description":"Штаны"},"relationships":{"category":{"data":{"type":"categories","id":"96k4l7d8"}}},"type":"costs"},{"id":"plgumch6","attributes":{"sum":"30","date":"1468616400","description":"Пиво с друзьями"},"relationships":{"category":{"data":{"type":"categories","id":"7ba00fm3"}}},"type":"costs"},{"id":"7ntt4212","attributes":{"sum":"10","date":"1468616400","description":""},"relationships":{"category":{"data":{"type":"categories","id":"9no943cb"}}},"type":"costs"},{"id":"0","attributes":{"name":"Все"},"relationships":{"children":{"data":[{"type":"categories","id":"since4lv"},{"type":"categories","id":"l1bl0j26"},{"type":"categories","id":"96k4l7d8"},{"type":"categories","id":"lt9hl1ue"},{"type":"categories","id":"udtva7sf"}]},"parent":{"data":null}},"type":"categories"},{"id":"since4lv","attributes":{"name":"Авто"},"relationships":{"children":{"data":[{"type":"categories","id":"afa2simt"},{"type":"categories","id":"35g6k4q7"},{"type":"categories","id":"c7fupfr3"}]},"parent":{"data":{"type":"categories","id":"0"}}},"type":"categories"},{"id":"l1bl0j26","attributes":{"name":"Еда"},"relationships":{"children":{"data":[{"type":"categories","id":"8oicmbkj"}]},"parent":{"data":{"type":"categories","id":"0"}}},"type":"categories"},{"id":"96k4l7d8","attributes":{"name":"Одежда"},"relationships":{"children":{"data":[]},"parent":{"data":{"type":"categories","id":"0"}}},"type":"categories"},{"id":"lt9hl1ue","attributes":{"name":"Развлечения"},"relationships":{"children":{"data":[{"type":"categories","id":"7ba00fm3"}]},"parent":{"data":{"type":"categories","id":"0"}}},"type":"categories"},{"id":"udtva7sf","attributes":{"name":"Транспорт"},"relationships":{"children":{"data":[{"type":"categories","id":"9no943cb"}]},"parent":{"data":{"type":"categories","id":"0"}}},"type":"categories"},{"id":"9no943cb","attributes":{"name":"Метро"},"relationships":{"children":{"data":[]},"parent":{"data":{"type":"categories","id":"udtva7sf"}}},"type":"categories"},{"id":"afa2simt","attributes":{"name":"Топливо"},"relationships":{"children":{"data":[]},"parent":{"data":{"type":"categories","id":"since4lv"}}},"type":"categories"},{"id":"35g6k4q7","attributes":{"name":"Обслуживание"},"relationships":{"children":{"data":[]},"parent":{"data":{"type":"categories","id":"since4lv"}}},"type":"categories"},{"id":"c7fupfr3","attributes":{"name":"Ремонт"},"relationships":{"children":{"data":[]},"parent":{"data":{"type":"categories","id":"since4lv"}}},"type":"categories"},{"id":"7ba00fm3","attributes":{"name":"Кафе"},"relationships":{"children":{"data":[]},"parent":{"data":{"type":"categories","id":"lt9hl1ue"}}},"type":"categories"},{"id":"8oicmbkj","attributes":{"name":"Фастфуд"},"relationships":{"children":{"data":[]},"parent":{"data":{"type":"categories","id":"l1bl0j26"}}},"type":"categories"}]}');
        this.refresh();
      }

    }

  });
});
define('costs/routes/category', ['exports', 'ember', 'moment'], function (exports, _ember, _moment) {
  exports['default'] = _ember['default'].Route.extend({
    dateService: _ember['default'].inject.service('dates'),
    model: function model(params) {
      return _ember['default'].RSVP.hash({
        category: this.store.findRecord('category', params.category_id, { reload: true }),
        cost: { sum: 0, date: (0, _moment['default'])().format('YYYY-MM-DD'), description: '' },
        children: this.store.query('category', { filter: { parent: params.category_id } }),
        new_category: { name: "" },
        dates: this.get('dateService').model(),
        costs: [],
        buttons: [{ type: 'day', name: 'День' }, { type: 'week', name: 'Неделя' }, { type: 'month', name: 'Месяц' }, { type: 'period', name: 'Период' }]
      });
    },
    setupController: function setupController(controller, model) {
      var _this = this;

      controller.set('dates', model.dates);
      controller.set('new_category', model.new_category);
      controller.set('category', model.category);
      controller.set('children', model.children);
      controller.set('cost', model.cost);
      controller.set('costs', model.costs);
      controller.set('buttons', model.buttons);

      controller.set('currentCosts', this.currentCosts);
      controller.set('total', this.total);
      controller.set('pieData', this.pieData);
      controller.set('getRandomColor', this.getRandomColor);

      controller.set('isPeriod', controller.get('dates.type') === 'period');
      controller.set('isNotMain', parseInt(controller.category.id) !== 0);
      controller.set('category.sum', 0);
      this.categorySum(this.controller.category.id, this.controller.category);

      this.controller.children.forEach(function (category) {
        category.set('sum', 0);
        _this.getChildren(category, category);
      });
    },
    total: _ember['default'].computed('costs.@each.sum', function () {
      var costs = this.get('costs');
      return costs.reduce(function (previousValue, cost) {
        return parseFloat(previousValue) + parseFloat(cost.get('sum'));
      }, 0);
    }),
    currentCosts: _ember['default'].computed('costs.@each.sum', function () {
      var costs = this.get('costs');
      return costs.sortBy('date');
    }),
    pieData: _ember['default'].computed('children.sum', function () {
      var _this2 = this;

      var children = this.get('children'),
          piedata = [];
      children.forEach(function (child) {
        if (parseFloat(child.get('sum')) > 0) {
          piedata.push({ value: child.get('sum'), label: child.get('name'), color: _this2.getRandomColor() });
        }
      });
      if (parseFloat(this.get('category.sum')) > 0) {
        piedata.push({ value: this.get('category.sum'), label: this.get('category.name'), color: this.getRandomColor() });
      }
      return piedata;
    }),
    getChildren: function getChildren(category, mainCategory) {
      var _this3 = this;

      this.categorySum(category.get('id'), mainCategory);
      this.store.query('category', { filter: { parent: category.get('id') } }).then(function (children) {
        children.forEach(function (child) {
          _this3.getChildren(child, mainCategory);
        });
      });
    },
    categorySum: function categorySum(idcategory, mainCategory) {
      var _this4 = this;

      var dateStart = parseInt((0, _moment['default'])(this.controller.get('dates.dateStart')).format('X'));
      var dateEnd = parseInt((0, _moment['default'])(this.controller.get('dates.dateEnd')).format('X'));
      this.store.query('cost', { filter: { category: idcategory } }).then(function (costs) {
        costs.forEach(function (cost) {
          if (parseInt(cost.get('date')) >= dateStart && parseInt(cost.get('date')) <= dateEnd) {
            cost.set('mainCategory', mainCategory.id);
            _this4.controller.costs.pushObject(cost);
            mainCategory.set('sum', parseFloat(mainCategory.get('sum')) + parseFloat(cost.get('sum')));
          }
        });
      });
    },
    getRandomColor: function getRandomColor() {
      var letters = '0123456789ABCDEF'.split('');
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    },
    updateDatesModel: function updateDatesModel() {
      this.controller.set('dates', this.get('dateService').model());
    },
    actions: {
      addCost: function addCost() {
        var _this5 = this;

        if (this.get('controller.cost.sum') === "" || parseInt(this.get('controller.cost.sum')) === 0) {
          return;
        }
        this.store.createRecord('cost', { sum: this.get('controller.cost.sum'), date: (0, _moment['default'])(this.get('controller.cost.date')).format('X'), description: this.get('controller.cost.description'), category: this.controller.category }).save().then(function () {
          _this5.refresh();
        });
      },
      addNewChildCategory: function addNewChildCategory() {
        var _this6 = this;

        if (this.get('controller.new_category.name') === '') {
          console.log(this.controller.get('allChildren'));
          return;
        } else {
          this.store.createRecord('category', { name: this.get('controller.new_category.name'), parent: this.controller.category }).save().then(function (new_category) {
            var category = _this6.controller.category;
            category.get('children').pushObject(new_category);
            category.save();
            if (_this6.controller.category.id === "0") {
              _this6.send('reload');
            } else {
              _this6.refresh();
            }
          });
        }
      },
      changeDates: function changeDates() {
        this.get('dateService').setDate(this.controller.get('dates.dateStart'), this.controller.get('dates.dateEnd'));
        this.refresh();
      },
      nextDates: function nextDates() {
        this.get('dateService').next();
        this.refresh();
      },
      prevDates: function prevDates() {
        this.get('dateService').prev();
        this.refresh();
      },
      setActiveType: function setActiveType(type) {
        this.get('dateService').setActiveType(type);
        this.refresh();
      }
    }

  });
});
define('costs/serializers/application', ['exports', 'ember-local-storage/serializers/serializer'], function (exports, _emberLocalStorageSerializersSerializer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLocalStorageSerializersSerializer['default'];
    }
  });
});
define('costs/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('costs/services/dates', ['exports', 'ember', 'moment'], function (exports, _ember, _moment) {
  exports['default'] = _ember['default'].Service.extend({
    dateStart: null,
    dateEnd: null,
    type: null,
    init: function init() {
      this._super.apply(this, arguments);
      this.set('dateStart', (0, _moment['default'])().format('X'));
      this.set('dateEnd', (0, _moment['default'])().format('X'));
      this.set('type', 'day');
      this.setString();
    },
    model: function model() {
      return { dateStart: (0, _moment['default'])(this.get('dateStart'), 'X').format('YYYY-MM-DD'), dateEnd: (0, _moment['default'])(this.get('dateEnd'), 'X').format('YYYY-MM-DD'), type: this.get('type'), string: this.get('string') };
    },
    setDate: function setDate(dateStart, dateEnd) {
      this.set('dateStart', (0, _moment['default'])(dateStart, 'YYYY-MM-DD').format('X'));
      this.set('dateEnd', (0, _moment['default'])(dateEnd, 'YYYY-MM-DD').format('X'));
      this.setString();
    },
    next: function next() {
      if (this.type === 'month') {
        this.set('dateStart', (0, _moment['default'])((0, _moment['default'])(this.get('dateStart'), 'X')).add(1, 'M'));
        this.set('dateEnd', (0, _moment['default'])(this.get('dateStart'), 'X').add(1, 'M').add(-1, 'd'));
      } else {
        var diff = (0, _moment['default'])(this.get('dateEnd'), 'X').add(1, 'd').diff((0, _moment['default'])(this.get('dateStart'), 'X'));
        this.set('dateStart', (0, _moment['default'])((0, _moment['default'])(this.get('dateStart'), 'X')).add(diff, 'ms'));
        this.set('dateEnd', (0, _moment['default'])((0, _moment['default'])(this.get('dateEnd'), 'X')).add(diff, 'ms'));
      }
      this.setString();
    },
    prev: function prev() {
      if (this.type === 'month') {
        this.set('dateStart', (0, _moment['default'])((0, _moment['default'])(this.get('dateStart'), 'X')).add(-1, 'M'));
        this.set('dateEnd', (0, _moment['default'])(this.get('dateStart'), 'X').add(1, 'M').add(-1, 'd'));
      } else {
        var diff = (0, _moment['default'])(this.get('dateEnd'), 'X').add(1, 'd').diff((0, _moment['default'])(this.get('dateStart'), 'X'));
        this.set('dateStart', (0, _moment['default'])((0, _moment['default'])(this.get('dateStart'), 'X')).add(-diff, 'ms'));
        this.set('dateEnd', (0, _moment['default'])((0, _moment['default'])(this.get('dateEnd'), 'X')).add(-diff, 'ms'));
      }
      this.setString();
    },
    setActiveType: function setActiveType(type) {
      this.set('type', type);
      this.set('dateStart', (0, _moment['default'])().format('X'));
      if (this.type === 'day') {
        this.set('dateEnd', this.get('dateStart'));
      } else if (this.type === 'week') {
        this.set('dateStart', (0, _moment['default'])(this.get('dateStart'), 'X').weekday(0).format('X'));
        this.set('dateEnd', (0, _moment['default'])(this.get('dateStart'), 'X').add(6, 'd'));
      } else if (this.type === 'month') {
        this.set('dateStart', (0, _moment['default'])(this.get('dateStart'), 'X').date(1).format('X'));
        this.set('dateEnd', (0, _moment['default'])(this.get('dateStart'), 'X').add(1, 'M').add(-1, 'd'));
      } else {
        this.set('string', (0, _moment['default'])(this.get('dateStart'), 'X').format('DD.MM.YYYY'));
      }
      this.setString();
    },
    setString: function setString() {
      if (this.type === 'week') {
        this.set('string', (0, _moment['default'])(this.get('dateStart'), 'X').format('DD.MM.YYYY') + " - " + (0, _moment['default'])(this.get('dateEnd'), 'X').format('DD.MM.YYYY'));
      } else if (this.type === 'month') {
        this.set('string', (0, _moment['default'])(this.get('dateStart'), 'X').format('MMMM YYYY'));
      } else {
        this.set('string', (0, _moment['default'])(this.get('dateStart'), 'X').format('DD.MM.YYYY'));
      }
    }
  });
});
define('costs/services/moment', ['exports', 'ember', 'costs/config/environment', 'ember-moment/services/moment'], function (exports, _ember, _costsConfigEnvironment, _emberMomentServicesMoment) {
  exports['default'] = _emberMomentServicesMoment['default'].extend({
    defaultFormat: _ember['default'].get(_costsConfigEnvironment['default'], 'moment.outputFormat')
  });
});
define("costs/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 6
            },
            "end": {
              "line": 6,
              "column": 56
            }
          },
          "moduleName": "costs/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Все расходы");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.2",
            "loc": {
              "source": null,
              "start": {
                "line": 8,
                "column": 10
              },
              "end": {
                "line": 8,
                "column": 73
              }
            },
            "moduleName": "costs/templates/application.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["content", "category.name", ["loc", [null, [8, 10], [8, 73]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 8
            },
            "end": {
              "line": 9,
              "column": 8
            }
          },
          "moduleName": "costs/templates/application.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["block", "link-to", ["category", ["get", "category.id", ["loc", [null, [8, 46], [8, 57]]]]], ["class", "item"], 0, null, ["loc", [null, [8, 10], [8, 73]]]]],
        locals: ["category"],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 18,
            "column": 0
          }
        },
        "moduleName": "costs/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "ui column stackable grid");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "three wide column");
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "ui large vertical menu");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        dom.setAttribute(el3, "class", "ui button mini");
        var el4 = dom.createTextNode("Импорт");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "thirteen wide column");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [1]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element1, [1]);
        var element3 = dom.childAt(element1, [3]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(element2, 1, 1);
        morphs[1] = dom.createMorphAt(element2, 3, 3);
        morphs[2] = dom.createElementMorph(element3);
        morphs[3] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
        return morphs;
      },
      statements: [["block", "link-to", ["category", 0], ["class", "item"], 0, null, ["loc", [null, [6, 6], [6, 68]]]], ["block", "each", [["get", "model", ["loc", [null, [7, 16], [7, 21]]]]], [], 1, null, ["loc", [null, [7, 8], [9, 17]]]], ["element", "action", ["importData"], [], ["loc", [null, [11, 35], [11, 58]]]], ["content", "outlet", ["loc", [null, [14, 4], [14, 14]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("costs/templates/category", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 0
            },
            "end": {
              "line": 29,
              "column": 0
            }
          },
          "moduleName": "costs/templates/category.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "ui form");
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "fields");
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "field");
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("label");
          var el5 = dom.createTextNode("Сумма");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n    ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "field");
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("label");
          var el5 = dom.createTextNode("Дата");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n    ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "field");
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("label");
          var el5 = dom.createTextNode("Описание");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n    ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "field");
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("label");
          var el5 = dom.createTextNode("  ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("button");
          dom.setAttribute(el4, "class", "ui button primary");
          var el5 = dom.createTextNode("Сохранить");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n    ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("hr");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element3 = dom.childAt(fragment, [0, 1]);
          var element4 = dom.childAt(element3, [7, 3]);
          var morphs = new Array(4);
          morphs[0] = dom.createMorphAt(dom.childAt(element3, [1]), 3, 3);
          morphs[1] = dom.createMorphAt(dom.childAt(element3, [3]), 3, 3);
          morphs[2] = dom.createMorphAt(dom.childAt(element3, [5]), 3, 3);
          morphs[3] = dom.createElementMorph(element4);
          return morphs;
        },
        statements: [["inline", "input", [], ["type", "number", "value", ["subexpr", "@mut", [["get", "cost.sum", ["loc", [null, [12, 34], [12, 42]]]]], [], []], "step", "0.01"], ["loc", [null, [12, 6], [12, 57]]]], ["inline", "input", [], ["type", "date", "value", ["subexpr", "@mut", [["get", "cost.date", ["loc", [null, [16, 32], [16, 41]]]]], [], []]], ["loc", [null, [16, 6], [16, 44]]]], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "cost.description", ["loc", [null, [20, 32], [20, 48]]]]], [], []], "placeholder", "Описание"], ["loc", [null, [20, 6], [20, 73]]]], ["element", "action", ["addCost"], [], ["loc", [null, [24, 40], [24, 60]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 36,
              "column": 8
            },
            "end": {
              "line": 38,
              "column": 8
            }
          },
          "moduleName": "costs/templates/category.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "date-panel-button", [], ["button", ["subexpr", "@mut", [["get", "button", ["loc", [null, [37, 37], [37, 43]]]]], [], []], "type", ["subexpr", "@mut", [["get", "dates.type", ["loc", [null, [37, 49], [37, 59]]]]], [], []], "setActiveType", "setActiveType"], ["loc", [null, [37, 10], [37, 91]]]]],
        locals: ["button"],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 44,
              "column": 4
            },
            "end": {
              "line": 54,
              "column": 4
            }
          },
          "moduleName": "costs/templates/category.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "field");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "field");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "field");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          dom.setAttribute(el2, "class", "ui button");
          var el3 = dom.createTextNode("Применить");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element2 = dom.childAt(fragment, [5, 1]);
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3]), 1, 1);
          morphs[2] = dom.createElementMorph(element2);
          return morphs;
        },
        statements: [["inline", "input", [], ["type", "date", "value", ["subexpr", "@mut", [["get", "dates.dateStart", ["loc", [null, [46, 32], [46, 47]]]]], [], []]], ["loc", [null, [46, 6], [46, 50]]]], ["inline", "input", [], ["type", "date", "value", ["subexpr", "@mut", [["get", "dates.dateEnd", ["loc", [null, [49, 32], [49, 45]]]]], [], []]], ["loc", [null, [49, 6], [49, 48]]]], ["element", "action", ["changeDates"], [], ["loc", [null, [52, 32], [52, 56]]]]],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 54,
              "column": 4
            },
            "end": {
              "line": 58,
              "column": 4
            }
          },
          "moduleName": "costs/templates/category.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "field");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h1");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 0, 0);
          return morphs;
        },
        statements: [["content", "dates.string", ["loc", [null, [56, 10], [56, 26]]]]],
        locals: [],
        templates: []
      };
    })();
    var child4 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.2",
            "loc": {
              "source": null,
              "start": {
                "line": 77,
                "column": 16
              },
              "end": {
                "line": 77,
                "column": 62
              }
            },
            "moduleName": "costs/templates/category.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["content", "child.name", ["loc", [null, [77, 48], [77, 62]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 76,
              "column": 8
            },
            "end": {
              "line": 78,
              "column": 8
            }
          },
          "moduleName": "costs/templates/category.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("tr");
          var el2 = dom.createElement("td");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          dom.setAttribute(el2, "class", "right aligned");
          var el3 = dom.createElement("b");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(dom.childAt(element1, [0]), 0, 0);
          morphs[1] = dom.createMorphAt(dom.childAt(element1, [1, 0]), 0, 0);
          return morphs;
        },
        statements: [["block", "link-to", ["category", ["get", "child.id", ["loc", [null, [77, 38], [77, 46]]]]], [], 0, null, ["loc", [null, [77, 16], [77, 74]]]], ["content", "child.sum", ["loc", [null, [77, 108], [77, 121]]]]],
        locals: ["child"],
        templates: [child0]
      };
    })();
    var child5 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 102,
              "column": 8
            },
            "end": {
              "line": 109,
              "column": 8
            }
          },
          "moduleName": "costs/templates/category.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("tr");
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          dom.setAttribute(el2, "class", "right aligned");
          var el3 = dom.createElement("b");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 0, 0);
          morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]), 0, 0);
          morphs[2] = dom.createMorphAt(dom.childAt(element0, [5]), 0, 0);
          morphs[3] = dom.createMorphAt(dom.childAt(element0, [7, 0]), 0, 0);
          return morphs;
        },
        statements: [["inline", "moment-format", [["get", "cost.date", ["loc", [null, [104, 32], [104, 41]]]], "DD.MM.YYYY", "X"], [], ["loc", [null, [104, 16], [104, 60]]]], ["content", "cost.category.name", ["loc", [null, [105, 16], [105, 38]]]], ["content", "cost.description", ["loc", [null, [106, 16], [106, 36]]]], ["content", "cost.sum", ["loc", [null, [107, 41], [107, 53]]]]],
        locals: ["cost"],
        templates: []
      };
    })();
    var child6 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 120,
              "column": 0
            },
            "end": {
              "line": 122,
              "column": 0
            }
          },
          "moduleName": "costs/templates/category.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          return morphs;
        },
        statements: [["content", "ccc", ["loc", [null, [121, 6], [121, 13]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 124,
            "column": 0
          }
        },
        "moduleName": "costs/templates/category.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "ui big breadcrumb");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "ui form");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "fields");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "field");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "ui buttons");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "field");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "class", "ui button icon");
        var el5 = dom.createElement("i");
        dom.setAttribute(el5, "class", "left chevron icon divider");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "field");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "class", "ui button icon");
        var el5 = dom.createElement("i");
        dom.setAttribute(el5, "class", "right chevron icon divider");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "ui column stackable grid");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "five wide column");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("table");
        dom.setAttribute(el3, "class", "ui small unstackable table");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("thead");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("tr");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("th");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("th");
        dom.setAttribute(el6, "class", "right aligned");
        var el7 = dom.createTextNode("Всего: ");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("tbody");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("tr");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("td");
        dom.setAttribute(el6, "colspan", "2");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "ui action small input");
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("button");
        dom.setAttribute(el8, "class", "ui small button");
        var el9 = dom.createTextNode("Добавить");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "seven wide column");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("table");
        dom.setAttribute(el3, "class", "ui small unstackable table");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("thead");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("tr");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("th");
        var el7 = dom.createTextNode("Дата");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("th");
        var el7 = dom.createTextNode("Категория");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("th");
        var el7 = dom.createTextNode("Описание");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("th");
        dom.setAttribute(el6, "class", "right aligned");
        var el7 = dom.createTextNode("Сумма");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("tbody");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "four wide column");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element5 = dom.childAt(fragment, [5, 1]);
        var element6 = dom.childAt(element5, [3, 1]);
        var element7 = dom.childAt(element5, [7, 1]);
        var element8 = dom.childAt(fragment, [7]);
        var element9 = dom.childAt(element8, [1, 1]);
        var element10 = dom.childAt(element9, [1, 1]);
        var element11 = dom.childAt(element9, [3]);
        var element12 = dom.childAt(element11, [3, 1, 1]);
        var element13 = dom.childAt(element12, [3]);
        var morphs = new Array(15);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
        morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        morphs[2] = dom.createMorphAt(dom.childAt(element5, [1, 1]), 1, 1);
        morphs[3] = dom.createElementMorph(element6);
        morphs[4] = dom.createMorphAt(element5, 5, 5);
        morphs[5] = dom.createElementMorph(element7);
        morphs[6] = dom.createMorphAt(dom.childAt(element10, [1]), 0, 0);
        morphs[7] = dom.createMorphAt(dom.childAt(element10, [3]), 1, 1);
        morphs[8] = dom.createMorphAt(element11, 1, 1);
        morphs[9] = dom.createMorphAt(element12, 1, 1);
        morphs[10] = dom.createElementMorph(element13);
        morphs[11] = dom.createMorphAt(dom.childAt(element8, [3, 1, 3]), 1, 1);
        morphs[12] = dom.createMorphAt(dom.childAt(element8, [5]), 1, 1);
        morphs[13] = dom.createMorphAt(fragment, 9, 9, contextualElement);
        morphs[14] = dom.createMorphAt(fragment, 10, 10, contextualElement);
        return morphs;
      },
      statements: [["inline", "parents-string", [], ["category", ["subexpr", "@mut", [["get", "category", ["loc", [null, [3, 28], [3, 36]]]]], [], []]], ["loc", [null, [3, 2], [3, 38]]]], ["block", "if", [["get", "isNotMain", ["loc", [null, [7, 6], [7, 15]]]]], [], 0, null, ["loc", [null, [7, 0], [29, 7]]]], ["block", "each", [["get", "buttons", ["loc", [null, [36, 16], [36, 23]]]]], [], 1, null, ["loc", [null, [36, 8], [38, 17]]]], ["element", "action", ["prevDates"], [], ["loc", [null, [42, 37], [42, 59]]]], ["block", "if", [["get", "isPeriod", ["loc", [null, [44, 10], [44, 18]]]]], [], 2, 3, ["loc", [null, [44, 4], [58, 11]]]], ["element", "action", ["nextDates"], [], ["loc", [null, [60, 37], [60, 59]]]], ["content", "category.name", ["loc", [null, [71, 14], [71, 31]]]], ["content", "total", ["loc", [null, [72, 43], [72, 52]]]], ["block", "each", [["get", "children", ["loc", [null, [76, 16], [76, 24]]]]], [], 4, null, ["loc", [null, [76, 8], [78, 17]]]], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "new_category.name", ["loc", [null, [82, 28], [82, 45]]]]], [], []], "type", "text", "placeholder", "Новая категория"], ["loc", [null, [82, 14], [82, 89]]]], ["element", "action", ["addNewChildCategory"], [], ["loc", [null, [83, 46], [83, 78]]]], ["block", "each", [["get", "currentCosts", ["loc", [null, [102, 16], [102, 28]]]]], [], 5, null, ["loc", [null, [102, 8], [109, 17]]]], ["inline", "ember-chart", [], ["type", "Pie", "data", ["subexpr", "@mut", [["get", "pieData", ["loc", [null, [116, 36], [116, 43]]]]], [], []], "width", 250, "height", 250], ["loc", [null, [116, 6], [116, 66]]]], ["block", "each", [["get", "currentChildren", ["loc", [null, [120, 8], [120, 23]]]], ["get", "as", ["loc", [null, [120, 24], [120, 26]]]], "ccc"], [], 6, null, ["loc", [null, [120, 0], [122, 9]]]], ["content", "outlet", ["loc", [null, [123, 0], [123, 10]]]]],
      locals: [],
      templates: [child0, child1, child2, child3, child4, child5, child6]
    };
  })());
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('costs/config/environment', ['ember'], function(Ember) {
  var prefix = 'costs';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("costs/app")["default"].create({"name":"costs","version":"0.0.1+9f9b1b79"});
}

/* jshint ignore:end */
//# sourceMappingURL=costs.map