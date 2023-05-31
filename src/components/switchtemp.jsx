function SwitchTemp(){
    return(
        <div className="w-full flex gap-3 justify-end">
            <button className="bg-slate-300 rounded-full px-2 py-1 text-slate-950 flex">
                <span className="text-sm">O</span>
                <span className="text-2xl">C</span>
            </button>
            <button className="bg-slate-600 rounded-full px-2 py-1 text-slate-300 flex">
                <span className="text-sm">O</span>
                <span className="text-2xl">F</span>
            </button>
        </div>
    )
}

export default SwitchTemp;