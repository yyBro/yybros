import React from 'react';
import styled from '@emotion/styled';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
const MarkDownStyle = styled.div`
    font-size : 1rem;
    line-height : 2.5rem;
`;

const markdown = `
# 헤딩

**굵게**

일반 텍스트

\`\`\`
code block
\`\`\`

*기울이기*
글자 \`배경색\`

 > 인용문
`;


const InlinCode = styled.span`
background: yellow;
`;

function InlineCodeBlock(children: { value: React.ReactNode}){
    return <InlinCode>{children.value}</InlinCode>;
}

const Pre = styled.pre`
    background-color: #e5eaee;
    padding: 2rem;
    line-height: 1.5rem;
    margin: 2rem auto;
`;

function CodeBlock( children: {value: React.ReactNode}) {
    return (
        <Pre>
            <code>{children.value}</code>
        </Pre>
    )
}

const BlockQuoteStyle = styled.blockquote`
    padding: 1rem;
    border: 1px dashed black;
`;

function BlockQuote(children: {children: React.ReactNode}) {
    return <BlockQuoteStyle>{children.children}</BlockQuoteStyle>;
}
function MarkdownRenderer(){
    return (
        <MarkDownStyle>
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                >
                {markdown}
            </ReactMarkdown>
        </MarkDownStyle>
    )
}
export default MarkdownRenderer;