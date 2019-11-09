// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
// const context = require.context('./', true, /\.spec\.ts$/);

// If you want to run a specific test file then use below one
const context = require.context('./', true, /app.component\.spec\.ts$/);

// If you want to test a particular module then use below one.
// const context = require.context('./MODULE_PATH', true, /\.spec\.ts$/);

// And load the modules.
context.keys().map(context);
