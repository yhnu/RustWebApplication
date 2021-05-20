type SelectFileCommand = { command: 'fileDialog' };
type ReadFileCommand = { command: 'readFile'; filename: string };
type PrintCommand = { command: 'print'; message: string };

type RawNativeCommand = PrintCommand | SelectFileCommand | ReadFileCommand;
type RawNativeAPIInterface = (command: RawNativeCommand) => Promise<string>;

class NativeAPI {
	private api: RawNativeAPIInterface;

	constructor() {
		this.api = (window as any).__native__;
	}

	async print(message: string) {
		return this.api({ command: 'print', message: message });
	}

	async openFile() {
		return this.api({ command: 'fileDialog' }).then(
			async (filename) => {
				console.log(filename);
				let res = await this.readFile(filename);
				console.log(res);
			},
			(error) => alert(error)
		);
	}

	async readFile(filename: string) {
		return this.api({
			command: 'readFile',
			filename: filename
		});
	}
}

export default new NativeAPI();
