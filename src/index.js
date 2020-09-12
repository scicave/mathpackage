import core from './core/index.js';
import engine from './engine/index.js';
import geometry from './geometry/index.js'
import fraction from './fraction/index.js';

import vector from './vector';
import matrix from './vector';

import version from './version.js';

export default {

   core,
   // make sure the API's identifiers are unique
   ...core,
   
   engine,
   // make sure the API's identifiers are unique
   ...engine,
   
   geometry,
   // make sure the API's identifiers are unique
   ...geometry,

   fraction,
   // make sure the API's identifiers are unique
   ...fraction,

   vector,
   matrix,

   version,

};
