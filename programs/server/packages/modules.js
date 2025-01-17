(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var meteorInstall = Package['modules-runtime'].meteorInstall;

var require = meteorInstall({"node_modules":{"meteor":{"modules":{"server.js":function module(require){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// packages/modules/server.js                                                                            //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
require("./install-packages.js");
require("./process.js");
require("./reify.js");

///////////////////////////////////////////////////////////////////////////////////////////////////////////

},"install-packages.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// packages/modules/install-packages.js                                                                  //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
function install(name, mainModule) {
  var meteorDir = {};

  // Given a package name <name>, install a stub module in the
  // /node_modules/meteor directory called <name>.js, so that
  // require.resolve("meteor/<name>") will always return
  // /node_modules/meteor/<name>.js instead of something like
  // /node_modules/meteor/<name>/index.js, in the rare but possible event
  // that the package contains a file called index.js (#6590).

  if (typeof mainModule === "string") {
    // Set up an alias from /node_modules/meteor/<package>.js to the main
    // module, e.g. meteor/<package>/index.js.
    meteorDir[name + ".js"] = mainModule;
  } else {
    // back compat with old Meteor packages
    meteorDir[name + ".js"] = function (r, e, module) {
      module.exports = Package[name];
    };
  }

  meteorInstall({
    node_modules: {
      meteor: meteorDir
    }
  });
}

// This file will be modified during computeJsOutputFilesMap to include
// install(<name>) calls for every Meteor package.

install("meteor");
install("meteor-base");
install("mobile-experience");
install("npm-mongo");
install("ecmascript-runtime");
install("modules-runtime");
install("modules", "meteor/modules/server.js");
install("modern-browsers", "meteor/modern-browsers/modern.js");
install("es5-shim");
install("promise", "meteor/promise/server.js");
install("ecmascript-runtime-client", "meteor/ecmascript-runtime-client/versions.js");
install("ecmascript-runtime-server", "meteor/ecmascript-runtime-server/runtime.js");
install("babel-compiler");
install("ecmascript");
install("babel-runtime", "meteor/babel-runtime/babel-runtime.js");
install("fetch", "meteor/fetch/server.js");
install("inter-process-messaging", "meteor/inter-process-messaging/inter-process-messaging.js");
install("dynamic-import", "meteor/dynamic-import/server.js");
install("base64", "meteor/base64/base64.js");
install("ejson", "meteor/ejson/ejson.js");
install("diff-sequence", "meteor/diff-sequence/diff.js");
install("geojson-utils", "meteor/geojson-utils/main.js");
install("id-map", "meteor/id-map/id-map.js");
install("random", "meteor/random/main_server.js");
install("mongo-id", "meteor/mongo-id/id.js");
install("ordered-dict", "meteor/ordered-dict/ordered_dict.js");
install("tracker");
install("mongo-decimal", "meteor/mongo-decimal/decimal.js");
install("minimongo", "meteor/minimongo/minimongo_server.js");
install("check", "meteor/check/match.js");
install("retry", "meteor/retry/retry.js");
install("callback-hook", "meteor/callback-hook/hook.js");
install("ddp-common");
install("reload");
install("socket-stream-client", "meteor/socket-stream-client/node.js");
install("ddp-client", "meteor/ddp-client/server/server.js");
install("underscore");
install("logging", "meteor/logging/logging.js");
install("routepolicy", "meteor/routepolicy/main.js");
install("boilerplate-generator", "meteor/boilerplate-generator/generator.js");
install("webapp-hashing");
install("webapp", "meteor/webapp/webapp_server.js");
install("ddp-server");
install("ddp");
install("allow-deny");
install("binary-heap", "meteor/binary-heap/binary-heap.js");
install("mongo");
install("reactive-var");
install("minifier-css", "meteor/minifier-css/minifier.js");
install("standard-minifier-css");
install("standard-minifier-js");
install("shell-server", "meteor/shell-server/main.js");
install("typescript");
install("react-meteor-data", "meteor/react-meteor-data/index.js");
install("session");
install("less");
install("url", "meteor/url/server.js");
install("http", "meteor/http/httpcall_server.js");
install("static-html");
install("livedata");
install("hot-code-push");
install("launch-screen");
install("autoupdate", "meteor/autoupdate/autoupdate_server.js");

///////////////////////////////////////////////////////////////////////////////////////////////////////////

},"process.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// packages/modules/process.js                                                                           //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
if (! global.process) {
  try {
    // The application can run `npm install process` to provide its own
    // process stub; otherwise this module will provide a partial stub.
    global.process = require("process");
  } catch (missing) {
    global.process = {};
  }
}

var proc = global.process;

if (Meteor.isServer) {
  // Make require("process") work on the server in all versions of Node.
  meteorInstall({
    node_modules: {
      "process.js": function (r, e, module) {
        module.exports = proc;
      }
    }
  });
} else {
  proc.platform = "browser";
  proc.nextTick = proc.nextTick || Meteor._setImmediate;
}

if (typeof proc.env !== "object") {
  proc.env = {};
}

var hasOwn = Object.prototype.hasOwnProperty;
for (var key in meteorEnv) {
  if (hasOwn.call(meteorEnv, key)) {
    proc.env[key] = meteorEnv[key];
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////

},"reify.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// packages/modules/reify.js                                                                             //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
require("reify/lib/runtime").enable(
  module.constructor.prototype
);

///////////////////////////////////////////////////////////////////////////////////////////////////////////

},"node_modules":{"reify":{"lib":{"runtime":{"index.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// node_modules/meteor/modules/node_modules/reify/lib/runtime/index.js                                   //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
module.useNode();
///////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
meteorInstall({"node_modules":{"download":{"package.json":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// node_modules/download/package.json                                                                    //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
module.exports = {
  "name": "download",
  "version": "8.0.0"
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////

},"index.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// node_modules/download/index.js                                                                        //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
module.useNode();
///////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"three":{"package.json":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// node_modules/three/package.json                                                                       //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
module.exports = {
  "name": "three",
  "version": "0.112.1",
  "main": "build/three.js"
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////

},"build":{"three.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// node_modules/three/build/three.js                                                                     //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
module.useNode();
///////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"shelljs":{"package.json":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// node_modules/shelljs/package.json                                                                     //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
module.exports = {
  "name": "shelljs",
  "version": "0.8.2",
  "main": "./shell.js"
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////

},"shell.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// node_modules/shelljs/shell.js                                                                         //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
module.useNode();
///////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"serve-static":{"package.json":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// node_modules/serve-static/package.json                                                                //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
module.exports = {
  "name": "serve-static",
  "version": "1.13.2"
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////

},"index.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// node_modules/serve-static/index.js                                                                    //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
module.useNode();
///////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"body-parser":{"package.json":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// node_modules/body-parser/package.json                                                                 //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
module.exports = {
  "name": "body-parser",
  "version": "1.18.3"
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////

},"index.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// node_modules/body-parser/index.js                                                                     //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
module.useNode();
///////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"color-scheme":{"package.json":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// node_modules/color-scheme/package.json                                                                //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
module.exports = {
  "name": "color-scheme",
  "version": "1.0.1",
  "main": "lib/color-scheme.js"
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////

},"lib":{"color-scheme.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// node_modules/color-scheme/lib/color-scheme.js                                                         //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
module.useNode();
///////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"@babel":{"runtime":{"package.json":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// node_modules/@babel/runtime/package.json                                                              //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
module.exports = {
  "author": {
    "name": "Sebastian McKenzie",
    "email": "sebmck@gmail.com"
  },
  "bugs": {
    "url": "https://github.com/babel/babel/issues"
  },
  "dependencies": {
    "regenerator-runtime": "^0.13.4"
  },
  "description": "babel's modular runtime helpers",
  "exports": {
    "./helpers/": "./helpers/",
    "./helpers/typeof": "./helpers/typeof.js",
    "./helpers/jsx": "./helpers/jsx.js",
    "./helpers/asyncIterator": "./helpers/asyncIterator.js",
    "./helpers/AwaitValue": "./helpers/AwaitValue.js",
    "./helpers/AsyncGenerator": "./helpers/AsyncGenerator.js",
    "./helpers/wrapAsyncGenerator": "./helpers/wrapAsyncGenerator.js",
    "./helpers/awaitAsyncGenerator": "./helpers/awaitAsyncGenerator.js",
    "./helpers/asyncGeneratorDelegate": "./helpers/asyncGeneratorDelegate.js",
    "./helpers/asyncToGenerator": "./helpers/asyncToGenerator.js",
    "./helpers/classCallCheck": "./helpers/classCallCheck.js",
    "./helpers/createClass": "./helpers/createClass.js",
    "./helpers/defineEnumerableProperties": "./helpers/defineEnumerableProperties.js",
    "./helpers/defaults": "./helpers/defaults.js",
    "./helpers/defineProperty": "./helpers/defineProperty.js",
    "./helpers/extends": "./helpers/extends.js",
    "./helpers/objectSpread": "./helpers/objectSpread.js",
    "./helpers/objectSpread2": "./helpers/objectSpread2.js",
    "./helpers/inherits": "./helpers/inherits.js",
    "./helpers/inheritsLoose": "./helpers/inheritsLoose.js",
    "./helpers/getPrototypeOf": "./helpers/getPrototypeOf.js",
    "./helpers/setPrototypeOf": "./helpers/setPrototypeOf.js",
    "./helpers/isNativeReflectConstruct": "./helpers/isNativeReflectConstruct.js",
    "./helpers/construct": "./helpers/construct.js",
    "./helpers/isNativeFunction": "./helpers/isNativeFunction.js",
    "./helpers/wrapNativeSuper": "./helpers/wrapNativeSuper.js",
    "./helpers/instanceof": "./helpers/instanceof.js",
    "./helpers/interopRequireDefault": "./helpers/interopRequireDefault.js",
    "./helpers/interopRequireWildcard": "./helpers/interopRequireWildcard.js",
    "./helpers/newArrowCheck": "./helpers/newArrowCheck.js",
    "./helpers/objectDestructuringEmpty": "./helpers/objectDestructuringEmpty.js",
    "./helpers/objectWithoutPropertiesLoose": "./helpers/objectWithoutPropertiesLoose.js",
    "./helpers/objectWithoutProperties": "./helpers/objectWithoutProperties.js",
    "./helpers/assertThisInitialized": "./helpers/assertThisInitialized.js",
    "./helpers/possibleConstructorReturn": "./helpers/possibleConstructorReturn.js",
    "./helpers/createSuper": "./helpers/createSuper.js",
    "./helpers/superPropBase": "./helpers/superPropBase.js",
    "./helpers/get": "./helpers/get.js",
    "./helpers/set": "./helpers/set.js",
    "./helpers/taggedTemplateLiteral": "./helpers/taggedTemplateLiteral.js",
    "./helpers/taggedTemplateLiteralLoose": "./helpers/taggedTemplateLiteralLoose.js",
    "./helpers/readOnlyError": "./helpers/readOnlyError.js",
    "./helpers/classNameTDZError": "./helpers/classNameTDZError.js",
    "./helpers/temporalUndefined": "./helpers/temporalUndefined.js",
    "./helpers/tdz": "./helpers/tdz.js",
    "./helpers/temporalRef": "./helpers/temporalRef.js",
    "./helpers/slicedToArray": "./helpers/slicedToArray.js",
    "./helpers/slicedToArrayLoose": "./helpers/slicedToArrayLoose.js",
    "./helpers/toArray": "./helpers/toArray.js",
    "./helpers/toConsumableArray": "./helpers/toConsumableArray.js",
    "./helpers/arrayWithoutHoles": "./helpers/arrayWithoutHoles.js",
    "./helpers/arrayWithHoles": "./helpers/arrayWithHoles.js",
    "./helpers/maybeArrayLike": "./helpers/maybeArrayLike.js",
    "./helpers/iterableToArray": "./helpers/iterableToArray.js",
    "./helpers/iterableToArrayLimit": "./helpers/iterableToArrayLimit.js",
    "./helpers/iterableToArrayLimitLoose": "./helpers/iterableToArrayLimitLoose.js",
    "./helpers/unsupportedIterableToArray": "./helpers/unsupportedIterableToArray.js",
    "./helpers/arrayLikeToArray": "./helpers/arrayLikeToArray.js",
    "./helpers/nonIterableSpread": "./helpers/nonIterableSpread.js",
    "./helpers/nonIterableRest": "./helpers/nonIterableRest.js",
    "./helpers/createForOfIteratorHelper": "./helpers/createForOfIteratorHelper.js",
    "./helpers/createForOfIteratorHelperLoose": "./helpers/createForOfIteratorHelperLoose.js",
    "./helpers/skipFirstGeneratorNext": "./helpers/skipFirstGeneratorNext.js",
    "./helpers/toPrimitive": "./helpers/toPrimitive.js",
    "./helpers/toPropertyKey": "./helpers/toPropertyKey.js",
    "./helpers/initializerWarningHelper": "./helpers/initializerWarningHelper.js",
    "./helpers/initializerDefineProperty": "./helpers/initializerDefineProperty.js",
    "./helpers/applyDecoratedDescriptor": "./helpers/applyDecoratedDescriptor.js",
    "./helpers/classPrivateFieldLooseKey": "./helpers/classPrivateFieldLooseKey.js",
    "./helpers/classPrivateFieldLooseBase": "./helpers/classPrivateFieldLooseBase.js",
    "./helpers/classPrivateFieldGet": "./helpers/classPrivateFieldGet.js",
    "./helpers/classPrivateFieldSet": "./helpers/classPrivateFieldSet.js",
    "./helpers/classPrivateFieldDestructureSet": "./helpers/classPrivateFieldDestructureSet.js",
    "./helpers/classStaticPrivateFieldSpecGet": "./helpers/classStaticPrivateFieldSpecGet.js",
    "./helpers/classStaticPrivateFieldSpecSet": "./helpers/classStaticPrivateFieldSpecSet.js",
    "./helpers/classStaticPrivateMethodGet": "./helpers/classStaticPrivateMethodGet.js",
    "./helpers/classStaticPrivateMethodSet": "./helpers/classStaticPrivateMethodSet.js",
    "./helpers/decorate": "./helpers/decorate.js",
    "./helpers/classPrivateMethodGet": "./helpers/classPrivateMethodGet.js",
    "./helpers/classPrivateMethodSet": "./helpers/classPrivateMethodSet.js",
    "./helpers/wrapRegExp": "./helpers/wrapRegExp.js",
    "./helpers/esm/typeof": "./helpers/esm/typeof.js",
    "./helpers/esm/jsx": "./helpers/esm/jsx.js",
    "./helpers/esm/asyncIterator": "./helpers/esm/asyncIterator.js",
    "./helpers/esm/AwaitValue": "./helpers/esm/AwaitValue.js",
    "./helpers/esm/AsyncGenerator": "./helpers/esm/AsyncGenerator.js",
    "./helpers/esm/wrapAsyncGenerator": "./helpers/esm/wrapAsyncGenerator.js",
    "./helpers/esm/awaitAsyncGenerator": "./helpers/esm/awaitAsyncGenerator.js",
    "./helpers/esm/asyncGeneratorDelegate": "./helpers/esm/asyncGeneratorDelegate.js",
    "./helpers/esm/asyncToGenerator": "./helpers/esm/asyncToGenerator.js",
    "./helpers/esm/classCallCheck": "./helpers/esm/classCallCheck.js",
    "./helpers/esm/createClass": "./helpers/esm/createClass.js",
    "./helpers/esm/defineEnumerableProperties": "./helpers/esm/defineEnumerableProperties.js",
    "./helpers/esm/defaults": "./helpers/esm/defaults.js",
    "./helpers/esm/defineProperty": "./helpers/esm/defineProperty.js",
    "./helpers/esm/extends": "./helpers/esm/extends.js",
    "./helpers/esm/objectSpread": "./helpers/esm/objectSpread.js",
    "./helpers/esm/objectSpread2": "./helpers/esm/objectSpread2.js",
    "./helpers/esm/inherits": "./helpers/esm/inherits.js",
    "./helpers/esm/inheritsLoose": "./helpers/esm/inheritsLoose.js",
    "./helpers/esm/getPrototypeOf": "./helpers/esm/getPrototypeOf.js",
    "./helpers/esm/setPrototypeOf": "./helpers/esm/setPrototypeOf.js",
    "./helpers/esm/isNativeReflectConstruct": "./helpers/esm/isNativeReflectConstruct.js",
    "./helpers/esm/construct": "./helpers/esm/construct.js",
    "./helpers/esm/isNativeFunction": "./helpers/esm/isNativeFunction.js",
    "./helpers/esm/wrapNativeSuper": "./helpers/esm/wrapNativeSuper.js",
    "./helpers/esm/instanceof": "./helpers/esm/instanceof.js",
    "./helpers/esm/interopRequireDefault": "./helpers/esm/interopRequireDefault.js",
    "./helpers/esm/interopRequireWildcard": "./helpers/esm/interopRequireWildcard.js",
    "./helpers/esm/newArrowCheck": "./helpers/esm/newArrowCheck.js",
    "./helpers/esm/objectDestructuringEmpty": "./helpers/esm/objectDestructuringEmpty.js",
    "./helpers/esm/objectWithoutPropertiesLoose": "./helpers/esm/objectWithoutPropertiesLoose.js",
    "./helpers/esm/objectWithoutProperties": "./helpers/esm/objectWithoutProperties.js",
    "./helpers/esm/assertThisInitialized": "./helpers/esm/assertThisInitialized.js",
    "./helpers/esm/possibleConstructorReturn": "./helpers/esm/possibleConstructorReturn.js",
    "./helpers/esm/createSuper": "./helpers/esm/createSuper.js",
    "./helpers/esm/superPropBase": "./helpers/esm/superPropBase.js",
    "./helpers/esm/get": "./helpers/esm/get.js",
    "./helpers/esm/set": "./helpers/esm/set.js",
    "./helpers/esm/taggedTemplateLiteral": "./helpers/esm/taggedTemplateLiteral.js",
    "./helpers/esm/taggedTemplateLiteralLoose": "./helpers/esm/taggedTemplateLiteralLoose.js",
    "./helpers/esm/readOnlyError": "./helpers/esm/readOnlyError.js",
    "./helpers/esm/classNameTDZError": "./helpers/esm/classNameTDZError.js",
    "./helpers/esm/temporalUndefined": "./helpers/esm/temporalUndefined.js",
    "./helpers/esm/tdz": "./helpers/esm/tdz.js",
    "./helpers/esm/temporalRef": "./helpers/esm/temporalRef.js",
    "./helpers/esm/slicedToArray": "./helpers/esm/slicedToArray.js",
    "./helpers/esm/slicedToArrayLoose": "./helpers/esm/slicedToArrayLoose.js",
    "./helpers/esm/toArray": "./helpers/esm/toArray.js",
    "./helpers/esm/toConsumableArray": "./helpers/esm/toConsumableArray.js",
    "./helpers/esm/arrayWithoutHoles": "./helpers/esm/arrayWithoutHoles.js",
    "./helpers/esm/arrayWithHoles": "./helpers/esm/arrayWithHoles.js",
    "./helpers/esm/maybeArrayLike": "./helpers/esm/maybeArrayLike.js",
    "./helpers/esm/iterableToArray": "./helpers/esm/iterableToArray.js",
    "./helpers/esm/iterableToArrayLimit": "./helpers/esm/iterableToArrayLimit.js",
    "./helpers/esm/iterableToArrayLimitLoose": "./helpers/esm/iterableToArrayLimitLoose.js",
    "./helpers/esm/unsupportedIterableToArray": "./helpers/esm/unsupportedIterableToArray.js",
    "./helpers/esm/arrayLikeToArray": "./helpers/esm/arrayLikeToArray.js",
    "./helpers/esm/nonIterableSpread": "./helpers/esm/nonIterableSpread.js",
    "./helpers/esm/nonIterableRest": "./helpers/esm/nonIterableRest.js",
    "./helpers/esm/createForOfIteratorHelper": "./helpers/esm/createForOfIteratorHelper.js",
    "./helpers/esm/createForOfIteratorHelperLoose": "./helpers/esm/createForOfIteratorHelperLoose.js",
    "./helpers/esm/skipFirstGeneratorNext": "./helpers/esm/skipFirstGeneratorNext.js",
    "./helpers/esm/toPrimitive": "./helpers/esm/toPrimitive.js",
    "./helpers/esm/toPropertyKey": "./helpers/esm/toPropertyKey.js",
    "./helpers/esm/initializerWarningHelper": "./helpers/esm/initializerWarningHelper.js",
    "./helpers/esm/initializerDefineProperty": "./helpers/esm/initializerDefineProperty.js",
    "./helpers/esm/applyDecoratedDescriptor": "./helpers/esm/applyDecoratedDescriptor.js",
    "./helpers/esm/classPrivateFieldLooseKey": "./helpers/esm/classPrivateFieldLooseKey.js",
    "./helpers/esm/classPrivateFieldLooseBase": "./helpers/esm/classPrivateFieldLooseBase.js",
    "./helpers/esm/classPrivateFieldGet": "./helpers/esm/classPrivateFieldGet.js",
    "./helpers/esm/classPrivateFieldSet": "./helpers/esm/classPrivateFieldSet.js",
    "./helpers/esm/classPrivateFieldDestructureSet": "./helpers/esm/classPrivateFieldDestructureSet.js",
    "./helpers/esm/classStaticPrivateFieldSpecGet": "./helpers/esm/classStaticPrivateFieldSpecGet.js",
    "./helpers/esm/classStaticPrivateFieldSpecSet": "./helpers/esm/classStaticPrivateFieldSpecSet.js",
    "./helpers/esm/classStaticPrivateMethodGet": "./helpers/esm/classStaticPrivateMethodGet.js",
    "./helpers/esm/classStaticPrivateMethodSet": "./helpers/esm/classStaticPrivateMethodSet.js",
    "./helpers/esm/decorate": "./helpers/esm/decorate.js",
    "./helpers/esm/classPrivateMethodGet": "./helpers/esm/classPrivateMethodGet.js",
    "./helpers/esm/classPrivateMethodSet": "./helpers/esm/classPrivateMethodSet.js",
    "./helpers/esm/wrapRegExp": "./helpers/esm/wrapRegExp.js",
    "./package": "./package.json",
    "./package.json": "./package.json",
    "./regenerator": "./regenerator/index.js",
    "./regenerator/": "./regenerator/"
  },
  "homepage": "https://babeljs.io/",
  "license": "MIT",
  "name": "@babel/runtime",
  "publishConfig": {
    "access": "public"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/babel/babel.git",
    "directory": "packages/babel-runtime"
  },
  "version": "7.12.5"
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////

},"helpers":{"objectSpread2.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// node_modules/@babel/runtime/helpers/objectSpread2.js                                                  //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
module.useNode();
///////////////////////////////////////////////////////////////////////////////////////////////////////////

},"objectWithoutProperties.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// node_modules/@babel/runtime/helpers/objectWithoutProperties.js                                        //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
module.useNode();
///////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".jsx",
    ".mjs"
  ]
});

var exports = require("/node_modules/meteor/modules/server.js");

/* Exports */
Package._define("modules", exports, {
  meteorInstall: meteorInstall
});

})();
