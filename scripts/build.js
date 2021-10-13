#!/usr/bin/env node

const { writeFileSync } = require("fs");
const yaml = require("js-yaml");
const { join } = require("path");
const request = require("request");
const { camelCase } = require("camel-case");

const languagesFilename = join(__dirname, "..", "languages.json");

/**
 * Sanitize the languages JSON object.
 *
 * @param  {Object} obj
 * @return {Object}
 */
const sanitizeYaml = function (obj) {
  Object.keys(obj).forEach(function (language) {
    Object.keys(obj[language]).forEach(function (key) {
      const value = obj[language][key];

      delete obj[language][key];
      obj[language][camelCase(key)] = value;
    });
  });

  return obj;
};

/**
 * Make a request to the YAML file hosted by GitHub and convert to JSON.
 */
request(
  "https://raw.githubusercontent.com/github/linguist/master/lib/linguist/languages.yml",
  function (err, res, body) {
    const languages = sanitizeYaml(yaml.load(body));

    writeFileSync(languagesFilename, JSON.stringify(languages, null, 2));
  }
);
