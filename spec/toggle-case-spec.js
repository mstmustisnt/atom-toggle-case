'use babel';

import ToggleCase from '../lib/toggle-case';

describe('ToggleCase', () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('selection-toggle-case');
  });

  describe('when the selection-toggle-case:toggle event is triggered', () => {
    it('changed mixed case starting with a lower-cased letter to upper case', () => {
      const initialValue = 'mIxedCase';
      const expectedValue = initialValue.toUpperCase();

      const fakeSelection = {
        getText: () => initialValue,
        deleteSelectedText: () => {},
        insertText: () => {},
      };
      const fakeEditor = {
        mutateSelectedText: (callback) => callback(fakeSelection),
      };

      spyOn(atom.workspace, 'getActiveTextEditor').andReturn(fakeEditor);
      spyOn(fakeEditor, 'mutateSelectedText').andCallThrough();
      spyOn(fakeSelection, 'getText').andCallThrough();
      spyOn(fakeSelection, 'deleteSelectedText').andCallThrough();
      spyOn(fakeSelection, 'insertText').andCallThrough();

      atom.commands.dispatch(workspaceElement, 'selection-toggle-case:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        expect(atom.workspace.getActiveTextEditor).toHaveBeenCalled();
        expect(fakeEditor.mutateSelectedText).toHaveBeenCalled();
        expect(fakeSelection.deleteSelectedText).toHaveBeenCalled();
        expect(fakeSelection.getText).toHaveBeenCalled();
        expect(fakeSelection.insertText).toHaveBeenCalledWith(expectedValue);
      });
    });

    it('changed mixed case starting with a upper-cased letter to lower case', () => {
      const initialValue = 'MixedCase';
      const expectedValue = initialValue.toLowerCase();

      const fakeSelection = {
        getText: () => initialValue,
        deleteSelectedText: () => {},
        insertText: () => {},
      };
      const fakeEditor = {
        mutateSelectedText: (callback) => callback(fakeSelection),
      };

      spyOn(atom.workspace, 'getActiveTextEditor').andReturn(fakeEditor);
      spyOn(fakeEditor, 'mutateSelectedText').andCallThrough();
      spyOn(fakeSelection, 'getText').andCallThrough();
      spyOn(fakeSelection, 'deleteSelectedText').andCallThrough();
      spyOn(fakeSelection, 'insertText').andCallThrough();

      atom.commands.dispatch(workspaceElement, 'selection-toggle-case:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        expect(atom.workspace.getActiveTextEditor).toHaveBeenCalled();
        expect(fakeEditor.mutateSelectedText).toHaveBeenCalled();
        expect(fakeSelection.deleteSelectedText).toHaveBeenCalled();
        expect(fakeSelection.getText).toHaveBeenCalled();
        expect(fakeSelection.insertText).toHaveBeenCalledWith(expectedValue);
      });
    });

    it('changed lower-cased to upper case', () => {
      const initialValue = 'lowercase';
      const expectedValue = initialValue.toUpperCase();

      const fakeSelection = {
        getText: () => initialValue,
        deleteSelectedText: () => {},
        insertText: () => {},
      };
      const fakeEditor = {
        mutateSelectedText: (callback) => callback(fakeSelection),
      };

      spyOn(atom.workspace, 'getActiveTextEditor').andReturn(fakeEditor);
      spyOn(fakeEditor, 'mutateSelectedText').andCallThrough();
      spyOn(fakeSelection, 'getText').andCallThrough();
      spyOn(fakeSelection, 'deleteSelectedText').andCallThrough();
      spyOn(fakeSelection, 'insertText').andCallThrough();

      atom.commands.dispatch(workspaceElement, 'selection-toggle-case:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        expect(atom.workspace.getActiveTextEditor).toHaveBeenCalled();
        expect(fakeEditor.mutateSelectedText).toHaveBeenCalled();
        expect(fakeSelection.deleteSelectedText).toHaveBeenCalled();
        expect(fakeSelection.getText).toHaveBeenCalled();
        expect(fakeSelection.insertText).toHaveBeenCalledWith(expectedValue);
      });
    });

    it('changed upper-cased to lower case', () => {
      const initialValue = 'UPPERCASE';
      const expectedValue = initialValue.toLowerCase();

      const fakeSelection = {
        getText: () => initialValue,
        deleteSelectedText: () => {},
        insertText: () => {},
      };
      const fakeEditor = {
        mutateSelectedText: (callback) => callback(fakeSelection),
      };

      spyOn(atom.workspace, 'getActiveTextEditor').andReturn(fakeEditor);
      spyOn(fakeEditor, 'mutateSelectedText').andCallThrough();
      spyOn(fakeSelection, 'getText').andCallThrough();
      spyOn(fakeSelection, 'deleteSelectedText').andCallThrough();
      spyOn(fakeSelection, 'insertText').andCallThrough();

      atom.commands.dispatch(workspaceElement, 'selection-toggle-case:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        expect(atom.workspace.getActiveTextEditor).toHaveBeenCalled();
        expect(fakeEditor.mutateSelectedText).toHaveBeenCalled();
        expect(fakeSelection.deleteSelectedText).toHaveBeenCalled();
        expect(fakeSelection.getText).toHaveBeenCalled();
        expect(fakeSelection.insertText).toHaveBeenCalledWith(expectedValue);
      });
    });

    it('does not break if there is no editor', () => {
      spyOn(atom.workspace, 'getActiveTextEditor').andReturn(undefined);
      atom.commands.dispatch(workspaceElement, 'selection-toggle-case:toggle');

      waitsForPromise(() => activationPromise);

      runs(() => {
        expect(() => ToggleCase.toggle()).not.toThrow();
        expect(atom.workspace.getActiveTextEditor).toHaveBeenCalled();
      });
    });

    it('does not break if there is no selected text in the editor', () => {
      const fakeSelection = {
        getText: () => undefined,
        deleteSelectedText: () => {},
        insertText: () => {},
      };
      const fakeEditor = {
        mutateSelectedText: (callback) => callback(fakeSelection),
      };

      spyOn(atom.workspace, 'getActiveTextEditor').andReturn(fakeEditor);
      spyOn(fakeEditor, 'mutateSelectedText').andCallThrough();
      spyOn(fakeSelection, 'getText').andCallThrough();
      spyOn(fakeSelection, 'deleteSelectedText').andCallThrough();
      spyOn(fakeSelection, 'insertText').andCallThrough();

      atom.commands.dispatch(workspaceElement, 'selection-toggle-case:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        expect(atom.workspace.getActiveTextEditor).toHaveBeenCalled();
        expect(fakeEditor.mutateSelectedText).toHaveBeenCalled();
        expect(fakeSelection.getText).toHaveBeenCalled();
        expect(fakeSelection.deleteSelectedText).not.toHaveBeenCalled();
        expect(() => ToggleCase.toggle()).not.toThrow();
        expect(fakeSelection.insertText).not.toHaveBeenCalled();
      });
    });
  });
});
