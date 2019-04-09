import { createStore } from 'redux';

import { rootReducer } from './rootReducer';

//enhancedStore
import {enhancedStore} from './middleware/core'

export const store = createStore(rootReducer, enhancedStore );
