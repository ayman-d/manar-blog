import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppNavbar from "./components/AppNavbar/AppNavbar";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AdminBlogList from "./components/AdminBlogList/AdminBlogList";
import BlogDetail from "./components/BlogDetail/BlogDetail";
import ContactForm from "./components/ContactForm/ContactForm";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <AppNavbar />
        <div className="row" style={{ marginBottom: "-40px" }}>
          {/* <div className="col-lg-3 app-contact">
            <ContactForm />
          </div> */}

          <div className="blog-block col-md-12">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/admin" component={AdminBlogList} />
              <Route exact path="/contact" component={ContactForm} />
              <Route path="/:blog_id" component={BlogDetail} />
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
