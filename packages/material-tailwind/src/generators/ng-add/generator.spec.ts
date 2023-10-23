import { Tree, readProjectConfiguration } from '@nx/devkit';
import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';

import { ngAddGenerator } from './generator';
import { NgAddGeneratorSchema } from './schema';

describe('ng-add generator', () => {
  let tree: Tree;
  const options: NgAddGeneratorSchema = { name: 'test', projectRoot: '.' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await ngAddGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
