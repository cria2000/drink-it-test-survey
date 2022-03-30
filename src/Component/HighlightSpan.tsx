import * as React from 'react';

type Props = {
    originKeyword: string
    highlightKeyword: string
};
export const HighlightSpan = ({originKeyword, highlightKeyword}: Props) => {

    const index = originKeyword?.toString().indexOf(highlightKeyword)
    return (
        index > 0 ?
        <div className="highlight_span">
            <span style={{whiteSpace: 'pre'}}>{originKeyword?.toString().substring(0, index)}</span>
            <span style={{ color: '#FF4401', whiteSpace: 'pre' }}>{highlightKeyword}</span>
            <span style={{ whiteSpace: 'pre' }}>{originKeyword?.toString().substring(index + highlightKeyword.length)}</span>
        </div> : <span>{originKeyword}</span>
    );
};