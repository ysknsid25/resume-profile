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
        <div className="grid grid-cols-1 gap-2">
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
            <div className="flex items-center justify-end gap-1">
                <div className="text-gray-400 text-xs">
                    Less
                </div>
                <Grass contributes={0} dataToolTipTarget="grassSample1" />
                <Grass contributes={3} dataToolTipTarget="grassSample2" />
                <Grass contributes={6} dataToolTipTarget="grassSample3" />
                <Grass contributes={11} dataToolTipTarget="grassSample4" />
                <Grass contributes={16} dataToolTipTarget="grassSample5" />
                <div className="text-gray-400 text-xs">
                    More
                </div>
            </div>
        </div>
    )
}