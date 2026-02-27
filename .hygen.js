const os = require("os");
const path = require("path");

const template_root = path.join(os.homedir(), "my_program/generators/templates");

module.exports = {
  templates: template_root,
  helpers: {
    src: () => template_root,
  },
};

