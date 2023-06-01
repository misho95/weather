function SwitchTemp( { switchTemp, setSwitchTemp } ){

    const switchToF = () => {
        setSwitchTemp(false);
    }

    const switchToC = () => {
        setSwitchTemp(true);
    }

    const active = "bg-slate-300 rounded-full px-2 py-1 text-slate-950 flex";
    const deActive = "bg-slate-600 rounded-full px-2 py-1 text-slate-300 flex";


    return(
        <div className="w-full flex gap-3 justify-end">
            <button onClick={switchToC} className={switchTemp ? active : deActive} >
                <span className="text-sm">O</span>
                <span className="text-2xl">C</span>
            </button>
            <button onClick={switchToF} className={switchTemp ? deActive : active}>
                <span className="text-sm">O</span>
                <span className="text-2xl">F</span>
            </button>
        </div>
    )
}

export default SwitchTemp;