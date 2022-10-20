import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
  queryParams = ['page'];

  @tracked page = 1;

  @inject router;

  @action
  goToPage1() {
    this.router.transitionTo({ queryParams: { page: 1 } });
  }
}
