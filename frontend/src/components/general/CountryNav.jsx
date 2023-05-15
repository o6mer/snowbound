function CountryNav({ selectedCountry, continent = "Europe", name }) {
  return (
    <a
      href={`/search/${continent}/${name}/none`}
      className={`${
        selectedCountry === name && "bg-sky-400 text-white"
      } transition-all hover:bg-sky-400 
    hover:text-white
    focus:bg-sky-400 
    focus:outline-none focus:ring focus:ring-white-300  px-3 py-2 rounded-md font-medium`}
    >
      {name}
    </a>
  );
}

export default CountryNav;
