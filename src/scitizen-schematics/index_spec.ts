import * as path from 'path';

import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';


const collectionPath = path.join( __dirname, '../collection.json' );


describe( 'scitizen-schematics', () => {
	it( 'works', async () => {
		const runner = new SchematicTestRunner( 'schematics', collectionPath );
		const tree = await runner.runSchematicAsync( 'scitizen-schematics', {}, Tree.empty() ).toPromise();

		expect( tree.files ).toEqual( [] );
	} );
} );
