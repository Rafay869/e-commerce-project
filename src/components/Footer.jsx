import React from 'react';
function footer(){
    return(
        <footer className='footer'>
            <div className="container">
                <div className="footer-grid">
                    <div>
                        <h4 className='foooter-title'>Shop Vibes</h4>
                        <p>Your ultimate destination for quality products at unbeatable prices</p>
                    </div>
                    <div>
                        <h4 className='footer-title'>Quick Links</h4>
                        <p>Home</p>
                        <p>Products</p>
                        <p>Cart</p>
                    </div>
                    <div>
                        <h4 className='footer-title'>Contact Us</h4>
                        <p>E-mail: support@shopvibe.com</p>
                        <p>Phone: +PB65 AMG0008</p>
                    </div>
                </div>
                <p style={{textAlign: 'center', borderTop: '1px solid #334155', paddingTop: '20px'}}>
                    &copy; {new Date().getFullYear()} Shop Vibe store. All rights Reserved.</p>
            </div>
        </footer>
    )
}
export default footer