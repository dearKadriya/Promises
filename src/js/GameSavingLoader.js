/* eslint-disable */
import read from './reader.js';
import json from './parser.js';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve) => {
      read()
        .then((data) => json(data))
        .then((buffer) => resolve(buffer));
    });
  }
}
