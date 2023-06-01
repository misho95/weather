
function WeatherDetails({data, city}){

    let current ='';
    let location = '';
    let condition = '';

    if(data !== undefined){
        location = data.location;
        current = data.current
        if(current){
            condition = current.condition
        }

      
       
       // console.log(condition);
    }
   

    return(
        <div className='h-full'>
            <div className='h-full flex flex-col items-center justify-evenly select-none'>
                <div className='w-1/2'>
                    <img src={ condition.icon } className='w-full drop-shadow-md'/>
                </div>
                <span className='flex justify-center items-center shadow-sm'>
                        <span className='text-7xl '>1</span>
                        <span className='text-8xl'>5</span>
                    <span className='text-sm'>O</span>
                    <span className='text-3xl'>C</span>
                </span>
                <h2 className='text-2xl shadow-sm'> {condition.text} </h2>
                <p className='shadow-sm'>{location ? location.localtime : ''}</p>
                <span className='shadow-sm'>{city}</span>
            </div>
        </div>
    )
}

export default WeatherDetails;