import React , { useState } from 'react';
import { Typography ,Button ,Form ,message ,Input ,Icon } from 'antd';
import FileUpload from '../../utils/FileUpload';
const Nearme = [
    { key:1 , value: 'Patna' },
    { key:2 , value: 'Bnaras' },
    { key:3 , value: 'kolkata' },
    { key:4 , value: 'Delhi' }
]
    const { Title } = Typography;
    const { TextArea } = Input;

 const UploadProductPage = () => {

    const [TitleValue, setTitleValue] = useState('')
    const [DescriptionValue, setDescriptionValue] = useState('')
    const [PriceValue, setPriceValue] = useState(0)
    const [NearmeSelectValue, setNearmeSelectValue] = useState(1)
    const [Images, setImages] = useState([])
     const onTitleChange = (event) => {
            setTitleValue(event.currentTarget.value) 
     }
     const onDescriptionChange = (event) => {
        setDescriptionValue(event.currentTarget.value)
     }
     const onPriceChange = (event) => {
         setPriceValue(event.currentTarget.value)
     } 
     const onNearmeSelectChange = (event) => {
         setNearmeSelectValue(event.currentTarget.value)
     }
     const updateImage = (newImages) => {
         setImages(newImages);
         console.log(newImages)
     }
    return (
        <div style = {{ maxWidth: '700px' , margin: '2rem auto'}}>
            <div style = {{textAlign: 'center' , marginBottom: '2rem'}}>
                    <Title level = {2}>Upload Product</Title>
            </div>
            <Form onSubmit = ''>
                <br />
                    {/* dropzone */}
                    <FileUpload refreshFunction = { updateImage } />
                <br />
                <label>Title</label>
                <Input 
                    onChange = {onTitleChange}
                    value = {TitleValue}
                />
                <br />
                <label>Description</label>
                <TextArea 
                    onChange = { onDescriptionChange }
                    value = {DescriptionValue}
                />
                <br />
                <label>Price($)</label>
                <Input 
                    onChange = { onPriceChange }
                    value = {PriceValue}
                    type = "number"
                />
                <select onChange = { onNearmeSelectChange }>
                    {
                        Nearme.map(item => (
                       <option keyvalue = {item.key} value = {item.key}>
                            {item.value}
                        </option>
                        ))}
                </select>
                <br />
                <br />
                <Button onClick >
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default UploadProductPage;