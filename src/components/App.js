// create your App component here
import React, { useEffect, useState } from "react";

function App() {
    const [img, setImg] = useState(null)

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then((response) => response.json())
        .then((data) => setImg(data.message))
    }, [])

    if (!img) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <img src={img} alt="A Random Dog"/>
        </div>
    )
}

export default App;