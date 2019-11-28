import Vue from 'vue';
import { Vue as TypeVue } from 'vue/types/vue';

import { SomeComponent } from './SomeComponent';

export class VueApp {
	public static init(): TypeVue | null {
		return new Vue({
			el: '#app',
			components: {
				SomeComponent
			},
		});
	}
}
