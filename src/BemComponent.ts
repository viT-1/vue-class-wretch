import { Component, Prop, Vue } from 'vue-property-decorator';

interface IBem {
	readonly block: string;
	blockParent?: string;
	readonly mod?: string;
}

@Component
export class BemComponent extends Vue implements IBem {
	constructor() {
		super();
		this.b = { block: 'bemComponent' };
	}

	protected b: IBem;

	@Prop(String)
	blockParent?: string;

	get block(): string {
		return this.b.block;
	}

	get mod(): string | undefined {
		return this.b.mod ? `_${this.b.mod}` : undefined;
	}

	getClassComponent(): string {
		let retClass = this.block;

		if (this.mod)
			retClass += ` ${this.mod}`;

		if (this.blockParent)
			retClass += ` ${this.blockParent}__${this.block}`;

		return retClass;
	}

	get classComponent(): string {
		return this.getClassComponent();
	}
}
