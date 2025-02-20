//import axios from 'axios';

// Simulating an API call
export const fetchTrendingMovies = () => {
    return new Promise((resolve) => {
      const movies = [
        {
          title: "Samhaara",
          releaseDate: "2020",
          duration: "2h 15min",
          language: "Kannada",
          rating: "U/A 16+",
          genres: ["Action", "Drama"],
          bannerImage: "/images/Images/Samhaara",
          thumbnail: "/images/Images/samhaara-thumbnail.jpg"
        },
        {
          title: "Dunkirk",
          releaseDate: "2017",
          duration: "1h 46min",
          language: "English",
          rating: "A",
          genres: ["War", "Action"],
          bannerImage: "/images/Images/Dunkirk.jpg",
          thumbnail: "/images/Images/dunkirk-thumbnail.jpg"
        },
        {
          title: "Alita",
          releaseDate: "2019",
          duration: "2h 2min",
          language: "English",
          rating: "U/A 13+",
          genres: ["Science Fiction", "Action"],
          bannerImage: "/images/Images/AlitaBattleAngel.jpg",
          thumbnail: "/images/Images/dunkirk-thumbnail.jpg"
        },
        {
          title: "Baadshaho",
          releaseDate: "2017",
          duration: "2h 9min",
          language: "Hindi",
          rating: "U/A 13+",
          genres: ["Drama", "Crime", "Romance"],
          bannerImage: "/images/Images/Baadshaho",
          thumbnail: "/images/Images/dunkirk-thumbnail.jpg"
        },
        {
          title: "Love Sonia",
          releaseDate: "2018",
          duration: "2h 3min",
          language: "Hindi",
          rating: "A",
          genres: ["Drama", "Crime", "Gritty"],
          bannerImage: "/images/Images/LoveSonia",
          thumbnail: "/images/Images/dunkirk-thumbnail.jpg"
        }
        // Add more movie data as needed
      ];
      resolve(movies);
    });
  };
  
  
  // Function to fetch must watch movies
  export const fetchMustWatchMovies = () => {
    return new Promise((resolve) => {
      const movies = [
        {
          title: "Apurva",
          image: "/images/Images/MustWatchApurva.jpg",
        },
        {
          title: "Boss Baby",
          image: "/images/Images/MustWatchBossBaby.jpg",
        },
        {
          title: "Elemental",
          image: "/images/Images/MustWatchElemental.jpg",
        },
        {
          title: "The Shape of Water",
          image: "/images/Images/MustWatchShapeOfWater.jpg",
        },
        {
          title: "The Incredibles",
          image: "/images/Images/MustWatchIncredibles.jpg",
        },
        {
          title: "Shutter Island",
          image: "/Images/MustWatchShutterIsland.jfif",
        },
        {
          title: "Chintu Ka Birthday",
          image: "/images/Images/MustWatchChintuKaBirthday.png",
        },
        {
          title: "Gifted",
          image: "/images/Images/Gifted.jpg",
        },
        {
          title: "The Song of Scorpions",
          image: "/images/Images/SongsofScorpions.jpg",
        },
        {
          title: "October",
          image: "/images/Images/October.jpg",
        },
        {
          title: "Laxmii",
          image: "/images/Images/Laxmii.jpeg",
        },
        {
          title: "Qarib Qarib Singlle",
          image: "/images/Images/qaribqaribsinglle.jpg",
        },
        {
          title: "(500) Days of Summer",
          image: "/images/Images/500DaysOfSummer",
        },
        {
          title: "Titli",
          image: "/images/Images/Titli.jpg",
        },
        {
          title: "The Edge of Seventeen",
          image: "/images/Images/EdgeOfSeventeen.jpg",
        },
        /*{
          title: "Gayatri",
          image: "/Images/MustWatchApurva.jpg",
        }*/
        // Add more movie data as needed
      ];
      resolve(movies);
    });
  };
  
  
  // Function to fetch must watch movies
  export const fetchBestOfEastMovies = () => {
    return new Promise((resolve) => {
      const movies = [
        {
          title: "Parasite",
          image: "/images/Images/BestOfEast/Parasite",
        },
        {
          title: "Slumdog",
          image: "/images/Images/SlumdogMillionaire.jpg",
        },
        {
          title: "Everything Everywhere All At Once",
          image: "/images/Images/Everything_Everywhere_All_At_Once.jpg",
        },
        {
          title: "Udaan",
          image: "/images/Images/Udaan.jpeg",
        },
        {
          title: "October",
          image: "/images/Images/October.jpg",
        },
        {
          title: "Chintu Ka Birthday",
          image: "/images/Images/MustWatchChintuKaBirthday.png",
        },
        {
          title: "Minari",
          image: "/images/Images/minari.jpg",
        },
        {
          title: "Haider",
          image: "/images/Images/Haider.jpg",
        },
        {
          title: "Apurva",
          image: "/images/Images/MustWatchApurva.jpg",
        },
        {
          title: "Sita Ramam",
          image: "/images/Images/SitaRamam.jpg",
        },
        {
          title: "Laxmii",
          image: "/images/Images/Laxmii.jpeg",
        },
        {
          title: "Qarib Qarib Singlle",
          image: "/images/Images/qaribqaribsinglle.jpg",
        },
        {
          title: "Marlina the Murderer in Four Acts",
          image: "/images/Images/BestOfEast/BestOfEastMarlinatheMurdererinFourActs",
        },
        {
          title: "Titli",
          image: "/images/Images/Titli.jpg",
        },
        {
          title: "A Simple Life",
          image: "/images/Images/BestOfEast/BestOfEastSimpleLife.jpg",
        },
        /*{
          title: "Gayatri",
          image: "/Images/MustWatchApurva.jpg",
        }*/
        // Add more movie data as needed
      ];
      resolve(movies);
    });
  };
  