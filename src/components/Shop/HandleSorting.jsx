const fetchAllData = ({currentPage, perPage, data, setDatas}) => {
    const start = (currentPage - 1) * perPage
    const end = start + perPage
    const paginatedData = data.Products.slice(start, end)
    setDatas(paginatedData)
}

const handleSortPopularity = ({data, currentPage, perPage, setDatas, setTotalItems}) => {
        const sortPopularity = [...data.Products].sort((a, b) => b.rating - a.rating)
        const start = (currentPage - 1) * perPage
        const end = start + perPage
        const paginatedDataPopularity = sortPopularity.slice(start, end)
        setTotalItems(sortPopularity.length)
        setDatas(paginatedDataPopularity)
}
const handleSortAverage = ({data, setDatas, setTotalItems, currentPage, perPage}) => {
    const sorted = data.Products.reduce((sum, item) => sum + item.rating, 0)
    const sortAverage = Math.floor(sorted / data.Products.length)
    const dataSortAverage = data.Products.filter((data) => data.rating === sortAverage)
    const start = (currentPage - 1) * perPage
    const end = start + perPage
    const paginatedDataAverage = dataSortAverage.slice(start, end)
    setTotalItems(paginatedDataAverage.length)
    setDatas(paginatedDataAverage)
}
const sortLatestData = ({currentPage, perPage, data, setDatas, setTotalItems}) => {
    const sorted = [...data.Products].sort((a, b) => b.productId - a.productId)
    const start = (currentPage - 1) * perPage
    const end = start + perPage
    const paginatedData = sorted.slice(start, end)
    setTotalItems(sorted.length)
    setDatas(paginatedData)
} 
const handleLowToHigh = ({data, currentPage, perPage, setDatas, setTotalItems}) => {
    const sorted = [...data.Products].sort((a, b) => a.price - b.price)
    const start = (currentPage - 1) * perPage
    const end = start + perPage
    const paginatedDataLTH = sorted.slice(start, end)
    setDatas(paginatedDataLTH)
    setTotalItems(sorted.length)
}
const handleHighToLow = ({data, currentPage, perPage, setDatas, setTotalItems}) => {
    const sorted = [...data.Products].sort((a, b) =>  b.price - a.price)
    const start = (currentPage - 1) * perPage
    const end = start + perPage
    const paginatedDataHTL = sorted.slice(start, end)
    setDatas(paginatedDataHTL)
    setTotalItems(sorted.length)
}


export {fetchAllData, handleSortPopularity, handleSortAverage, sortLatestData, handleLowToHigh, handleHighToLow,  }