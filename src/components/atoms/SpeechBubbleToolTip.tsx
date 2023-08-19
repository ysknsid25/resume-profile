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
        <div id={id} role="tooltip" className={[
            "whitespace-nowrap",
            "rounded-md",
            "bg-gray-700",
            "px-4",
            "py-2",
            "text-white",
            "text-xs",
            "absolute",
            "-top-9",
            "left-1/2",
            "-translate-x-1/2",
            "before:content-['']",
            "before:absolute",
            "before:-translate-x-1/2",
            "before:left-1/2",
            "before:top-full",
            "before:border-4",
            "before:border-transparent",
            "before:border-t-gray-700",
            "opacity-0",
            "group-hover:opacity-100",
            "transition",
            "pointer-events-none",
        ].join(" ")}>
            {content}
            <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
    )
}