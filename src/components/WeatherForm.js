import { useState } from "react";

function WeatherForm({ onSubmit }){
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!city.trim()) return;
        onSubmit(city);
        setCity('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Enter City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button type="submit">Get Weather</button>
        </form>
    )
}

export default WeatherForm;