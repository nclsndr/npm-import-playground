import type { Engine } from "@nclsndr/npm-export-playground";
import { withScope } from "@nclsndr/npm-export-playground";

let engine: Engine;

engine = withScope.createEngine();

const result = withScope.add(1, 2);
