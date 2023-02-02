import { useEffect, useState } from "react";
import styles from './style.module.scss';
import PopDiv from '../PopupDiv';



const DropdownWithTypeFeature = () => {
    const [test, setTest] = useState(false)
    const [data, setData] = useState([
        'shyam', 'hari', 'hariram'
    ])
    const [dataIndex, setDataIndex] = useState(null);
    const [backup, setBackup] = useState([
        'shyam', 'hari', 'hariram'
    ])
    const [reserveValue, setReserveValue] = useState('')
    useEffect(() => {

        console.log("This is backup", reserveValue)
        const filterdata = backup.filter(i => i.includes(reserveValue.toLowerCase()));

        setData(filterdata)

    }, [reserveValue])
    console.log("This is data index", dataIndex)
    const handleKeyDown = (e) => {
        // e.preventDefault()
        if (e.key === 'ArrowDown') {
            if (dataIndex === null) {
                setDataIndex(0)

            } else if (dataIndex < (data.length - 1)) {
                setDataIndex(dataIndex + 1)

            } else {
                return null
            }
        } else if (e.key === 'ArrowUp') {
            if (dataIndex === 0) {
                setDataIndex(0)

            } else {
                setDataIndex(dataIndex - 1)

            }
        } else if (e.key === 'Enter') {
            setTest(false)
            setReserveValue(data[dataIndex])
        } else return null

    }
    return (
        <>
            <input className={styles.searchFilter} type="text" id="lname" name="lname" value={reserveValue}
                onClick={() => setTest(true)}
                onChange={(e) => {
                    setDataIndex(null)
                    setReserveValue(e.target.value)
                    setTest(true)
                }}
                onKeyDown={(e) => handleKeyDown(e)}
                autoComplete="off"
            />

            <PopDiv
                show={test}
                setShowInfo={setTest}
                className={styles.notificationContainer}

            >

                {data.map((i, index) => (
                    <div className={styles.header} style={{ backgroundColor: dataIndex === index ? 'red' : '' }} key={i} value={i}
                        onKeyDown={(e) => setDataIndex(index + 1)}
                        onClick={() => {
                            setTest(false)
                            setReserveValue(i)
                        }} >
                        {i}
                    </div>
                ))}



            </PopDiv>

        </>
    )
}

export default DropdownWithTypeFeature;