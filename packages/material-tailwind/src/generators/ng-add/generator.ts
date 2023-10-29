import { intro } from '@clack/prompts';
import { Tree, addDependenciesToPackageJson, formatFiles } from '@nx/devkit';
import { NgAddGeneratorSchema } from './schema';

export async function ngAddGenerator(tree: Tree, options: NgAddGeneratorSchema) {
  intro('Welcome to the @vp-autox/material-tailwind generator!');

  const projectRoot = options.projectRoot;

  if (!projectRoot) {
    throw new Error('projectRoot is required!');
  }

  // addProjectConfiguration(tree, '', {
  //   root: projectRoot,
  //   projectType: 'application',
  //   sourceRoot: `${projectRoot}/src`,
  //   targets: {},
  // });
  // generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);
  await formatFiles(tree);
  return addDependenciesToPackageJson(
    tree,
    {
      '@angular/material': '^16.2.7',
    },
    {
      'tailwindcss': '^3.3.3',
      'autoprefixer': '^10.4.16',
      'postcss': '^8.4.31',
    }
  );
}

export default ngAddGenerator;
