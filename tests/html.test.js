import { fireEvent, getByText } from '@testing-library/dom';
import '@testing-library/dom/extend-expect';
import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'paath';

const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf-8');
