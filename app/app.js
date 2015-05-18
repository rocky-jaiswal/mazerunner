import ui from './lib/ui';
import engine from './lib/engine';

var os = require('os');

// window.env contains data from config/env_XXX.json file.
var envName = window.env.name;

ui.render();
var path = engine.solve();
ui.highlight(path);
