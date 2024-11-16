const express = require('express');
const cors = require('cors');
const { resolve } = require('path');

const app = express();
app.use(cors());
const port = 3000;

// ********** DATA **********
let hotels = [
  {
    id: 1,
    name: 'Romantic Getaway',
    category: 'Resort',
    rating: 2.2,
    reviews: 4572,
    amenity: 'Spa',
    price: 10464,
    country: 'South Africa',
  },
  {
    id: 2,
    name: 'Wellness Retreat',
    category: 'Family',
    rating: 2.8,
    reviews: 2114,
    amenity: 'Pool',
    price: 13243,
    country: 'Australia',
  },
  {
    id: 3,
    name: 'Romantic Getaway',
    category: 'Luxury',
    rating: 3.1,
    reviews: 4359,
    amenity: 'Restaurant',
    price: 3299,
    country: 'Germany',
  },
  {
    id: 4,
    name: 'Luxury Suites',
    category: 'Family',
    rating: 4.9,
    reviews: 3651,
    amenity: 'Bar',
    price: 16359,
    country: 'United Kingdom',
  },
  {
    id: 5,
    name: 'Luxury Suites',
    category: 'Budget',
    rating: 4.6,
    reviews: 688,
    amenity: 'Gym',
    price: 15570,
    country: 'France',
  },
  {
    id: 6,
    name: 'Cultural Heritage Hotel',
    category: 'Boutique',
    rating: 2.0,
    reviews: 219,
    amenity: 'Pet Friendly',
    price: 2321,
    country: 'USA',
  },
  {
    id: 7,
    name: 'Business Hotel',
    category: 'Mid-Range',
    rating: 3.7,
    reviews: 1040,
    amenity: 'Free WiFi',
    price: 4523,
    country: 'India',
  },
  {
    id: 8,
    name: 'Historic Plaza Hotel',
    category: 'Mid-Range',
    rating: 3.5,
    reviews: 300,
    amenity: 'Parking',
    price: 8543,
    country: 'Australia',
  },
  {
    id: 9,
    name: 'Adventure Resort',
    category: 'Boutique',
    rating: 4.2,
    reviews: 1222,
    amenity: 'Gym',
    price: 11894,
    country: 'South Africa',
  },
  {
    id: 10,
    name: 'Mountain Retreat',
    category: 'Resort',
    rating: 4.8,
    reviews: 4015,
    amenity: 'Spa',
    price: 17560,
    country: 'India',
  },
  {
    id: 11,
    name: 'Eco Friendly Lodge',
    category: 'Family',
    rating: 2.4,
    reviews: 528,
    amenity: 'Restaurant',
    price: 3124,
    country: 'Germany',
  },
  {
    id: 12,
    name: 'Urban Boutique Hotel',
    category: 'Mid-Range',
    rating: 3.9,
    reviews: 1401,
    amenity: 'Free WiFi',
    price: 9245,
    country: 'France',
  },
  {
    id: 13,
    name: 'Beachfront Hotel',
    category: 'Luxury',
    rating: 4.5,
    reviews: 489,
    amenity: 'Pool',
    price: 14567,
    country: 'USA',
  },
  {
    id: 14,
    name: 'Ocean View Resort',
    category: 'Budget',
    rating: 3.3,
    reviews: 783,
    amenity: 'Spa',
    price: 7432,
    country: 'United Kingdom',
  },
  {
    id: 15,
    name: 'City Central Hotel',
    category: 'Boutique',
    rating: 4.1,
    reviews: 2133,
    amenity: 'Bar',
    price: 9823,
    country: 'Australia',
  },
  {
    id: 16,
    name: 'Casino Resort',
    category: 'Luxury',
    rating: 4.9,
    reviews: 5000,
    amenity: 'Bar',
    price: 18900,
    country: 'South Africa',
  },
  {
    id: 17,
    name: 'Golf Resort',
    category: 'Mid-Range',
    rating: 4.7,
    reviews: 789,
    amenity: 'Gym',
    price: 16340,
    country: 'France',
  },
  {
    id: 18,
    name: 'Family Fun Hotel',
    category: 'Family',
    rating: 3.2,
    reviews: 1322,
    amenity: 'Pool',
    price: 7500,
    country: 'Germany',
  },
  {
    id: 19,
    name: 'Spa and Relaxation Hotel',
    category: 'Luxury',
    rating: 4.4,
    reviews: 2314,
    amenity: 'Spa',
    price: 14900,
    country: 'United Kingdom',
  },
  {
    id: 20,
    name: 'Country House Hotel',
    category: 'Budget',
    rating: 3.6,
    reviews: 1876,
    amenity: 'Parking',
    price: 6234,
    country: 'Australia',
  },
];

// Endpoint - 1 (Get the hotels sorted by pricing)

