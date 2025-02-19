import './AdvancedItem.scss';
export default ({ imgsrc, title, description }) => {return (
    <div className='AdvancedItem'>
        <img src={imgsrc} alt="" />
        <div className='AdvancedItem__description'>
            <p className='AdvancedItem__description-title'>{title}</p>
            <p className='AdvancedItem__description-description'>{description}</p>
        </div>
    </div>
)}