type GetCardsByName = { command: 'getCardsByName'; name: string };

type RawApplicationCommand = GetCardsByName;
type RawApplicationAPIInterface = (command: RawApplicationCommand) => Promise<string>;

class ApplicationAPI {
	private api: RawApplicationAPIInterface;

	constructor() {
		this.api = (window as any).__application__;
	}

	async getCardsByName(name: string) {
		return this.api({
			command: 'getCardsByName',
			name: name
		}).then((result) => console.log(result));
	}
}

export default new ApplicationAPI();
