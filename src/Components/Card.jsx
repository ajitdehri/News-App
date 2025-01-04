import Footer from "./Footer";
const Card = ({data}) => {
    
     console.log(data);
    

     const readMore = (url) =>{
        window.open(url)
     }
  return (
    <div className='cardContainer'>
       
        
    {data.map((curItem,index)=>{
        if(!curItem.urlToImage){
            return null
        }else{
            return(
            // eslint-disable-next-line react/jsx-key
            <div className='card'>
                <img className=" transition-transform duration-300 ease-in-out hover:scale-110" src={curItem.urlToImage}/>
                <div className='content'>
                    <a className='title' onClick={()=>window.open(curItem.url)}>{curItem.title}</a>
                    <p>{curItem.description}</p>
                    <button  className='hover:bg-blue-500 'onClick={()=>window.open(curItem.url)} >Read More</button>
                </div>
            </div>
        )
        }
         
    })}
    <Footer/>
    </div>
  )
}

export default Card