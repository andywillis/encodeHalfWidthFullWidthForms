import { readFile } from 'fs/promises';
import journalMarkdownConverter from '../src/index';

const markdown = await readFile('./data/journal.md', 'utf8');

const json = await journalMarkdownConverter(markdown);

console.dir(json, { depth: null });
