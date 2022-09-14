
import { libraryGenerator } from '@nrwl/workspace/generators';
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

export default async function (tree: Tree, schema: any) {
    const { libsDir } = getWorkspaceLayout(tree);
    const name = names(schema.name).fileName;
    const projectDirectory = `${names(schema.project).fileName}/src/lib/state`;
    const projectRoot = joinPathFragments(libsDir, projectDirectory);

    // Maybe one day when we have time, we can add the state to the
    // module the same way routes are added to the router module
    //
    // https://github.com/angular/angular-cli/blob/3be0f5f96c2ffb4aa9a0430bf545dd977e090e6c/packages/schematics/angular/utility/add-declaration-to-ng-module.ts#L26
    // https://github.com/angular/angular-cli/blob/3be0f5f96c2ffb4aa9a0430bf545dd977e090e6c/packages/schematics/angular/utility/ast-utils.ts#L632

    generateFiles(
        tree, // the virtual file system
        joinPathFragments(__dirname, './files'), // path to the file templates)
        projectRoot, // destination path of the files
        {
            ...schema,
            name: names(schema.name).className,
            fileName: names(schema.name).fileName,
            className: names(schema.name).className,
            stateName: names(schema.name).className,
            tmpl: '',
        } // config object to replace variable in file templates
    );
}
