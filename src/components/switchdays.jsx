import DaysCard from "./dayscard";

function SwitchDays({switchTemp}) {
    return(
        <div className="flex flex-wrap justify-center gap-10">
            <DaysCard date={'Tomorrow'} switchTemp={switchTemp} />
            <DaysCard date={'Sun, 7 Jun'} switchTemp={switchTemp} />
            <DaysCard  date={'Mon, 8 Jun'} switchTemp={switchTemp}/>
            <DaysCard date={'Tue, 9 Jun'} switchTemp={switchTemp} />
            <DaysCard date={'Wed, 10 Jun'} switchTemp={switchTemp} />
        </div>
    )
}

export default SwitchDays;