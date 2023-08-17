interface SpeechBubbleToolTipProps {
    /** DOMツリー上のID */
    id: string;
    /** ツールチップ内部のメッセージ */
    content: string;
}

/**
 * 吹き出しツールチップ
 */
export const SpeechBubbleToolTip = (
    { id, content }: SpeechBubbleToolTipProps
): JSX.Element => {
    return (
        <div id={id} role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            {content}
            <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
    )
}