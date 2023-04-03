/**
 * 
 * @param {*} name search
 * @returns 
 */
async function fetchAllFollowersData(name) {
   let page = 1;
   let allData = [];

   for (let index = 1; index <= 1; index++) {
      //const response = await fetch(`${process.env.NEXT_PUBLIC_MOCK_API}/followers`) => you wanna mock api
      const response = await fetch(`${process.env.NEXT_PUBLIC_API}users/${name}/followers?page=${page}&per_page=${process.env.NEXT_PUBLIC_FOLLOWERS_PER_PAGE}`)
      const data = await response.json();

      if (response.length === 0) {
         break;
      }

      allData.push(...data);
      page++;
   }

   return allData;
}

/**
 * 
 * @param {*} name search
 * @returns 
 */
async function fetchAllFollowingData(name) {
   let page = 1;
   let allData = [];

   for (let index = 1; index <= 1; index++) {
      //const response = await fetch(`${process.env.NEXT_PUBLIC_MOCK_API}/following`) => you wanna mock api
      const response = await fetch(`${process.env.NEXT_PUBLIC_API}users/${name}/following?page=${page}&per_page=${process.env.NEXT_PUBLIC_FOLLOWING_PER_PAGE}`)
      const data = await response.json();

      if (data.length === 0) {
         break;
      }

      allData.push(...data);
      page++;
   }

   return allData;
}

/**
 * 
 * @param {*} name search
 * @returns 
 */
async function fetchAllReposData(name) {
   let page = 1;
   let allData = [];

   for (let index = 1; index <= 1; index++) {
      //const response = await fetch(`${process.env.NEXT_PUBLIC_MOCK_API}/repos`) => you wanna mock api
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