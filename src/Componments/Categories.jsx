import React from 'react'
import Category from './Category';
import {ApiCategories}  from '../apifolder/CateregoriesApi';

const Categories=()=> {

  return <div className='flex items-center justify-between p-5'>
        {ApiCategories.map((category,index)=>(
                <Category item={category} key={index}/>
            ))}
        
     </div>;  
};

export default Categories;