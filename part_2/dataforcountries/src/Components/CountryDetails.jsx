const CountryDetails = ({country}) => {
    return (
        <div>
            <h2>
                {country.name.common}
            </h2>
            <p>Captial {country.capital}</p>
            <p>Area {country.area}</p>
            <h3>Languages</h3>
            <ul>
                {Object.values(country.languages).map((language, index) => (
                    <li key={index}>{language}</li>
                ))}
            </ul>
            <img src = {country.flags.png} width="150" />
        </div>
    )
}

export default CountryDetails