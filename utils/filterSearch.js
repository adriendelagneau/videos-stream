const filterSearch = ({router,limit, category, brand, sort, search}) => {
  
    const query = router.query;


    if(category) query.category = category;
    if(brand) query.brand = brand;
    if(sort) query.sort = sort;
    if(search) query.search = search;
    if(limit) query.limit = search;


    router.push({
        pathname: "/videos",
        query: query
    })
}

export default filterSearch