type JsonLdValue =
	| string
	| number
	| boolean
	| null
	| JsonLdValue[]
	| { [key: string]: JsonLdValue };

export function JsonLd({ data }: { data: JsonLdValue }) {
	return (
		<script
			type="application/ld+json"
			// JSON stringification is safe here because the data is authored in code,
			// not accepted from users. Escaping "<" prevents script-tag breakouts.
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(data).replace(/</g, "\\u003c"),
			}}
		/>
	);
}
