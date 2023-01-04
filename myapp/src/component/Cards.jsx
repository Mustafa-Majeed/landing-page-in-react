import React from 'react'

function Cards(props) {

    // console.log (props);
    return (
        <center>
            <div className='container'>
                <div className="row">
                    <div className="col">
                        <div class="card mt-5" style={{ width: "50%", height:"50%" }}>
                            <img src={props.data.img} class="card-img-top" alt="..." style={{width:"100%",height:"100%"}}/>
                            <div class="card-body" style={{width:"100%",height:"100%"}}>
                                <h5 class="card-title">{props.data.name}</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </center>

    )
}

export default Cards