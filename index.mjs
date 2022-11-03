import pkg from '@hediet/debug-visualizer-data-extraction';
const { getDataExtractorApi } = pkg;

getDataExtractorApi().registerExtractor({
	id: "my-foo-extractor",
	getExtractions: (data, collector) => {
		if (data instanceof Foo) {
			collector.addExtraction({
				id: "my-foo-extraction",
				name: "My Foo Extraction",
				priority: 2000,
				extractData: () => ({ kind: { text: true }, text: "Foo" }),
			});
		}
	},
});

setTimeout(() => {
	new Main().run();
}, 0);

class Foo {}

class Main {
	run() {
		const f = new Foo();
		// if `f` is watched by the Debug Visualizer,
		// `my-foo-extractor` will provide the data for the visualizers.
		// See `CommonDataTypes` for data types that have built in visualizers.
		debugger;
	}
}