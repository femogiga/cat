const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const axios = require('axios')






const topten = async (req, res) => {
    try {
        const result = await prisma.search.groupBy({
            by: ['searchword'],
            _count: {
                searchword: true
            },

            orderBy: {
                _count: {
                    searchword: 'desc', // 'asc' for ascending order, 'desc' for descending order
                },
            },
             take: 10,



        });
        // console.log(result);
        const apikey = 'live_iMUqJb7gjlT4vDMVIcb6qmUevcFeh246fAHXU0ijTVLgaXk1l4Eas68c9jsoaDhL';
        const response = await axios.get(`https://api.thecatapi.com/v1/breeds?api_key=${apikey}`)
        const data = await response.data

        const filteredData = data.map((item) => {
            const matchingItem = result.find((obj) => obj?.searchword === item?.name);
            if (matchingItem) {
                return { ...item, count: matchingItem._count.searchword };
            } else {
                return null;
            }
        }).filter(Boolean); // Remove null items from the array

        const sortedByCount = filteredData.sort((a, b) => {
            return b.count - a.count
        })

        res.status(200).json({ count: result, data: sortedByCount }); // Send the count as a JSON response

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error occurred: ' + err.message });
    }


};
const searchCat = async (req, res) => { // Removed extra parentheses here
    const { searchword, name } = req.body;
    try {

        const search = await prisma.search.create({
            data: {
                searchword,
                name,
            }
        });



        res.status(201).json({ message: 'Search successfully created', search });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error occurred: ' + error.message });
    }
};

let data = []
const me = getToptenfromApi().
    then(res => data = [...res])
    .catch(err => console.error(err))
console.log('me ===>', me)
console.log(data)




async function getToptenfromApi() {
    try {
        const apikey = 'live_iMUqJb7gjlT4vDMVIcb6qmUevcFeh246fAHXU0ijTVLgaXk1l4Eas68c9jsoaDhL';
        const response = await axios.get(`https://api.thecatapi.com/v1/breeds?api_key=${apikey}`)
        const result = await response.data
        // console.log(result)


        return result


    }
    catch (error) {
        console.error(error)
    }

}






// getToptenfromApi()
module.exports = { topten, searchCat };
