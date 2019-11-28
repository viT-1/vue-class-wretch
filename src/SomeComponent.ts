import Component from 'vue-class-component';

import { BaseComponent } from './BaseComponent';

@Component({
	name: 'my-component',
	template: '<span class="my-component">Vue Started!</span>',
})
export class SomeComponent extends BaseComponent {}
