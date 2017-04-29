import environment from './environment';
import moment from 'moment';
import 'moment/locale/fr';

moment.locale('fr-FR');

//Configure Bluebird Promises.
Promise.config({
  warnings: false
});

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('resources')
    .plugin('aurelia-chart')
    .plugin('aurelia-validation');

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(() => aurelia.setRoot());
}
