import Icon from './icons/cloudy.png';

function WeatherDetails(){
    return(
        <div className='h-full'>
            <div className='h-full flex flex-col items-center justify-evenly select-none'>
                <div className='w-1/2'>
                    <img src={Icon} className='w-full drop-shadow-md'/>
                </div>
                <span className='flex justify-center items-center shadow-sm'>
                        <span className='text-7xl '>1</span>
                        <span className='text-8xl'>5</span>
                    <span className='text-sm'>O</span>
                    <span className='text-3xl'>C</span>
                </span>
                <h2 className='text-2xl shadow-sm'> Shower </h2>
                <p className='shadow-sm'>Today . Fri,5Jun</p>
                <span className='shadow-sm'>Helsinki</span>
            </div>
        </div>
    )
}

export default WeatherDetails;