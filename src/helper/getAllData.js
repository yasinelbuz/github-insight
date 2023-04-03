
async function fetchAllFollowersData(name) {
   let page = 1;
   let allData = [];

   for (let index = 1; index <= 1; index++) {
      const response = await fetch(`${process.env.NEXT_PUBLIC_MOCK_API}/followers`)
      const data = await response.json();

      if (response.length === 0) {
         break;
      }

      allData.push(...data);
      page++;
   }

   return allData;
}

async function fetchAllFollowingData(name) {
   let page = 1;
   let allData = [];

   for (let index = 1; index <= 1; index++) {
      const response = await fetch(`${process.env.NEXT_PUBLIC_MOCK_API}/following`)
      const data = await response.json();

      if (data.length === 0) {
         break;
      }

      allData.push(...data);
      page++;
   }

   return allData;
}

// fetchAllFollowingData().then(data => {
//    var myData = data; // verileri myData değişkenine atıyoruz
// })
//    .catch(error => console.error(error));
// console.log(myData);




async function fetchAllReposData(name) {
   let page = 1;
   let allData = [];

   for (let index = 1; index <= 1; index++) {
      const response = await fetch(`${process.env.NEXT_PUBLIC_MOCK_API}/repos`)
      const data = await response.json();

      if (data.length === 0) {
         break;
      }

      allData.push(...data);
      page++;
   }

   return allData;
}

export { fetchAllFollowersData, fetchAllFollowingData, fetchAllReposData };