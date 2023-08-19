//import {react} from "react"
interface GrassProps {
    /**
     * GitHubのコントリビュート数
     */
    contributes: number
    /**
     * ツールチップを表示する場合のターゲットID
     */
    dataToolTipTarget?: string
}

/**
 * GitHubへのコントリビュート数の草
 */
export const Grass = (
    { contributes, dataToolTipTarget = "" }: GrassProps
): JSX.Element => {
    return (
        <button
            data-tooltip-target={dataToolTipTarget}
            className={[
                'h-3 w-3',
                'rounded-sm',
                'border-solid border-2',
                0 == contributes && 'border-gray-200 bg-gray-200 hover:bg-gray-200',
                0 < contributes && contributes < 5 && 'border-green-400 bg-green-400',
                5 <= contributes && contributes < 10 && 'border-green-500 bg-green-500',
                10 <= contributes && contributes < 15 && 'border-green-600 bg-green-600',
                15 <= contributes && 'border-green-700 bg-green-700',
            ].join(" ")}></button>
    )
}