import { Grass } from "../atoms/Grass"
import { SpeechBubbleToolTip } from "../atoms/SpeechBubbleToolTip"

interface LawnProps {
    /** 日別のコントリビュート数のリスト */
    contributesList: Array<number>
}

/**
 * 特定の日付範囲における草コンポーネントの成体
 */
export const Lawn = ({ contributesList }: LawnProps): JSX.Element => {
    return (
        <div className="border border-1 rounded-md border-gray-200 px-8 py-4">
            <div className="grid grid-cols-1 gap-1">
                {contributesList.map((contributes, index) => {
                    const id = `grassToolTip${index}`
                    return (
                        <div key={index} className="flex justify-center relative group">
                            <Grass contributes={contributes} dataToolTipTarget={id} />
                            <SpeechBubbleToolTip id={id} content={`${contributes} contribution on xxx date`} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}