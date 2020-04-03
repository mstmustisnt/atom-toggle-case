'use babel';

import { CompositeDisposable } from 'atom';

export default {
  activate(state) {
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'toggle-case:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  startsWithLower(text) {
    const [char] = text;

    return char === char.toLowerCase();
  },


  toggle() {
    const editor = atom.workspace.getActiveTextEditor();

    if (editor) {
      editor.mutateSelectedText(::this.changeCase);
    }
  },

  changeCase(selection) {
    const text = selection.getText();
    if (!text) {
      return;
    }
    const isLower = this.startsWithLower(text);
    selection.deleteSelectedText();

    if (isLower) {
      selection.insertText(text.toUpperCase());
    } else {
      selection.insertText(text.toLowerCase());
    }
  }
};
