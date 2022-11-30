import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

fetch('assets/data/settings.json')
  .then((response) => response.json())
  .then((setting) => {
    const options = {
      provide: 'OPTIONS',
      useValue: setting
    };
    platformBrowserDynamic([ options ])
      .bootstrapModule(AppModule)
      .catch((err) => console.error(err));
  })
  .catch(err => console.log(err));
