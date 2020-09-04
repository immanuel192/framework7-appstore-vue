import * as path from 'path';
import Chance from 'chance';

export const chance = new Chance();
export * from '@vue/test-utils';

export const suiteName = (file: string) => path.relative(`${__dirname}/../..`, file).split(path.sep).join('#');
