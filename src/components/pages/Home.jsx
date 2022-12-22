import React from 'react'
import Singleproduct from './Singleproduct';

const Home = () => {
    return (
        <div className='grid grid-cols-6 gap-3'>
            {/* <div className='grid grid-col-span-1 shadow-md h-screen'> */}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium blanditiis, rerum modi unde consequatur debitis, dolore magni, explicabo saepe voluptas quidem cupiditate placeat pariatur! Fugiat a temporibus quis ab iusto?
            {/* </div> */}
            {/* <div className='grid grid-colspan-8'> */}
            <div className='grid grid-cols-4 col-span-5 gap-4'>
                <Singleproduct />
                <Singleproduct />
                <Singleproduct />
                <Singleproduct />
                <Singleproduct />
                <Singleproduct />
            </div>
        </div>
    )
}

export default Home;