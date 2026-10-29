import bgPhoto from "../assets/top-bg.jpg"
import { ChevronDown } from "lucide-react";

function Top() {
    return (
   
        <section  className="top-section" id="home" >
            <div className="top-bg">
                <img src={bgPhoto} className="kb" alt="Pond and fountain with Spring Mountains beyond, Pahrump Valley" />
            </div>
            <div className="top-bg-overlay">
            </div>
            <div className="top-main">
                <div className="hero">
                    <p className="up">
                        Marci Metzger · The Ridge Realty Group
                    </p>
                    <h1 className="disp">
                        <span className="ln">
                            <span>Find your place </span>
                            
                        </span>
                        <span className="ln">
                            <span>in Pahrump Valley.</span>
                            
                        </span>
                    </h1>
                    <p className="up up2">
                        Nearly three decades of helping neighbors buy, sell and move with confidence — from the first search to the day you get your keys.
                    </p>
                    <div className="up up3" >
                        <a className="btn yellow-button ring" href="#search">Search homes</a>
                        <a className="btn ghost" href="tel:+12069196886">Call (206) 919-6886</a>
                        
                    </div>
                </div>


                <form id="search" className="search-form up up4">
                    <div className="search-field">
                        <label htmlFor="location">LOCATION</label>
                        <input
                            id="location"
                            name="location"
                            type="text"
                            placeholder="Pahrump, NV"
                        />
                    </div>

                    <div className="search-field">
                        <label htmlFor="property-type">PROPERTY TYPE</label>

                        <div className="select-wrapper">
                            <select
                                id="property-type"
                                name="type"
                                defaultValue=""
                            >
                                <option value="">Any Type</option>
                                <option value="single-family">Single Family</option>
                                <option value="condo-townhome">Condo/Townhome</option>
                                <option value="land">Land</option>
                                <option value="commercial">Commercial</option>
                            </select>

                            <ChevronDown className="select-chevron" size={18} />
                        </div>
                    </div>

                    <div className="search-field">
                        <label htmlFor="bedrooms">BEDROOMS</label>
                        <div className="select-wrapper">
                            <select id="bedrooms" name="bedrooms" defaultValue="">
                                <option value="">Any</option>
                                <option value="1">1+</option>
                                <option value="2">2+</option>
                                <option value="3">3+</option>
                                <option value="4">4+</option>
                                <option value="5">5+</option>
                                <option value="6">6+</option>
                            </select>
                            <ChevronDown className="select-chevron" size={18} />

                        </div>
                        
                    </div>

                    <div className="search-field">
                        <label htmlFor="bathrooms">BATHROOMS</label>
                        <div className="select-wrapper">
                            <select id="bathrooms" name="bathrooms" defaultValue="">
                                <option value="">Any</option>
                                <option value="1">1+</option>
                                <option value="2">2+</option>
                                <option value="3">3+</option>
                                <option value="4">4+</option>
                                <option value="5">5+</option>
                                <option value="6">6+</option>
                            </select>
                        <ChevronDown className="select-chevron" size={18} />
                        </div>
                        
                    </div>

                    <div className="search-field">
                        <label htmlFor="max-price">MAX PRICE</label>
                        <input
                            id="max-price"
                            name="maxPrice"
                            type="number"
                            min="0"
                            placeholder="No max"
                        />
                    </div>

                    <button className="search-submit" type="submit">
                        Search Now
                        <span aria-hidden="true">↗</span>
                    </button>
                </form>



            </div>

        </section>
        
  
        
    )
}

export default Top;