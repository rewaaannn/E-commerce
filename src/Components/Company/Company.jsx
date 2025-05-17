import React , {Component} from 'react'
import CompanyDetails from '../CompanyDetails/CompanyDetails'
import CompanyAddress from '../CompanyAddress/CompanyAddress'
import CompanyContact from '../CompanyContact/CompanyContact'
import Success from '../Success/Success'

export default class Company extends Component {
    
    state = {
        step: 1,
        companyName: '',
        companyNumber: '',
        Logo: '',
        industry: [],
        country: '',
        city: '',
        address: '',
        phone: '',
        email: '',
        companyWebsiteURL: '',
        facebook: '',
        linkedIn: '',
        twitter: '',
        instagram: ''
    }
    
    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    }
    
    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    }
    
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }
    
    render() {
    
        const { step } = this.state;
        const { companyName, companyNumber, Logo, PlasticBottles, LeftoverFood, TinCans,  country, city, address, phone, email, companyWebsiteURL, facebook, linkedIn, twitter, instagram} = this.state;
        const values = {  companyName, companyNumber, Logo, PlasticBottles, LeftoverFood, TinCans, country, city, address, phone, email, companyWebsiteURL, facebook, linkedIn, twitter, instagram }
    
        switch (step) {
            case 1: 
                return (
                    <CompanyDetails nextStep={this.nextStep} handleChange={this.handleChange} values={values} />
                )
            case 2: 
                return (
                    <CompanyAddress nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={values} />
                )
            case 3: 
                return (
                    <CompanyContact nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={values} />
                )
            case 4:
                return (
                    <Success />
                )
            // never forget the default case, otherwise VS code would be mad!
            default: 
               // do nothing
        }
    }
    
}
