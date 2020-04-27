import React, { useEffect , useState } from 'react'
import { FaCode } from "react-icons/fa";
import Axios from 'axios';
import {Icon, Button , Row ,Card ,Col } from 'antd';
import ImageSlider from '../../utils/ImageSlider';
 
    const Meta = Card;
const LandingPage = () => {

        const [Products, setProducts] = useState([])


    useEffect(() => {
        Axios.post('api/product/getProducts')
        .then(response => {
            if(response.data.success){
                setProducts(response.data.products)
                console.log(response.data.products)
            } else {
                alert('failed to fetch the product data')
            }
        })
    }, [])

    const renderCards = Products.map((product, index) => {

        return <Col lg={6} md={8} xs={24}>
            <Card
                hoverable={true}
                cover={<a href={`/product/${product._id}`} > <ImageSlider images={product.images} /></a>}
            >
                <Meta
                    title={product.title}
                    description={`$${product.price}`}
                />
            </Card>
        </Col>
    })

    return(
    <div style = {{ width: '75%', margin: '3rem auto'}}>
    <div style={ { textAlign: 'center' }}>
    <h2>Let's Buy AnyThings <Icon type= 'rocket' /></h2>
    </div>
            {/* filter */}

            {/* Search */}

            {Products.length === 0 ? 
            <div style = {{ display: 'flex', height: '300px' , justifyContent:'center' , alignItems:'center' }}>
                <h2>no Post Yet .....</h2>
            </div> :
            <div>
                <Row gutter = {[16,16]}>
                    {renderCards}
                </Row>
            </div>
            }
            <br></br>
            <div style = {{ display: 'flex' , justifyContent: 'center' }}>
            <Button>Load More</Button>
            </div>
    </div>)
}

export default LandingPage
 