import * as React from 'react';

type Props = {
    originKeyword: string
    highlightKeyword: string
    className?: string
};
export const HighlightSpan = ({originKeyword, highlightKeyword, className}: Props) => {

    const index = originKeyword?.toString().indexOf(highlightKeyword)
    return (
        index > 0 ?
        <div className="highlight_span">
            <span className={className} style={{whiteSpace: 'pre'}}>{originKeyword?.toString().substring(0, index)}</span>
            <span className={className} style={{ color: '#FF4401', whiteSpace: 'pre' }}>{highlightKeyword}</span>
            <span className={className} style={{ whiteSpace: 'pre' }}>{originKeyword?.toString().substring(index + highlightKeyword.length)}</span>
        </div> : <span className={className}>{originKeyword}</span>
    );
};