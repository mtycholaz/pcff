import {
    Tree,
    formatFiles,
    installPackagesTask,
    names,
    generateFiles,
    joinPathFragments,
    getWorkspaceLayout,
    readProjectConfiguration,
} from '@nrwl/devkit';

import { componentGenerator } from '@nrwl/angular/generators';
import { Schema } from './schema';
import { Tree as NgTree } from '@angular-devkit/schematics';
import { getWorkspace } from '@schematics/angular/utility/workspace';
import { Schema as ComponentSchema } from '@nrwl/angular/src/generators/component/schema';
import { normalizeOptions } from './lib/normalize-options';

export default async function (tree: Tree, schema: Schema) {
    const { libsDir } = getWorkspaceLayout(tree);
    // const name = names(schema.name).fileName;
    // const projectDirectory = schema.path ? `${names(schema.path).fileName}/${name}` : name;
    // const projectRoot = joinPathFragments(libsDir, projectDirectory);

    // const options = normalizeOptions(tree, schema);
    // const { projectSourceRoot, ...schematicOptions } = options;

    const componentSchema = { ...schema };
    delete componentSchema.addContainer;

    // const workspace = await getWorkspace(tree as any);
    // const project = workspace.projects.get(schema.project as string);
    // console.log(project);
    const config = readProjectConfiguration(tree, schema.project || '');
    console.log(config);
    // config.

    let componentPath = schema.path ?? `${libsDir}/${schema.project}/src/lib/components`;
    let containerPath = schema.path ?? `${libsDir}/${schema.project}/src/lib/containers`;

    // run the original generator
    await componentGenerator(tree, { ...componentSchema, path: componentPath } as ComponentSchema);

    if (schema.addContainer) {
        await componentGenerator(tree, {
            ...componentSchema,
            name: schema.name + 'Container',
            inlineStyle: true,
            inlineTemplate: true,
            path: containerPath,
        });
    }

    // Add own custom files
    // generateFiles(
    //     tree, // the virtual file system
    //     joinPathFragments(__dirname, './files'), // path to the file templates)
    //     projectRoot, // destination path of the files
    //     {
    //         ...schema,
    //         name: names(schema.name).className,
    //         fileName: names(schema.name).fileName,
    //         className: names(schema.name).className,
    //         tmpl: '',
    //     } // config object to replace variable in file templates
    // );
}
