import { SearchState } from './search-types';
import { hotelData } from '@/data/dumy';

export class SearchService {
  static searchHotels(searchParams: Partial<SearchState>) {
    // Simulate API call delay
    return new Promise((resolve) => {
      setTimeout(() => {
        let filteredHotels = hotelData;

        // Filter by city if provided
        if (searchParams.city) {
          filteredHotels = filteredHotels.filter(hotel =>
            hotel.location.toLowerCase().includes(searchParams.city!.toLowerCase())
          );
        }

        // Filter by guests if provided
        if (searchParams.guests) {
          // This is a simple filter - in real app you'd check room capacity
          filteredHotels = filteredHotels.filter(hotel => 
            hotel.nights >= 1 // Basic filter for now
          );
        }

        resolve(filteredHotels);
      }, 500);
    });
  }

  static getSearchHistory() {
    const history = localStorage.getItem('searchHistory');
    return history ? JSON.parse(history) : [];
  }

  static saveSearchHistory(searchParams: SearchState) {
    const history = this.getSearchHistory();
    const newSearch = {
      id: Date.now(),
      ...searchParams,
      timestamp: new Date().toISOString()
    };
    
    history.unshift(newSearch);
    
    // Keep only last 10 searches
    if (history.length > 10) {
      history.splice(10);
    }
    
    localStorage.setItem('searchHistory', JSON.stringify(history));
  }
}
