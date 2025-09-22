"use client";

import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface CodeBlockProps {
	code: string;
	language?: string;
	showLineNumbers?: boolean;
}

export function CodeBlock({
	code,
	language = "typescript",
	showLineNumbers = true
}: CodeBlockProps) {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	// Procesar el código para manejar caracteres de escape correctamente
	const processedCode = code
		.replace(/\\n/g, '\n')
		.replace(/\\t/g, '\t')
		.replace(/\\r/g, '\r');

	if (!isClient) {
		return (
			<div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
				<pre className="text-sm font-mono whitespace-pre-wrap">
					<code>{processedCode}</code>
				</pre>
			</div>
		);
	}

	return (
		<div className="relative">
			<div className="rounded-[8px] overflow-hidden">
				<SyntaxHighlighter
					language={language}
					style={materialDark}
					showLineNumbers={showLineNumbers}
					customStyle={{
						margin: 0,
						borderRadius: '0.5rem',
						fontSize: '14px',
					}}
					codeTagProps={{
						style: {
							fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
						}
					}}
					lineNumberStyle={{
						minWidth: '3em',
						paddingRight: '1em',
						color: '#6B7280',
						backgroundColor: 'transparent',
						borderRight: '1px solid #374151',
						marginRight: '1em'
					}}
				>
					{processedCode}
				</SyntaxHighlighter>
			</div>
		</div>
	);
}