// Copyright (c) 2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import NavBar from '../modules/navbar/navbar.jsx';
import Footer from '../modules/footer/footer.jsx';
import '../SCSS/about.scss';
import aboutMePhoto from '../images/aboutMePhoto.webp';

export default function About() {
    return (
        <>
            <div class='background' />
            <NavBar />
            <div class='photo'>
                <img src={aboutMePhoto} alt='Sketch of Aiden' />
            </div>
            <Footer />
        </>
    );
}
