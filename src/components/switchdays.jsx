import DaysCard from "./dayscard";

function SwitchDays() {
    return(
        <div className="flex flex-wrap justify-center gap-10">
            <DaysCard date={'Tomorrow'} />
            <DaysCard date={'Sun, 7 Jun'} />
            <DaysCard  date={'Mon, 8 Jun'}/>
            <DaysCard date={'Tue, 9 Jun'} />
            <DaysCard date={'Wed, 10 Jun'} />
        </div>
    )
}

export default SwitchDays;