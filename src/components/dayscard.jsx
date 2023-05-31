import Icon from './icons/cloudy.png';

function DaysCard(props){
    return(
        <div className='bg-slate-800 p-5 w-40 max-w-sm'>
           <h1 className='text-center text-slate-300'>{props.date}</h1>
           <img src={Icon} />
           <div className='flex justify-around'>
            <div className='text-slate-300'>
                <span className='text-lg'>16</span>
                <span className='text-xs'>O</span>
                <span className='text-lg'>C</span>
            </div>
            <div className='text-slate-500'>
                <span className='text-lg'>11</span>
                <span className='text-xs'>O</span>
                <span className='text-lg'>C</span>
            </div>

           </div>
        </div>
    )
}

export default DaysCard;