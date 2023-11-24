export const exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
   'X-RapidAPI-Key': "8b61d744ecmsha81a214c8492f94p17ac21jsn56769bbaa6ed",
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '8b61d744ecmsha81a214c8492f94p17ac21jsn56769bbaa6ed',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData=async(url, options)=> {
    const response = await fetch(url, options);
    const data=await response.json();

    return data;
}