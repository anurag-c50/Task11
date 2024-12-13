import React from 'react'
import styled from 'styled-components'

export default function HomeSecond() {
    const Card=[{
        id:1,
        img:"https://healthyplaneat.com/static/media/connectguide1.b658ded5.png",
        headline: 'Discover <br>Local Farms <br>Near You',
        paragraph:"Now working with farms throughout Connecticut and on Fishers Island, more locations coming soon"
    },{
        id:2,
        img:"https://healthyplaneat.com/static/media/connectguide2.d190657b.png",
        headline:"Shop Seasonal,<br>Sustainable,<br>Healthy Food",
        paragraph:"Support sustainable growing practices and build a strong food system in your community"
    },{
        id:3,
        img:"https://healthyplaneat.com/static/media/connectguide4.a60662b2.png",
        headline:"Choose from Local<br>  Pick Up, Delivery, or<br> Sustainable Shipping",
        paragraph:"Pick up at a farmers market, pop-up, school, or have your order delivered to your door."
    
    }]
  return (
    <Container>
        <div className="Container">
            <div className="subConatin">
                <div className="Tag">
                    <h2 class="Headline">How it Works</h2>
                    <h3 class="subHeadline">
                        Healthy PlanEat connects you to local sustainable farms so you can have a healthy and sustainable diet
                    </h3>
                </div>
                <div className="Cards">{Card.map((card)=>{
                    return(
                        <div className="card" key={card}>
                            <div className="cardHeadline">
                            <h3 dangerouslySetInnerHTML={{ __html: card.headline }} />
                            <h4>{card.paragraph}</h4>
                            </div>
                            <div className="img">
                                <img src={card.img} />
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
        </div>
    </Container>
  )
}
const Container=styled.div`
.Container{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
  .subConatin{
height: 76vh;
    width: 72vw;
  }
    .Headline{

    color: #47525e;
    margin-top: 0;
margin-bottom: 1.4em;
    font-size: 35px;
    }
    .Headline:after{
    margin-top: 0.3em;
    content: "";
    display: block;
    width: 100px;
    height: 5px;
    border-radius: 10px;
    background: #7dcf82;
    }
    .subHeadline{
        font-family:baloo, sans-serif;
        font-weight: 400;
        font-size: 27px;
        line-height: 1.2;
        color: #47525e;

    }
        .Cards{
    height: 52vh;
    width: 72vw;
    display: flex;
    justify-content: center;
    }
    .card{
    height: 52vh;
    width: 24vw;
    }
    .Tag{
    margin-bottom: 57px;
        width: 53vw;
    }
        .cardHeadline{
            height: 28vh;
            text-align:center;
        }
        .cardHeadline h3{
        font-family: baloo, sans-serif;
        color: #47525e;
        margin: 0;
            margin-bottom: 1em;
            font-size: 27px;
        }
        .cardHeadline h4{
        margin: 0;
            font-weight: 400;
        font-size: 20px;
    color: #47525e;
        height: 3.8em;
        }
        .img{
            height: 24vh;
        }
        .img img{
            position: absolute;
    height: 24vh;

        }

`