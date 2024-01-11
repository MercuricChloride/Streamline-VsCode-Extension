"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
// @ts-nocheck
const vscode = require("vscode");
function activate(context) {
    const command = 'streamline.build.currentFile';
    function commandHandler() {
        vscode.commands.executeCommand("workbench.action.terminal.sendSequence", "echo foo");
    }
    context.subscriptions.push(vscode.commands.registerCommand(command, commandHandler));
}
exports.activate = activate;
//# sourceMappingURL=main.js.map