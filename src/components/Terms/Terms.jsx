import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://static.vecteezy.com/system/resources/previews/004/968/512/non_2x/data-protection-privacy-policy-concept-illustration-flat-design-eps10-minimalist-and-modern-style-graphic-element-for-landing-page-empty-state-app-or-web-ui-infographic-social-media-etc-vector.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='me-20 text-justify'>
                        <h1 className="text-5xl font-bold">Terms & Condition</h1>
                        <p className="py-6">Welcome to Chef Hat! By accessing and using this website,
                            you agree to comply with and be bound by the following terms and conditions.
                            To use our services, you must be eligible under applicable law, and you are
                            responsible for providing accurate information. All content and intellectual
                            property on this site are owned by Arab Chef's Association. Please review our privacy
                            policy to understand how we collect, use, and protect your data. Prohibited activities
                            include but are not limited to hacking and spamming.
                            We reserve the right to terminate or suspend accounts for violation of these terms.
                            While we strive for accuracy, we disclaim any liability for errors or omissions.
                            These terms are governed by the laws of Act 23, and any disputes will be
                            resolved through Contact to the Association. We may update these terms,
                            and you will be notified of any changes. Thank you for using Chef Hat!"</p>
                        <Link to='/register' className="btn bg-gradient-to-r from-teal-500 to-teal-800 text-white">Back To Register</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Terms;