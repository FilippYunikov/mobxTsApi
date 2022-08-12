import React from 'react';
import {MainStore} from './MainStore';
import {MobXProviderContext} from 'mobx-react';

export const useStores = () => React.useContext(MobXProviderContext);

export const useMainStore = (): MainStore =>
  React.useContext(MobXProviderContext).MainStore;

export default new MainStore();
