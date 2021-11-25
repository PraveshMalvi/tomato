import React from 'react'

function MenuCard({menuData}) {

    const imgStyle = {
        height: '50vh',
        ObjectFit: 'cover'
    }
    
    return (
        <>
            <section className="my-5">
                <div className="container">
                    <div className="row gy-4">
                            {
                                menuData.map((ele) => {
                                    const {id, name, image, price, description} = ele;
                                    return(
                                        <>
                                                
                                            <div className="col-4">
                                                <div className="p-0 card">
                                                <img src={image} style={imgStyle} className="card-img-top" alt="card"/>
                                                <div className="card-body">
                                                    <h5 className="text-capitalize font-weight-bold card-title">{name}</h5>
                                                    <p className="card-text">{description}</p>
                                                    
                                                    <a href="#order" className="btn btn-primary">Order Now<span className="ml-3 font-weight-bold">{price}</span></a>
                                                </div>
                                                </div>
                                            </div>
                                                
                                                
                                        </>
                                    )
                                })
                            }
                    </div>
                </div>
            </section>
        </>
    )
}

export default MenuCard
