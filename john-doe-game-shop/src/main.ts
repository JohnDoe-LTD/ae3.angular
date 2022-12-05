import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { Settings } from './app/core/models/settings';

fetch('assets/data/settings.json')
  .then((response) => response.json())
  .then((setting: Settings) => {
    const options = {
      provide: 'settings',
      useValue: setting,
    };

    platformBrowserDynamic([options])
      .bootstrapModule(AppModule)
      .catch((err) => console.error(err));
  })
  .catch((err) => console.log(err));
