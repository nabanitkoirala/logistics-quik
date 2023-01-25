import styles from './style.module.scss';


const data = [
    {
        day: '01',
        value: 5000
    },
    {
        day: '02',
        value: 2000
    },
    {
        day: '03',
        value: 1200
    }, {
        day: '04',
        value: 8000
    },
    {
        day: '05',
        value: 800
    },
    {
        day: '06',
        value: 1300
    },
    {
        day: '07',
        value: 1800
    },

    {
        day: '08',
        value: 2000
    },
    {
        day: '09',
        value: 1900
    },
    {
        day: '10',
        value: 200
    },
    {
        day: '11',
        value: 1568
    },
    {
        day: '12',
        value: 254
    },
]

const Graph = () => {
    data.reduce(function (previousValue, currentValue) {
        let result = previousValue + currentValue.value;
        return result;
    }, 0);
    let finalArraytoGraph = [];

    const maxValue = Math.max(...data.map(i => i.value));

    const yAxisBarValue = [maxValue / 6, maxValue / 6, maxValue / 6, maxValue / 6, maxValue / 6, maxValue / 6];
    let finalYaxisBarValue = [];

    for (let i = 0; i < yAxisBarValue.length; i++) {
        const data = finalYaxisBarValue.length && i === 5 ? Number((maxValue).toFixed(0)) : finalYaxisBarValue.length ? Number((yAxisBarValue[i] + finalYaxisBarValue[i - 1]).toFixed(0)) : 0

        finalYaxisBarValue.push(data)
    }

    finalYaxisBarValue = finalYaxisBarValue.map((item) => {
        return ({
            value: item,
            percentage: Number(((item / maxValue) * 100).toFixed(2))
        })
    })

    data.map((item) => {
        const percentageValue = Number((((item.value) / (maxValue)) * 100).toFixed(2));
        finalArraytoGraph.push({ ...item, percentageValue })
        return
    })
    finalYaxisBarValue.sort((a, b) => b.value - a.value)
    console.log("This is dataTEst", finalYaxisBarValue)
    console.log("This is final value", finalArraytoGraph)


    return (
        <div className={styles.mainGraph} >
            <div className={styles.indicator} >
                {finalYaxisBarValue.map((item, i) => (<span key={i} >{item.value}</span>))}

            </div>
            <div className={styles.graphBars} >
                {
                    finalArraytoGraph.length && finalArraytoGraph.map(item => (<div key={item.day} style={{ display: 'flex', flexDirection: 'column-reverse', alignItems: 'center' }} >
                        <span>{item.day}</span>
                        <div className={styles.bar} style={{ height: `${item.percentageValue}%`, backgroundColor: maxValue === item.value ? '#5DBB99' : '#BFEAE0', borderRadius: '5px' }} >
                            <span className={styles.tooltipText} id="top"> {item.value}</span>
                        </div>
                    </div>))
                }

            </div>
        </div>
    )
}

export default Graph