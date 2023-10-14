import type { Engine } from "@nclsndr/npm-export-playground";
import { withScope } from "@nclsndr/npm-export-playground";
import type { Message } from "@nclsndr/npm-export-playground/utils.js";
import type { Message as DopeMess } from "@nclsndr/npm-export-playground/just-utils";
import p from "@nclsndr/npm-export-playground/package.json";

let engine: Engine;

engine = withScope.createEngine();

const result = withScope.add(1, 2);

const message2: DopeMess = {
  level: "information",
  message: "Hello World",
};

const message: Message = {
  level: "information",
  message: "Hello World",
};
console.log(message);

console.log(p.version);
