// import Vue from 'vue';
import { Component, Mixins } from 'vue-property-decorator';
import wretch from 'wretch';

import { BaseComponent } from './BaseComponent';

@Component({
	name: 'my-component',
	template: '<div class="my-component"><h3>Vue Started!</h3><h4>tsconfig.json:</h4><p>{{tsconfig}}</p></div>',
})
export class SomeComponent extends Mixins(BaseComponent) {
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
