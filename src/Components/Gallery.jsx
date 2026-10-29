
import { useState } from 'react';

import courtyard from '../assets/gallery/courtyard.jpg';
import courts from '../assets/gallery/courtsfromabove.jpg'
import desert from '../assets/gallery/desert.jpeg';
import resort from '../assets/gallery/resort.webp';
import golfcourse from '../assets/gallery/golfcourse.jpeg';
import valley from '../assets/gallery/valley.jpeg';
import sunlit from '../assets/gallery/sunlit.jpg';
import modern from '../assets/gallery/modern.png';

const galleryItems = [
    {
        image: courtyard,
        title: 'Courtyard Living',
        category: 'Homes',
        type: 'Luxury Homes',
    },
    {
        image: desert,
        title: 'Desert Mountain Home',
        category: 'Homes',
        type: 'Residential',
    },
    {
        image: resort,
        title: 'Resort-Style Living',
        category: 'Aerials',
        type: 'Community Views',
    },
    {
        image: courts,
        title: 'Courts from Above',
        category: 'Aerials',
        type: 'Community Views',
    },
    {
        image: golfcourse,
        title: 'Golf Course Views',
        category: 'Aerials',
        type: 'Pahrump Valley',
    },
    {
        image: valley,
        title: 'Valley Neighborhood',
        category: 'Homes',
        type: 'Neighborhoods',
    },
    {
        image: modern,
        title: 'Modern Home, Mountain Views',
        category: 'Homes',
        type: 'Neighborhoods',
    },
    {
        image: sunlit,
        title: 'Sunlit Retreat',
        category: 'Interiors',
        type: 'Interior Design',
    },
];

const filters = ['All', 'Homes', 'Aerials', 'Interiors'];

function Gallery() {
    const [activeFilter, setActiveFilter] = useState('All');

    const visibleItems =
        activeFilter === 'All'
            ? galleryItems
            : galleryItems.filter(
                (item) => item.category === activeFilter
            );

    return (
        <section className="gallery-section" id="gallery">
            <div className="gallery-container">
                <div className="gallery-heading">
                    <p className="section-eyebrow">A CLOSER LOOK</p>
                    <h2>Life in the Pahrump Valley.</h2>
                    <p>
                        Explore the homes, interiors, and beautiful surroundings
                        that make this community special.
                    </p>
                </div>

                <div className="gallery-filters" aria-label="Filter properties">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            type="button"
                            className={`gallery-filter ${activeFilter === filter ? 'active' : ''
                                }`}
                            aria-pressed={activeFilter === filter}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                <div className="gallery-grid">
                    {visibleItems.map((item) => (
                        <article className="gallery-card" key={item.image}>
                            <div className="gallery-image">
                                <img src={item.image} alt={item.title} loading="lazy" />
                                <span className="gallery-category">{item.type}</span>
                            </div>

                            <div className="gallery-card-info">
                                <h3>{item.title}</h3>
                                <span>{item.category}</span>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Gallery;
