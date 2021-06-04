import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
/**
 * @param _options - Options passed to the schematic
 * @returns the schematic Rule.
 */
export const scitizenSchematics = ( _options: unknown ): Rule => ( tree: Tree, _context: SchematicContext ) => tree;
