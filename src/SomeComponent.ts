// import Vue from 'vue';
import Component from 'vue-class-component';
import wretch from 'wretch';

import { BaseComponent } from './BaseComponent';

@Component({
	name: 'my-component',
	template: '<div class="my-component"><h3>Vue Started!</h3><h4>tsconfig.json:</h4><p>{{tsconfig}}</p></div>',
})
export class SomeComponent extends BaseComponent {
	// we cannot doing this in constructor due to class properties reactivity
	mounted() {
		wretch('/tsconfig.json')
			.get()
			.json(jsonResp => {
				this.tsconfig = jsonResp as String;
			});
	}

	tsconfig: String | null = null;
}
