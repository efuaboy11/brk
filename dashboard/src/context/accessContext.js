import React, { createContext, useContext, useEffect, useState } from "react";
const AccessContext = createContext();

export const AccessProvider = ({children}) =>{
    const [visitedRoutes, setVisitedRoutes] = useState(() => {
        // Load visited routes from localStorage on initialization
        const storedRoutes = localStorage.getItem("visitedRoutes");
        return storedRoutes ? JSON.parse(storedRoutes) : [];
      });
    
      // Update localStorage whenever visitedRoutes changes
      useEffect(() => {
        localStorage.setItem("visitedRoutes", JSON.stringify(visitedRoutes));
      }, [visitedRoutes]);
    
      const addRoute = (route) => {
        if (!visitedRoutes.includes(route)) {
          setVisitedRoutes((prevRoutes) => [...prevRoutes, route]);
        }
      };

      const removeRoute = (route) => {
        setVisitedRoutes((prevRoutes) => prevRoutes.filter((r) => r !== route));
      };

    const markRouteAsVisited = (route) =>{
        if(!visitedRoutes.includes(route)){
            setVisitedRoutes([...visitedRoutes, route])
        }
    }
    const contextData = {
        visitedRoutes,
        setVisitedRoutes,
        markRouteAsVisited,
        addRoute,
        removeRoute,
    }

    return(
        <AccessContext.Provider value={contextData}>
            {children}
        </AccessContext.Provider>
    )

}

export const useAccess = () => useContext(AccessContext);