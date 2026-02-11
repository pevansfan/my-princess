import React from 'react'
import PageComponent from '../../components/PageComponent/PageComponent'
import Image1 from '../../assets/img/gallery/IMG_3798.jpeg'
import Image2 from '../../assets/img/gallery/IMG_1658.JPG'
import Image3 from '../../assets/img/gallery/IMG_3661.jpeg'
import Image4 from '../../assets/img/gallery/princess.jpg'
import Image5 from '../../assets/img/gallery/me.jpeg'
import Image6 from '../../assets/img/gallery/us.jpg'
import Image7 from '../../assets/img/gallery/IMG_5388.jpeg'
import Image8 from '../../assets/img/gallery/IMG_2410.jpeg'
import './Gallery.css'

const Gallery = () => {
    const handleMouseMove = (e) => {
        const label = e.currentTarget.querySelector('.img-label')
        const rect = e.currentTarget.getBoundingClientRect()

        label.style.left = `${e.clientX - rect.left + 10}px`
        label.style.top = `${e.clientY - rect.top + 10}px`
    }
    const handleMouseLeave = (e) => {
        const label = e.currentTarget.querySelector('.img-label')
        label.style.left = `50%`
        label.style.top = `50%`
    }
    return (
        <PageComponent className="gallery-page" title="Nos moments précieux 📸">
            <div className="album">
                <div className="img-cont">
                    <div className="img-wrapper" data-text="Un week-end inoubliable ✨" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                        <img className="img small" src={Image1} alt="" />
                        <span className="img-label">Un week-end inoubliable ✨</span>
                    </div>

                    <div className="img-wrapper" data-text="Notre 1ère photo ensemble 📸" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                        <img className="img small" src={Image2} alt="" />
                        <span className="img-label">Notre 1ère photo ensemble 📸</span>
                    </div>

                    <div className="img-wrapper" data-text="Les plus beaux 😍" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                        <img className="img small" src={Image3} alt="" />
                        <span className="img-label">Les plus beaux 😍</span>
                    </div>
                </div>

                <div className="img-cont us">
                    <div className="img-wrapper" data-text="Notre princesse 🌟" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                        <img className="img img-big" alt="" src={Image4} />
                        <span className="img-label">Notre princesse 🌟</span>
                    </div>
                    <div className="img-wrapper" data-text="Notre amour 💖" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                        <img className="img img-big img-last" alt="" src={Image5} />
                        <span className="img-label">Notre amour 💖</span>
                    </div>
                </div>
                <div className="img-cont">
                    <div className="img-wrapper" data-text="Nos souvenirs 📸" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                        <img className="img small" alt="" src={Image6} />
                        <span className="img-label">Trop mignon 🫣</span>
                    </div>
                    <div className="img-wrapper" data-text="Notre couple 💑" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                        <img className="img small" alt="" src={Image7} />
                        <span className="img-label">Notre couple 💑</span>
                    </div>
                    <div className="img-wrapper" data-text="Le bouquet éternel 💐" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                        <img className="img small" alt="" src={Image8} />
                        <span className="img-label">Le bouquet éternel 💐</span>
                    </div>
                </div>
            </div>
        </PageComponent>
    )
}

export default Gallery
