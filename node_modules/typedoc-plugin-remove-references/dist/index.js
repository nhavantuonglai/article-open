"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.load = void 0;
const typedoc_1 = require("typedoc");
function load({ application }) {
    application.converter.on(typedoc_1.Converter.EVENT_RESOLVE_BEGIN, (context) => {
        for (const reflection of context.project.getReflectionsByKind(typedoc_1.ReflectionKind.Reference)) {
            context.project.removeReflection(reflection);
        }
    });
}
exports.load = load;
