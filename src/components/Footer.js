import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { FaSpotify, FaYoutube, FaInstagram, FaItunes, FaAmazon } from "react-icons/fa";

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-md-block'>
          <span>Check out my music!</span>
        </div>
        <a href=""><FaSpotify className='icon' size="25px" /> Spotify</a>
        <a href=""><FaYoutube className='icon' size="25px" /> Youtube</a>
        <a href=""><FaInstagram className='icon' size="25px" /> Instagram</a>
        <a href=""><FaItunes className='icon' size="25px" /> Itunes</a>
        <a href=""><FaAmazon className='icon' size="25px" /> Amazon Music</a>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>© 2023 Copyright: PurplesChala </div>
    </MDBFooter>
  );
}