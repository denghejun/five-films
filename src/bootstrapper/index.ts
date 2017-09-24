import { AppBootstrapper } from './app-bootstrapper'
const bootstrapper = new AppBootstrapper();
const container = bootstrapper.start();

export { container as Container }
