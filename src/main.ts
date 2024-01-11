// @ts-nocheck
import * as vscode from 'vscode';


export function activate(context: vscode.ExtensionContext) {
    const command = 'streamline.build.currentFile';
  
    function commandHandler() {
        vscode.commands.executeCommand("workbench.action.terminal.sendSequence", "echo foo")
    }
    
    context.subscriptions.push(vscode.commands.registerCommand(command, commandHandler));
}