function sortHotelsByPriceAscending(hotel_1, hotel_2) {
  return hotel_1.price - hotel_2.price;
}

function sortHotelsByPriceDescending(hotel_1, hotel_2) {
  return hotel_2.price - hotel_1.price;
}

app.get('/hotels/sort/pricing', (req, res) => {
  let pricing = req.query.pricing;
  if (pricing === 'low-to-high') {
    let hotelsCopy = hotels.slice();
    hotelsCopy.sort(sortHotelsByPriceAscending);
    res.json(hotelsCopy);
  } else if (pricing === 'high-to-low') {
    let hotelsCopy = hotels.slice();
    hotelsCopy.sort(sortHotelsByPriceDescending);
    res.json(hotelsCopy);
  } else {
    res.json(hotels);
  }
});

// Path = /hotels/sort/pricing
// Path = /hotels/sort/pricing?pricing=low-to-high
// Path = /hotels/sort/pricing?pricing=high-to-low

// Endpoint - 2 (Get the hotels sorted by their Ratings)

function sortHotelsByRatingAscending(hotel_1, hotel_2) {
  return hotel_1.rating - hotel_2.rating;
}

function sortHotelsByRatingDescending(hotel_1, hotel_2) {
  return hotel_2.rating - hotel_1.rating;
}

app.get('/hotels/sort/rating', (req, res) => {
  let rating = req.query.rating;
  if (rating === 'low-to-high') {
    let hotelsCopy = hotels.slice();
    hotelsCopy.sort(sortHotelsByRatingAscending);
    res.json(hotelsCopy);
  } else if (rating === 'high-to-low') {
    let hotelsCopy = hotels.slice();
    hotelsCopy.sort(sortHotelsByRatingDescending);
    res.json(hotelsCopy);
  } else {
    res.json(hotels);
  }
});

// Path = /hotels/sort/rating
// Path = /hotels/sort/rating?rating=low-to-high
// path = /hotels/sort/rating?rating=high-to-low

// Endpoint - 3 (Get the Hotels sorted based on their Reviews)

function sortHotelsByReviewsLeastToMost(hotel_1, hotel_2) {
  return hotel_1.reviews - hotel_2.reviews;
}

function sortHotelsByReviewsMostToLeast(hotel_1, hotel_2) {
  return hotel_2.reviews - hotel_1.reviews;
}

app.get('/hotels/sort/reviews', (req, res) => {
  let reviews = req.query.reviews;
  if (reviews === 'least-to-most') {
    let hotelsCopy = hotels.slice();
    hotelsCopy.sort(sortHotelsByReviewsLeastToMost);
    res.json(hotelsCopy);
  } else if (reviews === 'most-to-least') {
    let hotelsCopy = hotels.slice();
    hotelsCopy.sort(sortHotelsByReviewsMostToLeast);
    res.json(hotelsCopy);
  } else {
    res.json(hotels);
  }
});

// Path = /hotels/sort/reviews
// Path = /hotels/sort/reviews?reviews=high-to-low
// Path = /hotels/sort/reviews?reviews=low-to-high

// Endpoint - 4 (Filter the hotels based on the Hotel Amenity)

function filterHotelsByAmenity(hotel, amenity) {
  return hotel.amenity === amenity;
}

app.get('/hotels/filter/amenity', (req, res) => {
  let amenity = req.query.amenity;
  let results = hotels.filter((hotel) => filterHotelsByAmenity(hotel, amenity));
  res.json(results);
});

// Path = /hotels/filter/amenity?amenity=Parking
// Path = /hotels/filter/amenity?amenity=Restaurant
// Path = /hotels/filter/amenity?amenity=Pool

// Endpoint - 5 (Filter the hotels based on the selected Country)

function filterHotelsByCountry(hotel, country) {
  return hotel.country === country;
}

app.get('/hotels/filter/country', (req, res) => {
  let country = req.query.country;
  let results = hotels.filter((hotel) => filterHotelsByCountry(hotel, country));
  res.json(results);
});

// Path = /hotels/filter/country?country=India
// Path = /hotels/filter/country?country=United%20Kingdom
// Path = /hotels/filter/country?country=Germany

// Endpoint - 6 (Filter the hotels based on the selected Category)

function filterHotelsByCategory(hotel, category) {
  return hotel.category === category;
}

app.get('/hotels/filter/category', (req, res) => {
  let category = req.query.category;
  let results = hotels.filter((hotel) =>
    filterHotelsByCategory(hotel, category)
  );
  res.json(results);
});

// Path = /hotels/filter/category?category=Luxury
// Path = /hotels/filter/category?category=Resort
// Path = /hotels/filter/category?category=Family

// Endpoint - 7 (Send all hotels)

app.get('/hotels', (req, res) => {
  res.json(hotels);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
