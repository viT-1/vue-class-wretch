import Component from 'vue-class-component';

import { BaseComponent } from './BaseComponent';

@Component({
	name: 'my-component',
	template: '<span class="my-component"></span>',
})
export class SomeComponent extends BaseComponent {}
