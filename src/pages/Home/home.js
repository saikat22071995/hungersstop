import React,{useEffect} from 'react'
import ScriptTag from 'react-script-tag';
const Home = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "../../script.js";
        script.async = true;
        document.body.appendChild(script);
      return () => {
          document.body.removeChild(script);
        }
      }, []);
    return (
        <div>
        {/* <ScriptTag type="text/javascript" src="../../script.js" /> */}
        {/* header section starts  */}
        <header>
          <a href="#" className="logo"><i className="fas fa-utensils" />
          <img src="../../images/logo.jpg" alt="" width="30%" />
          </a>
          <div id="menu-bar" className="fas fa-bars" />
          <nav className="navbar">
            <a href="#home">home</a>
            <a href="#speciality">Specialityy</a>
            <a href="#popular">popular</a>
            <a href="#gallery">Gallery</a>
            <a href="#review">Review</a>
            <a href="#order">Order</a>
          </nav>
        </header>
        {/* header section ends */}
        {/* home section starts  */}
        <section className="home" id="home">
          <div className="content">
            <h3>food made with love</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas accusamus tempore temporibus rem amet laudantium animi optio voluptatum. Natus obcaecati unde porro nostrum ipsam itaque impedit incidunt rem quisquam eos!</p>
            <a href="#" className="btn">order now</a>
          </div>
          <div className="image">
            <img src="../../images/home-img.png" alt="" />
          </div>
        </section>
        {/* home section ends */}
        {/* speciality section starts  */}
        <section className="speciality" id="speciality">
          <h1 className="heading"> our <span>speciality</span> </h1>
          <div className="box-container">
            <div className="box">
              <img className="image" src="../../images/s-img-1.jpg" alt="" />
              <div className="content">
                <img src="../../images/s-1.png" alt="" />
                <h3>tasty burger</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p>
              </div>
            </div>
            <div className="box">
              <img className="image" src="../../images/s-img-2.jpg" alt="" />
              <div className="content">
                <img src="../../images/s-2.png" alt="" />
                <h3>tasty pizza</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p>
              </div>
            </div>
            <div className="box">
              <img className="image" src="../../images/s-img-3.jpg" alt="" />
              <div className="content">
                <img src="../../images/s-3.png" alt="" />
                <h3>cold ice-cream</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p>
              </div>
            </div>
            <div className="box">
              <img className="image" src="../../images/s-img-4.jpg" alt="" />
              <div className="content">
                <img src="../../images/s-4.png" alt="" />
                <h3>cold drinks</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p>
              </div>
            </div>
            <div className="box">
              <img className="image" src="../../images/s-img-5.jpg" alt="" />
              <div className="content">
                <img src="../../images/s-5.png" alt="" />
                <h3>tasty sweets</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p>
              </div>
            </div>
            <div className="box">
              <img className="image" src="../../images/s-img-6.jpg" alt="" />
              <div className="content">
                <img src="../../images/s-6.png" alt="" />
                <h3>healty breakfast</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p>
              </div>
            </div>
          </div>
        </section>
        {/* speciality section ends */}
        {/* popular section starts  */}
        <section className="popular" id="popular">
          <h1 className="heading"> most <span>popular</span> foods </h1>
          <div className="box-container">
            <div className="box">
              <span className="price"> $5 - $20 </span>
              <img src="../../images/p-1.jpg" alt="" />
              <h3>tasty burger</h3>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="far fa-star" />
              </div>
              <a href="#" className="btn">order now</a>
            </div>
            <div className="box">
              <span className="price"> $5 - $20 </span>
              <img src="../../images/p-2.jpg" alt="" />
              <h3>tasty cakes</h3>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="far fa-star" />
              </div>
              <a href="#" className="btn">order now</a>
            </div>
            <div className="box">
              <span className="price"> $5 - $20 </span>
              <img src="../../images/p-3.jpg" alt="" />
              <h3>tasty sweets</h3>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="far fa-star" />
              </div>
              <a href="#" className="btn">order now</a>
            </div>
            <div className="box">
              <span className="price"> $5 - $20 </span>
              <img src="../../images/p-4.jpg" alt="" />
              <h3>tasty cupcakes</h3>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="far fa-star" />
              </div>
              <a href="#" className="btn">order now</a>
            </div>
            <div className="box">
              <span className="price"> $5 - $20 </span>
              <img src="../../images/p-5.jpg" alt="" />
              <h3>cold drinks</h3>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="far fa-star" />
              </div>
              <a href="#" className="btn">order now</a>
            </div>
            <div className="box">
              <span className="price"> $5 - $20 </span>
              <img src="../../images/p-6.jpg" alt="" />
              <h3>cold ice-cream</h3>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="far fa-star" />
              </div>
              <a href="#" className="btn">order now</a>
            </div>
          </div>
        </section>
        {/* popular section ends */}
        {/* steps section starts  */}
        <div className="step-container">
          <h1 className="heading">how it <span>works</span></h1>
          <section className="steps">
            <div className="box">
              <img src="../../images/step-1.jpg" alt="" />
              <h3>choose your favorite food</h3>
            </div>
            <div className="box">
              <img src="../../images/step-2.jpg" alt="" />
              <h3>free and fast delivery</h3>
            </div>
            <div className="box">
              <img src="../../images/step-3.jpg" alt="" />
              <h3>easy payments methods</h3>
            </div>
            <div className="box">
              <img src="../../images/step-4.jpg" alt="" />
              <h3>and finally, enjoy your food</h3>
            </div>
          </section>
        </div>
        {/* steps section ends */}
        {/* gallery section starts  */}
        <section className="gallery" id="gallery">
          <h1 className="heading"> our food <span> gallery </span> </h1>
          <div className="box-container">
            <div className="box">
              <img src="../../images/g-1.jpg" alt="" />
              <div className="content">
                <h3>tasty food</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
                <a href="#" className="btn">ordern now</a>
              </div>
            </div>
            <div className="box">
              <img src="../../images/g-2.jpg" alt="" />
              <div className="content">
                <h3>tasty food</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
                <a href="#" className="btn">ordern now</a>
              </div>
            </div>
            <div className="box">
              <img src="../../images/g-3.jpg" alt="" />
              <div className="content">
                <h3>tasty food</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
                <a href="#" className="btn">ordern now</a>
              </div>
            </div>
            <div className="box">
              <img src="../../images/g-4.jpg" alt="" />
              <div className="content">
                <h3>tasty food</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
                <a href="#" className="btn">ordern now</a>
              </div>
            </div>
            <div className="box">
              <img src="../../images/g-5.jpg" alt="" />
              <div className="content">
                <h3>tasty food</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
                <a href="#" className="btn">ordern now</a>
              </div>
            </div>
            <div className="box">
              <img src="../../images/g-6.jpg" alt="" />
              <div className="content">
                <h3>tasty food</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
                <a href="#" className="btn">ordern now</a>
              </div>
            </div>
            <div className="box">
              <img src="../../images/g-7.jpg" alt="" />
              <div className="content">
                <h3>tasty food</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
                <a href="#" className="btn">ordern now</a>
              </div>
            </div>
            <div className="box">
              <img src="../../images/g-8.jpg" alt="" />
              <div className="content">
                <h3>tasty food</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
                <a href="#" className="btn">ordern now</a>
              </div>
            </div>
            <div className="box">
              <img src="../../images/g-9.jpg" alt="" />
              <div className="content">
                <h3>tasty food</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
                <a href="#" className="btn">ordern now</a>
              </div>
            </div>
          </div>
        </section>
        {/* gallery section ends */}
        {/* review section starts  */}
        <section className="review" id="review">
          <h1 className="heading"> our customers <span>reviews</span> </h1>
          <div className="box-container">
            <div className="box">
              <img src="../../images/pic1.png" alt="" />
              <h3>john deo</h3>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="far fa-star" />
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti delectus, ducimus facere quod ratione vel laboriosam? Est, maxime rem. Itaque.</p>
            </div>
            <div className="box">
              <img src="../../images/pic2.png" alt="" />
              <h3>john deo</h3>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="far fa-star" />
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti delectus, ducimus facere quod ratione vel laboriosam? Est, maxime rem. Itaque.</p>
            </div>
            <div className="box">
              <img src="../../images/pic3.png" alt="" />
              <h3>john deo</h3>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="far fa-star" />
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti delectus, ducimus facere quod ratione vel laboriosam? Est, maxime rem. Itaque.</p>
            </div>
          </div>
        </section>
        {/* review section ends */}
        {/* order section starts  */}
        <section className="order" id="order">
          <h1 className="heading"> <span>order</span> now </h1>
          <div className="row">
            <div className="image">
              <img src="../../images/order-img.jpg" alt="" />
            </div>
            <form action>
              <div className="inputBox">
                <input type="text" placeholder="name" />
                <input type="email" placeholder="email" />
              </div>
              <div className="inputBox">
                <input type="number" placeholder="number" />
                <input type="text" placeholder="food name" />
              </div>
              <textarea placeholder="address" name id cols={30} rows={10} defaultValue={""} />
              <input type="submit" defaultValue="order now" className="btn" />
            </form>
          </div>
        </section>
        {/* order section ends */}
        {/* footer section  */}
        <section className="footer">
          <div className="share">
            <a href="#" className="btn">facebook</a>
            <a href="#" className="btn">twitter</a>
            <a href="#" className="btn">instagram</a>
            <a href="#" className="btn">pinterest</a>
            <a href="#" className="btn">linkedin</a>
          </div>
          <h1 className="credit"> created by <span> mr. web designer </span> | all rights reserved! </h1>
        </section>
        {/* scroll top button  */}
        <a href="#home" className="fas fa-angle-up" id="scroll-top" />
        {/* loader  */}
        {/* <div className="loader-container">
          <img src="../../images/loader.gif" alt="" />
        </div> */}
        
      </div>
      

    )
}
export default Home