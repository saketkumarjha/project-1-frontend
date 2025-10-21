import { MapPin, FileText, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import type { SearchFilters, Specialist } from '@/types';

const popularSearches: Specialist[] = [
  { id: '1', name: 'Dentist', icon: '🦷' },
  { id: '2', name: 'Pharmacy', icon: '💊' },
  { id: '3', name: 'Diagnostics', icon: '🔬' },
  { id: '4', name: 'Consult', icon: '👨‍⚕️' }
];

const SearchDoctor = () => {
  const [filters, setFilters] = useState<SearchFilters>({
    location: '',
    serviceType: '',
    specialistType: ''
  });

  const handleSearch = () => {
    console.log('Searching with filters:', filters);
  };

  const handlePopularSearch = (searchName: string) => {
    setFilters({ ...filters, specialistType: searchName });
  };

  return (
    <section className="bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg border border-white/20">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Search Doctor
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              With more than 100+ specialist and Primary Care
            </p>
          </div>

          {/* Search Filters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {/* Location Input */}
            <div className="relative">
              <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
              <Input 
                placeholder="Location"
                className="pl-11 h-12 bg-white border-gray-200 focus:border-teal-500 focus:ring-teal-500 text-sm"
                value={filters.location}
                onChange={(e) => setFilters({...filters, location: e.target.value})}
              />
            </div>

            {/* Service Type Input */}
            <div className="relative">
              <FileText className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
              <Input 
                placeholder="Type of Service"
                className="pl-11 h-12 bg-white border-gray-200 focus:border-teal-500 focus:ring-teal-500 text-sm"
                value={filters.serviceType}
                onChange={(e) => setFilters({...filters, serviceType: e.target.value})}
              />
            </div>

            {/* Specialist Type Input */}
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
              <Input 
                placeholder="Type of Specialist"
                className="pl-11 h-12 bg-white border-gray-200 focus:border-teal-500 focus:ring-teal-500 text-sm"
                value={filters.specialistType}
                onChange={(e) => setFilters({...filters, specialistType: e.target.value})}
              />
            </div>

            {/* Search Button */}
            <Button 
              onClick={handleSearch}
              className="bg-teal-500 hover:bg-teal-600 text-gray-900 font-semibold h-12 shadow-md hover:shadow-lg transition-all text-sm"
            >
              Find Doctor
            </Button>
          </div>

          {/* Popular Searches */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 flex-wrap">
            <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">
              Popular Search:
            </span>
            <div className="flex gap-3 flex-wrap">
              {popularSearches.map((search) => (
                <button
                  key={search.id}
                  onClick={() => handlePopularSearch(search.name)}
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-medium hover:shadow-md hover:scale-105 transition-all border border-gray-100"
                >
                  <span className="text-base">{search.icon}</span>
                  <span className="text-gray-700">{search.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchDoctor;