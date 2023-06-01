function Slider(props){
    return (
        <div className="text-sm flex flex-col gap-1">
            <div className="flex justify-between">
                <span>0</span>
                <span>50</span>
                <span>100</span>
            </div>
            <div>
                <div className="bg-slate-500 h-2 rounded-full relative">
                    <div className="absolute bg-yellow-300 h-2 rounded-full" style={{width: props.val+'%'}}></div>
                </div>
            </div>
            <div className="text-right">%</div>
        </div>
    )
}

export default Slider;