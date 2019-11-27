import { Component,	Mixins } from 'vue-property-decorator';

import { BaseComponent } from './BaseComponent';

@Component({
	name: 'my-component',
	template: '<span class="my-component"></span>',
})
export class SomeComponent extends Mixins(BaseComponent) {}
