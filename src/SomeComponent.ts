// import Vue from 'vue';
import { Component, Mixins, Prop, Watch } from 'vue-property-decorator';
import wretch from 'wretch';

import { BemComponent } from './BemComponent';

interface IData {
	href: string;
}

@Component({
	name: 'my-component',
	template: '<div class="my-component"><h3>Vue Started!</h3><h4>tsconfig.json:</h4><p>{{tsconfig}}</p></div>',
})
export class SomeComponent extends Mixins(BemComponent) {
	constructor() {
		super();
		this.smth = 'Something';
	}

	// we cannot doing this in constructor due to class properties reactivity
	mounted() {
		wretch('/tsconfig.json')
			.get()
			.json(jsonResp => {
				this.tsconfig = jsonResp as String;
			});
	}

	@Prop()
	readonly data?: IData;

	tsconfig: String | null = null;
	smth: String;

	@Watch('tsconfig')
	tsconfigChanged(val: String, oldval: String): void {
		console.log(`tsconfig was ${oldval}, becomes: ${val}`);
	}
}
