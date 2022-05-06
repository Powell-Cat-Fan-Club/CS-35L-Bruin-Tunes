//credit to https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/
//credit to https://reactrouter.com/docs/en/v6/getting-started/tutorial
import React from 'react';
import { useLocation, NavLink, Outlet, useSearchParams } from "react-router-dom";
import { getArtists } from './artist-data';

function QueryNavLink( {to, ...props}) {
  let location = useLocation();
  return <NavLink to={to + location.search} {...props}/>;
}
  
const Artists = () => {
  let artists = getArtists();
  let [searchParams, setSearchParams] = useSearchParams();
  return (
    <h1>Find your favorite artists!
      <div style={{ display: "flex" }}>
        <nav
          style={{
            borderRight: "solid 1px",
            padding: "1rem",
          }}
        >
          <input
            placeholder="Filter by name"
            value={searchParams.get("filter")  || ""}
            onChange={(event) => {
              let filter = event.target.value;
              if (filter) {
                setSearchParams( { filter });
              }
              else {
                setSearchParams({});
              }
            }}/>
            <input
            placeholder="Filter by attributes"
            value={searchParams.get("filterAttr")  || ""}
            onChange={(event) => {
              let filterAttr = event.target.value;
              if (filterAttr) {
                setSearchParams( { filterAttr });
              }
              else {
                setSearchParams({});
              }
            }}/>
          {artists
          .filter((artist) => {
            let filter = searchParams.get("filter");
            let filterAttr = searchParams.get("filterAttr")
            let matches = [];
            if (!filter & !filterAttr) return true;
            let name = artist.name.toLowerCase();
            let attr = artist.attributes;
            for (let i = 0; i<attr.length; i++)
            {
              attr[i] = attr[i].toLowerCase();
            }
            if (filterAttr)
            {
              for (let i = 0; i<attr.length; i++)
              {
                if (attr[i].startsWith(filterAttr.toLowerCase())) matches.push(attr[i]);
              }
            }
            console.log(matches);
            if (filter & filterAttr) return name.startsWith(filter.toLowerCase()) | matches.length!==0;
            console.log(matches.length!==0);
            if (!filter) return matches.length!==0;
            if (!filterAttr) return name.startsWith(filter.toLowerCase());
            return false;
          })
          .map((artist) => (
            <QueryNavLink
              style={({ isActive }) => { 
                return {
                  display: "block", 
                  margin: "1rem 0", 
                  color: isActive ? "red" : "",
                };
              }}
              to={`/artists/${artist.name}`}
              key={artist.name}
            >
              {artist.name}
            </QueryNavLink>
          ))}
        </nav>
        <Outlet />
      </div>
      </h1>
  
  );
};
  

export default Artists;

