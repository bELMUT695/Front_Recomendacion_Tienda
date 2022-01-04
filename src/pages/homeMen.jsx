import React from 'react'
import './styles/homeMen.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

class homeMen extends React.Component{

 render(){
   
    return(
      <>
        <Navbar />
          <main className="blogs-main">
            <section className="blogs-news-container">
              <div className="grid-container blogs-main-new">
                <h3></h3>
                <div className="blogs-news-img-container">
                  <img src="https://img01.ztat.net/zl-campaign/zlevent/campaigns/images/jil9jg8h1l59j3vb9rg7sj3f1v/types/MOOD_DESKTOP.jpg" alt="" />
                </div>
                <div className="blogs-news-info-container">
                  <h2>Renueva tu estiloo</h2>
                </div>
              </div>
            </section>
            <section className="blogs-post-container">
              <div className="grid-container">
                <h3>Lo mas vendido</h3>
                <article className="post-container">
                  <img src="https://mosaic03.ztat.net/vgs/media/zl_large/spp-media-p1/592f930b207d3356afc135d878272388/a00b3f7adb0c4f4c9084c962dd414459.jpg" alt="" />
                  <p>Titulo del blog post</p>
                </article>
                <article className="post-container">
                  <img src="https://mosaic03.ztat.net/vgs/media/zl_large/spp-media-p1/a9ead7fbd3ff342baea7c7239e1e8dc2/b802eadcd15045ff99ec0de442795fdb.jpg" alt="" />
                  <p>Titulo del blog post</p>
                </article>
                <article className="post-container">
                  <img src="https://mosaic03.ztat.net/vgs/media/zl_large/spp-media-p1/0001cec6bbff3f7a848abb36fe133b82/87a1d943fc364aa5a358c4b373a1bf3c.jpg" alt="" />
                  <p>Titulo del blog post</p>
                </article>
                <article className="post-container">
                  <img src="https://mosaic03.ztat.net/vgs/media/zl_large/spp-media-p1/cb756fa3f55430719eefdfb43aaebfd4/2b5c89468d984f45b506df61979e43ab.jpg" alt="" />
                  <p>Titulo del blog post</p>
                </article>
                <article className="post-container">
                  <img src="https://mosaic03.ztat.net/vgs/media/zl_large/spp-media-p1/462ba9ae2e9032218b3d12b270aef9e2/8b4cdd94eb354cf2b18252590cb9a36e.jpg" alt="" />
                  <p>Titulo del blog post</p>
                </article>
                <article className="post-container">
                  <img src="https://mosaic03.ztat.net/vgs/media/zl_large/spp-media-p1/c9445dc8560e32cf966616f7d4ec709a/60e22a70061d466ab63030506c0e35be.jpg" alt="" />
                  <p>Titulo del blog post</p>
                </article>
              </div>
            </section>
          </main>
        <Footer />
      </>
    )
 }  
}

export default homeMen;