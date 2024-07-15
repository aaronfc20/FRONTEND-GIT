import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const ErrorNotFound = () => {
  return (
    <main>
      <Header  />
      <section className="main-container-error">
        <h1>Error 404 page not found</h1>
        <a href="/">Go back to Home Page</a>
        <img src="/img/errornotfound.png" alt="" />
      </section>
      <Footer/>
      
    </main>
  );
};


export default ErrorNotFound;